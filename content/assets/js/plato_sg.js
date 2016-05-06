$(function() {
    $('#gravity').change(function() {
        runCalcs();
    });
    $('#plato').change(function() {
        runCalcs();
    });

    runCalcs();
    buildTable();
});

function runCalcs() {
    var gravity = $('#gravity').val();
    var plato = $('#plato').val();

    var gravity_result = gravity_to_plato(gravity);
    var plato_result = plato_to_gravity(plato);

    $('#gravity_result').val(gravity_result.toFixed(1));
    $('#plato_result').val(plato_result.toFixed(3));
}

function gravity_to_plato(gravity) {
    return (-1 * 616.868) + (1111.14 * gravity) - (630.272 * Math.pow(gravity, 2)) + (135.997 * Math.pow(gravity, 3));
}

function plato_to_gravity(plato) {
    return 1 + (plato / (258.6 - ((plato/258.2) *227.1)));
}

function buildTable() {
    var start = .5;
    var end  = 40;
    var step = .5;

    var html = '<table class="table table-condensed table-nonfluid" style="font-size: .8em; text-align: center">';

    html += '<tr><th style="text-align: center" colspan="2">Plato To Gravity Conversion Table</th></tr>';
    html += '<tr><th>Plato (&deg;P)</th><th>SG</th></tr>';

    for(p=start; p<=end; p+=step) {
        html += '<tr><td>' + p.toFixed(1) + '</td><td>' + plato_to_gravity(p).toFixed(3) + '</td></tr>';
    }

    html += '</table>';
    $('#conversion-table').html(html);
}

