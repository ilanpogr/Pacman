var keyUp = 38;
var keyDown = 40;
var keyLeft = 37;
var keyRight = 39;

var num_time = 60;
var num_balls = 50;
var num_monster = 3;

var color_5 = document.getElementById("points5").value;
var color_15 = document.getElementById("points15").value;
var color_25 = document.getElementById("points25").value;


function setButton(keycode) {
    document.getElementById('key' + action).innerHTML = keyValue;
    document.getElementById('key' + action).style.backgroundColor = "#4CAF50";
    document.getElementById('key' + action).style.boxShadow = "0 9px #999";
    document.getElementById('key' + action).style.transform = null;

    if (action === 'Up') {
        keyUp = keycode;
    } else if (action === 'Down') {
        keyDown = keycode;
    } else if (action === 'Left') {
        keyLeft = keycode;
    } else if (action === 'Right') {
        keyRight = keycode;
    }
    action = null;
}

function specialValue(keycode, event) {
    switch (keycode) {
        case 8:
            keyValue = "BACKSPACE";
            break;
        case 9:
            keyValue = "TAB";
            break;
        // case 13:
        //     keyValue = "ENTER";
        //     break;
        case 16:
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                keyValue = "L-SHIFT";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                keyValue = "R-SHIFT";
            }
            break;
        case 17:
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                keyValue = "L-CTRL";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                keyValue = "R-CTRL";
            }
            break;
        case 18:
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                keyValue = "L-ALT";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                keyValue = "R-ALT";
            }
            break;
        case 20:
            keyValue = "CAPS LOCK";
            break;
        case 27:
            keyValue = "ESCAPE";
            break;
        // case 32:
        //     keyValue = "SPACE-BAR";
        //     break;
        case 33:
            keyValue = "PAGE UP";
            break;
        case 34:
            keyValue = "PAGE DOWN";
            break;
        case 35:
            keyValue = "END";
            break;
        case 36:
            keyValue = "HOME";
            break;
        case 37:
            keyValue = '&larr;';
            break;
        case 38:
            keyValue = '&uarr;';
            break;
        case 39:
            keyValue = '&rarr;';
            break;
        case 40:
            keyValue = '&darr;';
            break;
        case 45:
            keyValue = "INSERT";
            break;
        case 46:
            keyValue = "DELETE";
            break;
    }
    setButton(keycode);
}

var action = null;
var keyValue;

function setKey(key) {
    document.getElementById('key' + key).style["background-color"] = "#3e8e41";
    document.getElementById('key' + key).style["box-shadow"] = "0 5px #666";
    document.getElementById('key' + key).style["transform"] = "translateY(4px)";
    action = key;
}

function numOfBallsCheck() {
    num_balls = document.getElementById("num_balls").value;
    if (num_balls < 50) {
        document.getElementById("num_balls").value = 50;
    } else if (num_balls > 90) {
        document.getElementById("num_balls").value = 90;
    }
}

function timeCheck() {
    num_time = document.getElementById("time_settings").value;
    if (num_time < 60) {
        document.getElementById("time_settings").value = 60;
    }
}

function monstersCheck() {
    num_monster = document.getElementById("num_monsters").value;
    if (num_monster < 1) {
        document.getElementById("num_monsters").value = 1;
    } else if (num_monster > 3) {
        document.getElementById("num_monsters").value = 3;
    }
}

function random_settings() {
    var min = 1;
    var max = 3;
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("num_monsters").value = randomnumber;
    num_monster = randomnumber;

    min = 60;
    max = 180;
    randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("time_settings").value = randomnumber;
    num_time = randomnumber;

    min = 50;
    max = 90;
    randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("num_balls").value = randomnumber;
    num_balls = randomnumber;

    var first = document.getElementById("points5");
    var second = document.getElementById("points15");
    var third = document.getElementById("points25");
    first.value = getRandomColor();
    second.value = getRandomColor();
    third.value = getRandomColor();
    color_5 = first.value;
    color_15 = second.value;
    color_25 = third.value;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkParameters() {
    if (num_balls < 50) {
        num_balls = 50;
    } else if (num_balls > 90) {
        num_balls = 90;
    }
    if (num_time < 60) {
        num_time = 60;
    }
    if (num_monster > 3) {
        num_monster = 3;
    } else if (num_monster < 1) {
        num_monster = 1;
    }
}

function checkBeforeStart() {
    if (keyRight !== keyLeft && keyRight !== keyUp && keyRight !== keyDown && keyLeft !== keyUp && keyLeft !== keyDown
        && keyUp !== keyDown && keyUp !== 32 && keyDown !== 32 && keyLeft !== 32 && keyRight !== 32 &&
        keyUp !== 13 && keyDown !== 13 && keyLeft !== 13 && keyRight !== 13) {
        checkParameters();
        startGame();
    } else {
        alert('Keyboard setup must contain different keys and do not use ENTER or SPACE-BAR');
    }

}