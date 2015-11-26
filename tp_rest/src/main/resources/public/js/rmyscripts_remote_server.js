/**
 * Created by serg on 21.11.15.
 */

function tryMyLuck() {


    var request = new XMLHttpRequest();
    try {

        request.open("GET", "/firstData", false);
        request.send();


// wait for the request status to be returned

        if (request.status != 200) {
            alert("Error " + request.status + " - " + request.statusText);
        } else {
            alert(request.responseText);
            console.log(request.responseText);
        }
    } catch(exception) {
        console.lof("exception occurs = " + exception);
    }
}

function getResponse(request) {
    var type = request.getResponseHeader("Content-Type");
    switch (type) {
        case "text/xml" :
            return request.responseXML;
        default :
            return request.responseText;
    }
}

function getResponseJSON(request) {
    var type = request.getResponseHeader();
    switch( type ) {
        case "text/xml" :
            return request.responseXML;
        case "application/json" :
            return JSON.parse(request.responseText);
        default :
            return request.responseText;
    }
}

function sendSolidRequest() {
    var request = new XMLHttpRequest();
    try {

        request.open("GET", "/firstData", false);
        request.onreadystatechange = function() {
            console.log("current staus = " + request.readyState);
            if (request.readyState === 4) {
                var response = JSON.parse(request.responseText);
                console.log("request is recieved");
                console.dir(response);
            }
        };
        request.send();
    } catch(exception) {
        console.lof("exception occurs = " + exception);
    }
}


