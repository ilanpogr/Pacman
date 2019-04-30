var keyUp = 38;
var keyDown = 40;
var keyLeft = 37;
var keyRight = 39;

var num_time = 60;
var num_balls = 50;
var num_monster = 3;


function setButton() {
    document.getElementById('key' + action).innerHTML = keyValue;
    document.getElementById('key' + action).style.backgroundColor = "#4CAF50";
    document.getElementById('key' + action).style.boxShadow = "0 9px #999";
    document.getElementById('key' + action).style.transform = null;
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
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
                keyValue = "L-SHIFT";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
                keyValue = "R-SHIFT";
            }
            break;
        case 17:
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
                keyValue = "L-CTRL";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
                keyValue = "R-CTRL";
            }
            break;
        case 18:
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
                keyValue = "L-ALT";
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
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
    setButton();
}

var action = null;
var keyValue;

document.addEventListener('keydown', function (event) {
    if (action != null) {
        var keycode = event.which || event.keyCode;
        keyValue = String.fromCharCode(keycode);
        if (keycode < 47)
            specialValue(keycode, event);
        else {
            setButton();
        }
    }
});

function setKey(key) {
    document.getElementById('key'+key).style["background-color"] = "#3e8e41";
    document.getElementById('key'+key).style["box-shadow"] = "0 5px #666";
    document.getElementById('key'+key).style["transform"] = "translateY(4px)";
    action = key;
}

function numOfBallsCheck(){
    var x = document.getElementById("num_balls").value;
    if (x < 50){
        document.getElementById("num_balls").value = 50;
    } else if (x > 90){
        document.getElementById("num_balls").value = 90;
    }
}
function timeCheck(){
    var x = document.getElementById("time_settings").value;
    if (x < 60) {
        document.getElementById("time_settings").value = 60;
    }
}

function monstersCheck(){
    var x = document.getElementById("num_monsters").value;
    if (x < 1){
        document.getElementById("num_monsters").value = 1;
    } else if (x > 3){
        document.getElementById("num_monsters").value = 3;
    }
}

function random_settings(){
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
}