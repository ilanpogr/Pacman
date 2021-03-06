var usernames = [
    "a"
];

var passwords = [
    "a"
];

var emails = [];

var current_user;
var loggedIn = false;

function emailExist(sEmail) {
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].localeCompare(sEmail) === 0) {
            return true
        }
    }
    return false;
}

function userExist(sName) {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].localeCompare(sName) === 0) {
            return true;
        }
    }
    return false;
}

// REGISTER USER
$(document).ready(function (e) {
    $('#register_btn').click(function () {
        var sName = $('#name').val();
        var sEmail = $('#email').val();
        var sFirst = $('#firstName').val();
        var sLast = $('#lastName').val();
        var sPass = $('#password').val();
        var flag = true;
// Checking Empty Fields
        if ($.trim(sEmail).length === 0 || $.trim(sName).length === 0 || $.trim(sFirst).length === 0
            || $.trim(sLast).length === 0 || $.trim(sPass).length === 0) {
            alert('All fields are mandatory');
        } else if (!validateName(sFirst) || !validateName(sLast)) {
            alert('First and on name must contain only characters');
        } else if (!validatePassword(sPass)) {
            alert('Your password has to be at least 8 characters long,\n and contain at least one digit and one letter ');
        } else if (!validateEmail(sEmail)) {
            alert('Invalid Email Address');
        } else if (userExist(sName)) {
            alert('This Username already registered');
        } else if (emailExist(sEmail)) {
            alert('This Email already registered');
        } else {
            flag = false;
        }
        if (flag) {
            e.preventDefault();
        } else {
            addUser(sName, sPass, sEmail);
            const myNotification = window.createNotification({
                theme: 'success',
                closeOnClick: true,
                onclick: false,
                positionClass: 'nfc-top-right',
                displayCloseButton: true,
                showDuration: 4000

            });
            myNotification({
                title: 'Account created',
                message: 'please login to start the game'
            });
            display_welcome();
        }
    });
})
;

function addUser(user, pass, email) {
    // var user = $('#name').val();
    // var pass = $('#password').val();
    usernames.push(user.toString());
    passwords.push(pass.toString());
    emails.push(email.toString());
}

function logout() {
    document.getElementById("user").innerHTML = "";
    document.getElementById("register").innerHTML = "<p>REGISTER</p>";
    document.getElementById("login").innerHTML = "<p>LOGIN</p>";
    document.getElementById("register").onclick = display_register;
    document.getElementById("login").onclick = display_login;

    document.getElementById("register_menu").onclick = display_register_menu;
    document.getElementById("register_menu").innerHTML = "Register";
    document.getElementById("login_menu").onclick = display_login_menu;
    document.getElementById("login_menu").innerHTML = "Login";



    loggedIn = false;
    current_user = null;
    display_welcome_menu();
    const myNotification = window.createNotification({
        theme: 'success',
        closeOnClick: true,
        onclick: false,
        positionClass: 'nfc-top-right',
        displayCloseButton: true,
        showDuration: 3000

    });
    myNotification({
        title: 'Logged out successfully',
    });

}

function changedToLoggedIn() {
    loggedIn = true;
    document.getElementById("user").innerHTML = "Hi " + current_user + ".";
    document.getElementById("register").innerHTML = "<p>LET'S PLAY!!!</p>";
    document.getElementById("register").onclick = display_settings_menu;
    document.getElementById("login").innerHTML = "<p>LOGOUT</p>";
    document.getElementById("login").onclick = logout;

    document.getElementById("register_menu").onclick = display_settings_menu;
    document.getElementById("register_menu").innerHTML = "GAME";
    document.getElementById("login_menu").innerHTML = "Logout";
    document.getElementById("login_menu").onclick = logout;



}

function login() {
    var user = $('#name_login').val();
    var pass = $('#password_login').val();
    current_user = user;
    var found = false;
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i].localeCompare(user) === 0) {
            if (passwords[i].localeCompare(pass) === 0) {
                found = true;
                const myNotification = window.createNotification({
                    theme: 'success',
                    closeOnClick: true,
                    onclick: false,
                    positionClass: 'nfc-top-right',
                    displayCloseButton: true,
                    showDuration: 3000

                });
                myNotification({
                    title: 'Welcome ' + current_user + '!',
                });
                changedToLoggedIn();
                display_settings_menu();
            }
            break;
        }
    }
    if (!found) {
        alert('Invalid username or password');
        e.preventDefault();
    }
}

// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}

function validateName(name) {
    var filter = /^[a-zA-Z]+$/;
    if (filter.test(name)) {
        return true;
    } else {
        return false;
    }
}

function validatePassword(sPass) {
    return /[A-Za-z]/.test(sPass) // has a letter
        && /\d/.test(sPass) // has a digit
        && sPass.length >= 8 // proper length
}


// DATE CONSTRAIN - MAX IS TODAY
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0!
// var yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd
// }
// if (mm < 10) {
//     mm = '0' + mm
// }
// today = yyyy + '-' + mm + '-' + dd;
// document.getElementById("date").setAttribute("max", today);