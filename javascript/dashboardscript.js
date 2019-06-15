window.addEventListener("load", addMyEvents);
var mys;

function addMyEvents() {
    try {
        mys = new MySelectors2();
        openAndCloseModals();
        saveActionInModals();
    } catch (error) {
        console.log(error.message)
    }
}

function $el(ele, multi = false) {
    if (multi) return document.querySelectorAll(ele)
    return document.querySelector(ele);
}

class MySelectors2 {
    el(idSelector) {
        return document.getElementById(idSelector);
    }

    cl(classSelector) {
        return document.getElementsByClassName(classSelector);
    }

    qs(querySelector) {
        return document.querySelector(querySelector);
    }

}

function openAndCloseModals() {

    $el('div.as-btn').addEventListener('click', function() {
        mys.el('add-session-modal').style.display = "block";
    });

    mys.el('add-session-close').onclick = function() {
        mys.el('add-session-modal').style.display = "none";
    }

    $el('div.vs-btn').addEventListener('click', function() {
        mys.el('view-session-modal').style.display = "block";
    });

    mys.el('view-session-close').onclick = function() {
        mys.el('view-session-modal').style.display = "none";
    }

    $el('div.at-btn').addEventListener('click', function() {
        mys.el('add-term-modal').style.display = "block";
    });

    mys.el('add-term-close').onclick = function() {
        mys.el('add-term-modal').style.display = "none";
    }

    $el('div.vt-btn').addEventListener('click', function() {
        mys.el('view-term-modal').style.display = "block";
    });

    mys.el('view-term-close').onclick = function() {
        mys.el('view-term-modal').style.display = "none";
    }

    $el('div.aj-btn').addEventListener('click', function() {
        mys.el('add-subject-modal').style.display = "block";
    });

    mys.el('add-subject-close').onclick = function() {
        mys.el('add-subject-modal').style.display = "none";
    }

    $el('div.vj-btn').addEventListener('click', function() {
        mys.el('view-subject-modal').style.display = "block";
    });

    mys.el('view-subject-close').onclick = function() {
        mys.el('view-subject-modal').style.display = "none";
    }

    $el('div.an-btn').addEventListener('click', function() {
        mys.el('add-student-modal').style.display = "block";
    });

    mys.el('add-student-close').onclick = function() {
        mys.el('add-student-modal').style.display = "none";
    }

    $el('div.vn-btn').addEventListener('click', function() {
        mys.el('view-student-modal').style.display = "block";
    });

    mys.el('view-student-close').onclick = function() {
        mys.el('view-student-modal').style.display = "none";
    }

    $el('div.ar-btn').addEventListener('click', function() {
        mys.el('add-teacher-modal').style.display = "block";
    });

    mys.el('add-teacher-close').onclick = function() {
        mys.el('add-teacher-modal').style.display = "none";
    }

    $el('div.vr-btn').addEventListener('click', function() {
        mys.el('view-teacher-modal').style.display = "block";
    });

    mys.el('view-teacher-close').onclick = function() {
        mys.el('view-teacher-modal').style.display = "none";
    }

    $el('div.am-btn').addEventListener('click', function() {
        mys.el('add-name-of-class-modal').style.display = "block";
    });

    mys.el('add-name-of-class-close').onclick = function() {
        mys.el('add-name-of-class-modal').style.display = "none";
    }

    $el('div.vm-btn').addEventListener('click', function() {
        mys.el('view-name-of-class-modal').style.display = "block";
    });

    mys.el('view-name-of-class-close').onclick = function() {
        mys.el('view-name-of-class-modal').style.display = "none";
    }

    $el('button#cancel-session').onclick = function() {
        mys.el('add-session-modal').style.display = "none";
    }

    $el('button#cancel-term').onclick = function() {
        mys.el('add-term-modal').style.display = "none";
    }

    $el('button#cancel-subject').onclick = function() {
        mys.el('add-subject-modal').style.display = "none";
    }

    $el('button#cancel-student').onclick = function() {
        mys.el('add-student-modal').style.display = "none";
    }

    $el('button#cancel-teacher').onclick = function() {
        mys.el('add-teacher-modal').style.display = "none";
    }

    $el('button#cancel-name-of-class').onclick = function() {
        mys.el('add-name-of-class-modal').style.display = "none";
    }

}

function saveActionInModals() {

    //Save new session
    $el('button#save-session').onclick = function() {

        var poster = new HttpClient2();
        var tss = mys.el('title-of-session-field').value;
        if (tss) {
            poster.post('/saveAcademicSession', tss);
            showSnackBar("Data saved successfully.");
            mys.el('title-of-session-field').value = "";
        } else {
            showSnackBar("Name of Class cannot be empty.");
        }

    }

    //Save new term
    $el('button#save-term').onclick = function() {

        var http = new XMLHttpRequest();
        var url = '/saveTerm';

        var sDate = mys.el('term-start-date').value;
        var eDate = mys.el('term-end-date').value;
        var tTitle = mys.el('term-title').value;
        var myArray = [
            sDate,
            eDate,
            tTitle
        ];

        if (sDate && eDate && tTitle) {

            http.open('POST', url, true);
            http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            http.onreadystatechange = function() { //Call a function when the state changes.
                if (http.readyState == 4 && http.status == 200) {
                    alert(http.responseText);
                }
            }
            http.send(JSON.stringify(myArray));
            showSnackBar("Data saved successfully.");
            mys.el('term-start-date').value = "";
            mys.el('term-end-date').value = "";
            mys.el('term-title').value = "";

        } else {
            showSnackBar("Please fill all the fields.");
        }

    }

    //Save new subject
    $el('button#save-subject').onclick = function() {
        var http = new XMLHttpRequest();
        var url = '/saveSubject';

        var tss = mys.el('subject-title-field').value;

        if (tss) {

            http.open('POST', url, true);
            http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
            http.onreadystatechange = function() { //Call a function when the state changes.
                if (http.readyState == 4 && http.status == 200) {
                    alert(http.responseText);
                }
            }
            http.send(tss);
            showSnackBar("Data saved successfully.");
            mys.el('subject-title-field').value = "";

        } else {
            showSnackBar("Subject cannot be empty.");
        }

    }

    //Save new student
    $el('button#save-student').onclick = function() {

        var poster = new HttpClient2();
        var sLastName = mys.el('student-last-name').value;
        var sFirstName = mys.el('student-first-name').value;
        var sClass = mys.el('student-class');
        var actualClass = sClass.options[sClass.selectedIndex].text;
        var sPassword = mys.el('student-password').value;

        var myArray = [
            sLastName,
            sFirstName,
            actualClass,
            sPassword
        ];

        if (sLastName && sFirstName && actualClass && sPassword) {
            if (actualClass == 'Class') {
                showSnackBar("Please choose a valid class");
            } else {
                poster.post('/saveStudent', JSON.stringify(myArray));
                showSnackBar("Data saved successfully.");
                mys.el('student-last-name').value = "";
                mys.el('student-first-name').value = "";
                mys.el('student-class').selectedIndex = 0;
                mys.el('student-password').value = "";
            }
        } else {
            showSnackBar("Please fill all the fields.");
        }


    }

    //Save new class
    $el('button#save-name-of-class').onclick = function() {

        var poster = new HttpClient2();
        var tss = mys.el('name-of-class-field').value;
        if (tss) {
            poster.post('/saveNameOfClass', tss);
            showSnackBar("Data saved successfully.");
            mys.el('name-of-class-field').value = "";
        } else {
            showSnackBar("Name of Class cannot be empty.");
        }

    }

    //Save new teacher
    $el('button#save-teacher').onclick = function() {

        var poster = new HttpClient2();
        var sLastName = mys.el('teacher-last-name').value;
        var sFirstName = mys.el('teacher-first-name').value;
        var sId = mys.el('teacher-id').value;
        var sPassword = mys.el('teacher-password').value;

        var myArray = [
            sLastName,
            sFirstName,
            sId,
            sPassword
        ];

        // if (sLastName && sFirstName && sId && sPassword) {

        //     poster.post('/saveTeacher', JSON.stringify(myArray));
        //     showSnackBar("Data saved successfully.");
        //     mys.el('teacher-last-name').value = "";
        //     mys.el('teacher-first-name').value = "";
        //     mys.el('teacher-id').value = "";
        //     mys.el('teacher-password').value = "";

        // } else {
        //     showSnackBar("Please fill all the fields.");
        // }
        showSnackBar("Please fill all the fields.");

    }

}