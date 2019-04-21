function closeAllDisplay() {
    let welcome = document.getElementById("welcome");
    let register = document.getElementById("register_form");
    let login = document.getElementById("login_form");
    let menu = document.getElementById("sidebar");
    let game = document.getElementById("game");

    welcome.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
    menu.style.display = "none";
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

function display_menu() {
    var x = document.getElementById("sidebar");
    if (x.style.display === "none") {
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
    // startGame(null);
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