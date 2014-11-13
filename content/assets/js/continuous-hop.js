var total_hops = 0;
var template_row_hop;
var template_row_results;

$(function() {
    $('#og').change(function() {
        runCalcs();
    });
    $('#fg').change(function() {
        runCalcs();
    });

    $('#time').change(function() { runCalcs(); });
    $('#dpm').change(function() { runCalcs(); });

    Handlebars.registerHelper('toFixed', function(value) {
        return value.toFixed(2);
    });

    Handlebars.registerHelper('minutesDecimal', function(value) {
        var mins = Math.floor(value);
        var secs = Math.floor((value - mins) * 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    });

    template_row_hop = Handlebars.compile($('#template-row-hop').html());
    template_row_results = Handlebars.compile($('#template-row-results').html());

    $('#btn-add-hops').click(function() { addHops(); });
    $('#btn-compute').click(function() { runCalcs(); });

    addHops();
});

function addHops() {
    var container = $('#container-hops');
    container.append(template_row_hop({id: total_hops}));
    total_hops++;
}

function runCalcs() {
    var volume  = parseFloat($('#volume').val());
    var gravity = parseFloat($('#gravity').val());
    var time    = parseInt($('#time').val());
    var dpm     = parseFloat($('#dpm').val());

    var hops = [];
    // TODO: add input validation
    $('div[data-type=hops]').each(function(index) {
        var hop = {
            name: $(this).find('[data-type=name]').val(),
            amount: parseFloat($(this).find('[data-type=amount]').val()),
            alpha_acid: parseFloat($(this).find('[data-type=alpha-acid]').val()) / 100,
            ibus: [],
        };
        hops.push(hop);
    });

    // Sort by amount descending
    hops.sort(function(a,b) {
        if(a.amount == b.amount) {
            return 0;
        } else {
            return (a.amount > b.amount ? -1 : 1);
        }
    });

    var drops = continuous_hop(hops, volume, gravity, time, dpm);

    var total_ibus = 0;
    $.each(drops, function(index, drop) {
        total_ibus += drop.ibus;
    });

    $('#ibu_total').val(total_ibus.toFixed(2));

    $('#results').html(
        template_row_results({
            drops: drops
        })
    );

}

function continuous_hop(hops, volume, gravity, time, dpm) {

    var grav_correction = 1 + ((gravity - 1.050) / 2);
    var total_drops = Math.floor(time / (1/dpm));
    var between_drops = time / total_drops;

    $.each(hops, function(index, value) {
        value.amount_per_drop = value.amount / total_drops;
    });

    var drops = [];

    for(i=0; i< total_drops; i++) {
        var drop = {
            boil_time: time - i * between_drops
        };
        drop.util = utilization(gravity, drop.boil_time);
        drop.hops = [];
        drop.ibus = 0;
        drop.count = i + 1;
        $.each(hops, function(i, value) {
            var ibus = ibu(value.amount_per_drop, value.alpha_acid, drop.util, volume, grav_correction);
            value.ibus.push(ibus);
            drop.ibus += ibus;
            drop.hops.push({
                name: value.name,
                ibus: ibus,
                amount: value.amount_per_drop,
            });
        });
        drops.push(drop);
    }

    return drops;
}

function ibu(weight, alpha_acid, utilization, volume, gravity_correction) {
    return (weight * utilization * alpha_acid * 7489) / (volume * gravity_correction);
}

// These came from John Palmer's How to Brew: http://www.howtobrew.com/section1/chapter5-5.html
function utilization(gravity, time) {
    var f_G = 1.65 * Math.pow(0.000125, gravity - 1);
    var f_T = (1 - Math.pow(Math.E, -0.04 * time)) / 4.15;
    return f_G * f_T;
}
