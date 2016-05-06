$(function() {
    $('#gravity').change(function() {
        runCalcs();
    });
    $('#plato').change(function() {
        runCalcs();
    });

    runCalcs();
});

function runCalcs() {
    var gravity = $('#gravity').val();
    var plato = $('#plato').val();

    var gravity_result = gravity_to_plato(gravity);
    var plato_result = plato_to_gravity(plato);

    console.log(gravity_result);
    console.log(plato_result);

    $('#gravity_result').val(gravity_result.toFixed(1));
    $('#plato_result').val(plato_result.toFixed(3));
}

function gravity_to_plato(gravity) {
    return (-1 * 616.868) + (1111.14 * gravity) - (630.272 * Math.pow(gravity, 2)) + (135.997 * Math.pow(gravity, 3));
}

function plato_to_gravity(plato) {
    return 1 + (plato / (258.6 - ((plato/258.2) *227.1)));
}
