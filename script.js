let url = '//restcountries.eu/rest/v2/';
$(document).ready(function () {
    $("#all").click(function () {
        $.get(url + 'all', function (data) {
            $('#oneC').html('');
            $.each(data, function (index, val) {
                var divhtml = `<div class="out"><div class="img"> <img src="${val.flag}" alt="${val.name}" /></div><div class="det"> <p> <b>Name:</b>  ${val.name} </p> <p> <b>Top Level Domain:</b> ${val.topLevelDomain} </p><p> <b>Capital:</b> ${val.capital} </p> <p> <b>Currencies: <i>name - </i></b> ${val.currencies[0].name} | <b><i>code -</i> </b> ${val.currencies[0].code} | <b><i>symbol -</i> </b> ${val.currencies[0].symbol}</p> </div></div>`
                $('#oneC').append(divhtml);
                $('#just').val('').focus();
            });
        }).fail(function () { alert('There is a problem\nPlease try again') });
    });

    $("#one").click(function () {
        fill();
    });
});

$('#just').keypress(function (event) {

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        fill()
    }
});

function fill() {
    if (!$('#just').val()) { $('#just').val('').focus(); return; }
    $.get(url + 'name/' + $('#just').val(), function (data) {
        $('#oneC').html('');
        $.each(data, function (index, val) {
            var divhtml = `<div class="out"><div class="img"> <img src="${val.flag}" alt="${val.name}" /></div><div class="det"> <p> <b>Name:</b>  ${val.name} </p> <p> <b>Top Level Domain:</b> ${val.topLevelDomain} </p><p> <b>Capital:</b> ${val.capital} </p> <p> <b>Currencies: <i>name - </i></b> ${val.currencies[0].name} | <b><i>code -</i> </b> ${val.currencies[0].code} | <b><i>symbol -</i> </b> ${val.currencies[0].symbol}</p> </div></div>`
            $('#oneC').append(divhtml);
            $('#just').val('').focus();
        });
    }).fail(function () { alert('Invalid name.\nPlease try again'); $('#just').val('').focus() });
}