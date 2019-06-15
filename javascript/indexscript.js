let nav_one, nav_two, nav_three, nav_four, nav_five, nav_six;
var questionCounter, jsonQuestions, client;
var dashboard_section, take_exam_section, questions_section, students_section, view_result_section, settings_section;
var mys;
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

var HttpClient2 = function() {
    this.post = function(aUrl, dataToSend) {
        var myHttpRequest = new XMLHttpRequest();
        myHttpRequest.onreadystatechange = function() {
            if (myHttpRequest.readyState == 4 && myHttpRequest.status == 200)
                aCallback(myHttpRequest.responseText);
        }

        myHttpRequest.open("POST", aUrl, true);
        myHttpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        myHttpRequest.send(dataToSend);
    }
}

window.addEventListener("load", addMyEvents);

function addMyEvents() {
    try {
        getDOMObjects();
        dashboardItemsClick();
        dashboard_section.style.display = 'block';
        dashboard_section.style.flexDirection = 'row';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'none';
        students_section.style.display = 'none';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'none';
    } catch (error) {
        console.log(error.message)
    }
}

class MySelectors {
    el(idSelector) {
        return document.getElementById(idSelector);
    }

    cl(classSelector) {
        return document.getElementsByClassName(classSelector);
    }

    qs(querySelector) {
        return document.querySelector(querySelector);
    }

    qsAll(querySelectorAll) {
        return document.querySelectorAll(querySelectorAll);
    }

}

function on(ele, eventname, cb, multi = false) {
    if (multi) {
        let element = document.querySelectorAll(ele)
        element.forEach(el => {
            el.addEventListener(eventname, cb)
        })
    } else {
        document.querySelector(ele).addEventListener(eventname, cb)
    }
}

function $el(ele, multi = false) {
    if (multi) return document.querySelectorAll(ele)
    return document.querySelector(ele)
}

function loadFirstQuestion() {
    client = new HttpClient();
    client.get('/questions', function(response) {
        jsonQuestions = JSON.parse(response);
        questionCounter = 0;
        $el('span#cQ').textContent = questionCounter + 1;
        $el('div.current-question').textContent = jsonQuestions[questionCounter].question;
        $el('div#optionA').textContent = jsonQuestions[questionCounter].optionA;
        $el('div#optionB').textContent = jsonQuestions[questionCounter].optionB;
        $el('div#optionC').textContent = jsonQuestions[questionCounter].optionC;
        $el('div#optionD').textContent = jsonQuestions[questionCounter].optionD;
        $el('div#optionE').textContent = jsonQuestions[questionCounter].optionE;
    });
    loadCurrentQuestion();
}

function loadCurrentQuestion() {

    mys = new MySelectors();

    on('#next-button', 'click', function() {
        //javascript: get_url('/mysql');
        questionCounter = questionCounter + 1;
        $el('span#cQ').textContent = questionCounter + 1;
        $el('div.current-question').textContent = jsonQuestions[questionCounter].question;
        $el('div#optionA').textContent = jsonQuestions[questionCounter].optionA;
        $el('div#optionB').textContent = jsonQuestions[questionCounter].optionB;
        $el('div#optionC').textContent = jsonQuestions[questionCounter].optionC;
        $el('div#optionD').textContent = jsonQuestions[questionCounter].optionD;
        $el('div#optionE').textContent = jsonQuestions[questionCounter].optionE;
    });

    mys.el('previous-button').addEventListener('click', function() {
        $el('span#cQ').textContent = questionCounter;
        questionCounter = questionCounter - 1;
        $el('div.current-question').textContent = jsonQuestions[questionCounter].question;
        $el('div#optionA').textContent = jsonQuestions[questionCounter].optionA;
        $el('div#optionB').textContent = jsonQuestions[questionCounter].optionB;
        $el('div#optionC').textContent = jsonQuestions[questionCounter].optionC;
        $el('div#optionD').textContent = jsonQuestions[questionCounter].optionD;
        $el('div#optionE').textContent = jsonQuestions[questionCounter].optionE;
    });

}

function showSnackBar(snackBarMessage) {
    // Get the snackbar DIV
    var x = mys.el('snackbar');

    // Add the "show" class to DIV
    x.className = "show";
    x.textContent = snackBarMessage;

    // After 1.5 seconds, remove the show class from DIV
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 1500);
}

function getDOMObjects() {
    nav_one = document.getElementById("dashboard-navigator1");
    nav_two = document.getElementById("dashboard-navigator2");
    nav_three = document.getElementById("dashboard-navigator3");
    nav_four = document.getElementById("dashboard-navigator4");
    nav_five = document.getElementById("dashboard-navigator5");
    nav_six = document.getElementById("dashboard-navigator6");
    dashboard_section = document.getElementById("dashboard-section");
    take_exam_section = document.getElementById("take-exam-section");
    questions_section = document.getElementById("questions-section");
    students_section = document.getElementById("students-section");
    view_result_section = document.getElementById("view-result-section");
    settings_section = document.getElementById("settings-section");
}

function dashboardItemsClick() {

    nav_one.onclick = function() {
        dashboard_section.style.display = 'block';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'none';
        students_section.style.display = 'none';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'none';
        controlDashboardClick(nav_one);
    }
    nav_two.onclick = function() {
        dashboard_section.style.display = 'none';
        take_exam_section.style.display = 'flex';
        take_exam_section.style.flexDirection = 'row';
        questions_section.style.display = 'none';
        students_section.style.display = 'none';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'none';
        loadFirstQuestion();
        controlDashboardClick(nav_two);
    }
    nav_three.onclick = function() {
        dashboard_section.style.display = 'none';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'flex';
        questions_section.style.flexDirection = 'row';
        students_section.style.display = 'none';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'none';
        controlDashboardClick(nav_three);
    }
    nav_four.onclick = function() {
        dashboard_section.style.display = 'none';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'none';
        students_section.style.display = 'block';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'none';
        controlDashboardClick(nav_four);
    }
    nav_five.onclick = function() {
        dashboard_section.style.display = 'none';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'none';
        students_section.style.display = 'none';
        view_result_section.style.display = 'block';
        settings_section.style.display = 'none';
        controlDashboardClick(nav_five);
    }
    nav_six.onclick = function() {
        dashboard_section.style.display = 'none';
        take_exam_section.style.display = 'none';
        questions_section.style.display = 'none';
        students_section.style.display = 'none';
        view_result_section.style.display = 'none';
        settings_section.style.display = 'block';
        controlDashboardClick(nav_six);
    }

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function controlDashboardClick(evt) {
    // Declare all variables
    var i, dashboard_items;

    // Get all elements with class="tablinks" and remove the class "active"
    dashboard_items = document.getElementsByClassName("actual-dashboard-items");
    for (i = 0; i < dashboard_items.length; i++) {
        dashboard_items[i].className = dashboard_items[i].className.replace(" actyv", "");
    }

    // Add an "active" class to the button that opened the tab
    evt.className += " actyv";

}

function dashboardItemsHover() {

    nav_one.onmouseover = function() {
        nav_one.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';
    }
    nav_one.onmouseout = function() {
        nav_one.style.backgroundColor = 'rgb(25,33,43)';
    }
    nav_two.onmouseover = function() {
        nav_two.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';

    }
    nav_two.onmouseout = function() {
        nav_two.style.backgroundColor = 'rgb(25,33,43)';
    }
    nav_three.onmouseover = function() {
        nav_three.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';

    }
    nav_three.onmouseout = function() {
        nav_three.style.backgroundColor = 'rgb(25,33,43)';
    }
    nav_four.onmouseover = function() {
        nav_four.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';

    }
    nav_four.onmouseout = function() {
        nav_four.style.backgroundColor = 'rgb(25,33,43)';
    }
    nav_five.onmouseover = function() {
        nav_five.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';

    }
    nav_five.onmouseout = function() {
        nav_five.style.backgroundColor = 'rgb(25,33,43)';
    }
    nav_six.onmouseover = function() {
        nav_six.style.backgroundColor = 'rgb(69, 74, 71, 0.5)';

    }
    nav_six.onmouseout = function() {
        nav_six.style.backgroundColor = 'rgb(25,33,43)';
    }
}

function get_url(url, params) {
    var form = document.createElement('form');
    form.action = url;
    form.method = 'GET';

    for (var i in params) {
        if (params.hasOwnProperty(i)) {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = i;
            input.value = params[i];
            form.appendChild(input);
        }
    }
    document.body.appendChild(form);
    form.submit();
}
//alert("To enjoy this software, please ensure that javascript is enabled")
//document.getElementById("dashboard-navigator").addEventListener("mouseover", describeNavigator);