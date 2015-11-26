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

tryMyLuck();