var styles = [];
var globaldata;

$(function() {
    var result = $('#results');
    result.html('<i class="fa fa-circle-o-notch fa-spin"></i>');

    $.ajax({
        type: 'GET',
        url: '/assets/data/style-data.min.json',
        dataType: 'json',
    }).fail(function(jqXHR) {
        alert('Error: (' + jqXHR.status + ') ' + jqXHR.statusText);
    }).done(function(data) {
        globaldata = data;

        $.each(data, function( index, value ) {
            if(value.type == "beer") {
                styles.push(value);
            }
        });
        pick_random();
    });

    $('#run').click(function() {
        pick_random();
    });
});

function pick_random() {
    var item = styles[Math.floor(Math.random()*styles.length)];
    $('#results').html(item.number + item.letter + ' - ' + item.name);
    $('#style').show();
    $('#aroma').html(item['guidelines']['aroma']);
    $('#appearance').html(item['guidelines']['appearance']);
    $('#flavor').html(item['guidelines']['flavor']);
    $('#mouthfeel').html(item['guidelines']['mouthfeel']);
    $('#overall').html(item['guidelines']['overall']);
}
