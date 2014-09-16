$(function() {
    $('#og').change(function() {
        runCalcs();
    });
    $('#fg').change(function() {
        runCalcs();
    });

    runCalcs();
});

function runCalcs() {
    var og = $('#og').val();
    var fg = $('#fg').val();

    var attenuation = apparent_attenuation(og, fg);
    var abv = calc_abv(og, fg);
    var cals = calories(og, fg);

    $('#abv').val(abv.toFixed(2));
    $('#appatt').val(attenuation.toFixed(2));
    $('#calories').val(Math.round(cals));
}

function calc_abv(og, fg) {
    // 1.05 = number of grams of ethanol produced for every gram of C02
    // .79 is the density of ethanol
    return 1.05 / .79 * ( ( og - fg) / fg ) * 100;
}

function apparent_attenuation(og, fg) {
    return ( ( og - fg ) / ( og - 1 ) ) * 100;
}

// http://beersmith.com/blog/2011/02/04/counting-calories-in-your-homebrewed-beer/
function calories(og, fg) {
    var from_alc = 1881.22 * fg * (og-fg)/(1.775-og);
    var from_carbs = 3550 * fg * ((0.1808 * og) + (0.8192 * fg) - 1.0004);

    return from_alc + from_carbs;
}
