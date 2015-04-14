$(function() {
    $('#vols').change(function() {
        runCalcs();
    });
    $('#temp').change(function() {
        runCalcs();
    });

    runCalcs();
    buildTable();
});

function runCalcs() {
    var v = $('#vols').val();
    var t = $('#temp').val();


    var p = kegPSI(v, t);

    $('#psi').val(p.toFixed(1));
}

function kegPSI(v, t) {
    //equation from http://hbd.org/hbd/archive/2788.html#2788-8
    return -16.6999 - 0.0101059 * t + 0.00116512 * Math.pow(t, 2) + 0.173354 * t * v + 4.24267 * v - 0.0684226 * Math.pow(v, 2);
}

function buildTable() {
    var t_start = 34;
    var t_end  = 50;
    var v_start = 1.8;
    var v_end   = 3.7;

    var html = '<table class="table table-condensed" style="font-size: .8em; text-align: center">';

    html += '<tr><td></td>';
    count = Math.ceil((v_end - v_start) / .2);
    html += '<th style="text-align: center" colspan="' + count + '">Volumes CO<sub>2</sub></th></tr>';


    html += '<tr><td></td>';
    console.log("count = " + count);
    for(v=v_start; v<=v_end; v+=.2) {
        html += '<th style="text-align: center">' + v.toFixed(1) + '</th>';
    }
    html += '</tr>';

    for(t=t_start; t<=t_end; t+=2) {
        html += '<tr><th>' + t + '&deg;F</th>';
        for(v=v_start; v<=v_end; v+=.2) {
            var p = kegPSI(v,t).toFixed(1);
            html += '<td>' + p + '</td>';
        }
        html += '</tr>';

    }

    html += '</table>';
    $('#psi-table').html(html);
}
