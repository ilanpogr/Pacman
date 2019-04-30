function closeAllDisplay() {
    let welcome = document.getElementById("welcome");
    let register = document.getElementById("register_form");
    let login = document.getElementById("login_form");
    let settings = document.getElementById("settings");
    let game = document.getElementById("game");

    closeNav();
    settings.style.display = "none";
    welcome.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
    game.style.display = "none";
}

/**
 * Show/hide welcome content
 */
function display_welcome() {
    var x = document.getElementById("welcome");
    if (x.style.display === "none") {
        closeAllDisplay();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display_register() {
    var x = document.getElementById("register_form");
    if (x.style.display === "none") {
        closeAllDisplay();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display_login() {
    var x = document.getElementById("login_form");
    if (x.style.display === "none") {
        closeAllDisplay();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display_game() {
    var x = document.getElementById("game");
    if (x.style.display === "none") {
        closeAllDisplay();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu_btn").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu_btn").style.visibility = "visible";
}

function display_welcome_menu() {
    var stage = document.getElementById("welcome");
    closeAllDisplay();
    if (stage.style.display === "none") {
        stage.style.display = "block";
    } else {
        stage.style.display = "none";
    }
}

function display_register_menu() {
    var stage = document.getElementById("register_form");
    closeAllDisplay();
    if (stage.style.display === "none") {
        stage.style.display = "block";
    } else {
        stage.style.display = "none";
    }
}

function display_login_menu() {
    var stage = document.getElementById("login_form");
    closeAllDisplay();
    if (stage.style.display === "none") {
        stage.style.display = "block";
    } else {
        stage.style.display = "none";
    }
}

function display_settings_menu() {
    var stage = document.getElementById("settings");
    closeAllDisplay();
    if (stage.style.display === "none") {
        stage.style.display = "block";
    } else {
        stage.style.display = "none";
    }
}

window.addEventListener('mouseup', function () {
    var menu = document.getElementById("mySidebar");
    if (menu.style.width === "250px") {
        closeNav();
    }
});
//
// $(document).keydown(function (e) {
//     if (e.key === "Escape") { // escape key maps to keycode `27`
//         var about = document.getElementById("about_modal");
//         if (about.style.display === "block") {
//             about.style.display = "none";
//         }
//     }
// });