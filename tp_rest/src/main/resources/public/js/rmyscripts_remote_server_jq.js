/**
 * Created by serg on 26.11.15.
 */

function sendAjax() {
    $.ajax({
        url: '/firstData',
        type: 'GET',
        timeout: 12000,
        dataType: 'text'  //text, xml, html, json
    }).done(function (responseText) {
        $('#answer').text(responseText);
    }).fail(function () {
        alert('An error has occurred - you may not have been entered');
    });
}

function sendDataFromForm() {
    $.ajax({
        url: '/firstData',
        type: 'POST',
        timeout: 12000,
        dataType: 'text',
        data: {
            firstName: myForm.fname.value,
            lastName: myForm.lname.value
        }
/*
 data: {
 ('#myForm').serializeArray();
 }
*/
    }).done(function (responseText) {
        $('#answer').text(responseText);
    }).fail(function () {
        alert('An error has occurred - you may not have been entered');
    });
}