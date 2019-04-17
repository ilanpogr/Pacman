/**
 * Show/hide welcome content
 */
function display_welcome(content) {
    var x = document.getElementById(content);
    if (x.style.display === "none") {
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

