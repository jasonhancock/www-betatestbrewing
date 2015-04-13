$(function() {
    $('#vols').change(function() {
        runCalcs();
    });
    $('#temp').change(function() {
        runCalcs();
    });

    runCalcs();
});

function runCalcs() {
    var v = $('#vols').val();
    var t = $('#temp').val();

    //equation from http://hbd.org/hbd/archive/2788.html#2788-8

    var p = -16.6999 - 0.0101059 * t + 0.00116512 * Math.pow(t, 2) + 0.173354 * t * v + 4.24267 * v - 0.0684226 * Math.pow(v, 2);


    $('#psi').val(p.toFixed(1));
}
