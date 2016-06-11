#!/usr/bin/perl


use strict;
use warnings;
use JSON;
use XML::LibXML;

my $outfile = $ARGV[0] || die("no outfile");

# load
open my $fh, '<', 'bower_components/BJCP-styles-XML/styleguide-2015.xml';
binmode $fh; # drop all PerlIO layers possibly created by a use open pragma
my $doc = XML::LibXML->load_xml(IO => $fh);
close $fh;

my @styles;

my $include_guidelines = 1;

foreach my $class ($doc->findnodes('/styleguide/class')) {

    my $type = $class->findnodes('./@type')->to_literal . '';
    #print "$type\n";
    foreach my $cat ($class->findnodes('./category')) {
        my $id = $cat->findnodes('./@id')->to_literal . '';
        my $cat_name = $cat->findnodes('./name')->to_literal . '';

        foreach my $subcat ($cat->findnodes('./subcategory')) {
            my $subcat_id = $subcat->findnodes('./@id')->to_literal . '';
            my $subcat_name = $subcat->findnodes('./name')->to_literal . '';
            #print "    $subcat_id $subcat_name\n";

            my $letter = '';
            if($subcat_id=~m/\d+(\D+)$/) {
                $letter = $1;
            }

            my $style = {
                letter        => $letter,
                number        => $id,
                name          => $subcat_name,
                category_name => $cat_name,
                type          => $type,
            };

            if($include_guidelines) {

                $$style{guidelines}{overall}    = trim($subcat->findnodes('./impression')->to_literal . '');
                $$style{guidelines}{aroma}      = trim($subcat->findnodes('./aroma')->to_literal . '');
                $$style{guidelines}{appearance} = trim($subcat->findnodes('./appearance')->to_literal . '');
                $$style{guidelines}{flavor}     = trim($subcat->findnodes('./flavor')->to_literal . '');
                $$style{guidelines}{mouthfeel}  = trim($subcat->findnodes('./mouthfeel')->to_literal . '');
            }

            push(@styles, $style);
        }
    }
}

open OUT, ">$outfile" or die("Can't open $outfile");
print OUT encode_json(\@styles);
close OUT;

sub  trim { my $s = shift; $s =~ s/^\s+|\s+$//g; return $s }
