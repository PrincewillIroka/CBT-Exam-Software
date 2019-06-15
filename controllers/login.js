function on(ele, eventname, cb, multi = false) {
    document.querySelector(ele).addEventListener(eventname, cb);
}

function el(idSelector) {
    return document.getElementById(idSelector);
};

on('#login-button', 'click', function(response) {
    var uName = el('username-field').value;
    var pWord = el('password-field').value;
    var loginDetails;

    if (uName && pWord) {
        var http = new XMLHttpRequest();
        var url = '/userLogin';

        var myArray = [
            uName,
            pWord
        ];

        http.open('POST', url, true);

        http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }

        http.send(JSON.stringify(myArray));

        http.get('/login', function(response) {
            loginDetails = JSON.parse(response);
        });

    } else {

    }

});