#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;
use JSON;
use File::Path qw(make_path remove_tree);
use Template;
use Encode::Encoder;
use Encoding::FixLatin qw(fix_latin);

my $infile = $ARGV[0] || die ("no infile passed");
my $dir = $ARGV[1] || die("no output directory passed");

if(-d $dir) {
    remove_tree($dir);
}
make_path($dir);
make_path("$dir/tags");
make_path("$dir/styles");

my $styles = load_data($infile);

#print Dumper($styles);

my %tags;

foreach my $style(@$styles) {
    $$style{name} = Encode::Encoder->new($$style{name}, 'latin1')->utf8;
    $$style{name_sanitized} = sanitize_name($$style{name});
    $$style{url} = sprintf('/pages/bjcp/styles/%s.html', lc($$style{number} . $$style{letter}));

    foreach my $attr(keys %{$$style{guidelines}}) {
        $$style{guidelines}{$attr} = fix_latin($$style{guidelines}{$attr});
    }

    foreach my $tag(@{$$style{tags}}) {
        push(@{$tags{$tag}}, $style);
    }

    my $template = Template->new({
        INCLUDE_PATH => ['./bjcp_templates'],
        ENCODING => 'latin-1',
    });

    my $file = sprintf("$dir/styles/%s.md", lc($$style{number} . $$style{letter}));
    open OUT, ">$file" or die("Can't open $file for output");
    binmode OUT, ':utf8';
    $template->process(
       'style.tt',
       {
            o  => $style,
       },
       \*OUT) || die "Template process failed: ", $template->error(), "\n";;
    close OUT;
}

foreach my $tag(sort keys %tags) {
    my $template = Template->new({
        INCLUDE_PATH => ['./bjcp_templates'],
        ENCODING => 'latin-1',
    });

    my $file = "$dir/tags/$tag.md";
    open OUT, ">$file" or die("Can't open $file for output");

    my $data = $tags{$tag};

    @$data = sort { $$a{name} cmp $$b{name} } @$data;

    $template->process(
       'tag.tt',
       {
            tag  => $tag,
            data => $data,
       },
       \*OUT) || die "Template process failed: ", $template->error(), "\n";;
    close OUT;
}

sub load_data {
    my ($file) = @_;

    my $data;

    {
        open my $fh, '<', $file or die;
        local $/ = undef;
        $data = <$fh>;
        close $fh;
    }

    return decode_json($data);
}

sub sanitize_name {
    my ($str) = @_;

    $str=~s/\s+/_/g;
    $str=~s/://g;
    $str = lc($str);
    return $str;
}
