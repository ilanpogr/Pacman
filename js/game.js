var canvas;
var context;
var pacman = {};
var bill;
var binky;
var pinky;
var inky;
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var loaded = false;
var direction = 0;
var food_put = 0;
var interval_num = 0;
var score2win = 50;
var timeClock;
var extraTimeDelta=10;
var showingMessage = false;
pacman.lives = 3;

window.addEventListener("keydown", UpdatePosition, false);

var GameOn = false;

/**
 * First Game Start
 */
function startGame() {
    display_game();
    GameOn = true;
    start();
}

/**
 * Regular Game start
 */
function start() {
    if (GameOn) {
        pacman.lives = 3;
        canvas = document.getElementById('canvas');
        // board = new Array();
        // board = [
        //     [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        //     [4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        //     [4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4],
        //     [4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4],
        //     [4, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        //     [4, 1, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 1, 4],
        //     [4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4],
        //     [4, 4, 4, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 4, 4],
        //     [3, 3, 3, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 3, 3, 3],
        //     [4, 4, 4, 4, 1, 4, 1, 4, 4, 3, 4, 4, 1, 4, 1, 4, 4, 4, 4],
        //     [1, 1, 1, 1, 1, 1, 1, 4, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1],
        //     [4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4],
        //     [3, 3, 3, 4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 3, 3, 3],
        //     [4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4],
        //     [4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        //     [4, 1, 4, 4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4, 4, 1, 4],
        //     [4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4],
        //     [4, 4, 1, 4, 1, 4, 1, 4, 4, 4, 4, 4, 1, 4, 1, 4, 1, 4, 4],
        //     [4, 1, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 4],
        //     [4, 1, 4, 4, 4, 4, 4, 4, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 4],
        //     [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
        //     [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
        // ];
        // direction = 0;
        // pacman.i = 4;
        // pacman.j = 9;
        // bill.i = 20;
        // bill.j = 17;
        // bill.on=0;
        // bill.lastMove = 4;
        // binky.i = 20;
        // binky.j = 9;
        // binky.id = 7;
        // binky.color = "red";
        // binky.on = 0;
        // pinky.i = 10;
        // pinky.j = 8;
        // pinky.id = 8;
        // pinky.color = "pink";
        // pinky.on = 0;
        // inky.i = 10;
        // inky.j = 10;
        // inky.id = 9;
        // inky.color = "cyan";
        // inky.on = 0;
        context = canvas.getContext("2d");
        board = [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [4, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 9, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4],
            [4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
            [4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
        ];
        interval_num = 0;
        score2win = 0;
        score = 0;
        pac_color = "yellow";
        timeClock = {i: 10, j: 10, id: 11, on: 0};
        bill = new Ghost(20, 17, 10, "red", 0, 4);
        binky = new Ghost(20, 1, 7, "red", 0, 4);
        pinky = new Ghost(1, 1, 8, "pink", 0, 4);
        inky = new Ghost(1, 17, 9, "cyan", 0, 4);
        restart();

        var food_remain = num_balls;
        start_time = new Date();
        // var cnt = 178;
        // var pacman_remain = 1;
        // for (var i = 1; i < 21; i++) {
        // board[i] = new Array();
        // put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
        // for (var j = 0; j < 19; j++) {
        // if ((i === 3 && j === 3) || (i === 3 && j === 4) || (i === 3 && j === 5) || (i === 6 && j === 1) || (i === 6 && j === 2)) {
        //     board[i][j] = 4;
        // } else {
        // if (board[i][j] !== 4 && board[i][j] !== 3) {
        //     var randomNum = Math.random();
        //     if (randomNum <= food_remain / cnt) {
        // food_remain--;
        // board[i][j] = 1;
        // } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
        // pacman.i = i;
        // pacman.j = j;
        // pacman_remain--;
        // board[i][j] = 2;
        // } else {
        // board[i][j] = 0;
        // }
        // cnt--;
        // }
        // }
        // }
        // let pacx = parseInt(Math.random() * 20) + 2;
        // let pacy = parseInt(Math.random() * 17) + 2;
        // while (board[pacx][pacy] !== 0) {
        //     pacx = parseInt(Math.random() * 20) + 2;
        //     pacy = parseInt(Math.random() * 17) + 2;
        // }
        // pacman.i = pacx;
        // pacman.j = pacy;
        // board[pacx][pacy] = 2;
        while (food_remain >= 0) {
            var emptyCell = findRandomEmptyCell(board);
            if (food_remain >= 0.4 * num_balls) {
                board[emptyCell[0]][emptyCell[1]] = 1;
                score2win += 5;
            } else if (food_remain >= 0.1 * num_balls) {
                board[emptyCell[0]][emptyCell[1]] = 5;
                score2win += 15;
            } else {
                board[emptyCell[0]][emptyCell[1]] = 6;
                score2win += 25;
            }
            food_remain--;
        }
        //     board[10][10] = 4;
        // }
        // if (num_monster < 2) {
        //     board[10][8] = 4;
        // interval = setInterval(UpdatePosition, 100)
        // }
        keysDown = {};
        addEventListener("keydown", function (e) {
            keysDown[e.code] = true;
        }, false);
        addEventListener("keyup", function (e) {
            keysDown[e.code] = false;
        }, false);
    }
}

/**
 * Restart When Pacman dies
 */
function restart() {
    keysDown = {};
    for (let k = 1; k < board.length - 1; k++) {
        for (let l = 1; l < board[0].length - 1; l++) {
            if (board[k][l] === 7) {
                board[k][l] = binky.on;
            }
            if (board[k][l] === 8) {
                board[k][l] = pinky.on;
            }
            if (board[k][l] === 9) {
                board[k][l] = inky.on;
            }
            if (board[k][l] === 10) {
                board[k][l] = bill.on;
            }
        }
    }
    // direction = 0;
    interval_num = 0;
    if (bill.color === "red") {
        bill = new Ghost(20, 17, 10, "red", 0, 4);
        board[bill.i][bill.j] = 10;
    }
    binky = new Ghost(20, 1, 7, "red", 0, 4);
    pinky = new Ghost(1, 1, 8, "pink", 0, 4);
    inky = new Ghost(1, 17, 9, "cyan", 0, 4);
    board[binky.i][binky.j] = binky.id;
    board[pinky.i][pinky.j] = pinky.id;
    board[inky.i][inky.j] = inky.id;
    let pacx = parseInt(Math.random() * 18) + 2;
    let pacy = parseInt(Math.random() * 15) + 2;
    while (board[pacx][pacy] !== 0) {
        pacx = parseInt(Math.random() * 18) + 2;
        pacy = parseInt(Math.random() * 15) + 2;
    }
    pacman.i = pacx;
    pacman.j = pacy;
    board[pacx][pacy] = 2;
    // interval.stopImmediatePropagation();
    interval = setInterval(UpdatePosition, 100);
}

//todo - Reset button


function findRandomEmptyCell(board) {
    var i = Math.floor((Math.random() * 21) + 1);
    var j = Math.floor((Math.random() * 18) + 1);
    while (board[i][j] !== 0) {
        i = Math.floor((Math.random() * 21) + 1);
        j = Math.floor((Math.random() * 18) + 1);
    }
    return [i, j];
}

/**
 * @return {number}
 */
function GetKeyPressed() {
    if (keysDown['ArrowUp']) {
        direction = 1.5;
        return 3;
        // return 3;
    }
    if (keysDown['ArrowDown']) {
        direction = 0.5;
        return 1;
        // return 4;
    }
    if (keysDown['ArrowLeft']) {
        direction = 1;
        return 2;
        // return 1;
    }
    if (keysDown['ArrowRight']) {
        direction = 0;
        return 0;
        // return 2;
    }
}

function Draw() {
    let center = {};

    function drawGhost(ghost) {
        context.arc(center.x, center.y, 15, Math.PI, 0); // half circle
        context.lineTo(center.x, center.y);
        context.fillStyle = ghost.color; //color
        context.fill();
        context.beginPath();
        if (interval_num % 10 < 5) {
            context.lineTo(center.x - 15, center.y);
            context.lineTo(center.x - 15, center.y + 15);
            context.lineTo(center.x - 10, center.y + 10);
            context.lineTo(center.x - 5, center.y + 15);
            context.lineTo(center.x, center.y + 10);
            context.lineTo(center.x + 5, center.y + 15);
            context.lineTo(center.x + 10, center.y + 10);
            context.lineTo(center.x + 15, center.y + 15);
            context.lineTo(center.x + 15, center.y);
            context.fill()
        } else {
            context.lineTo(center.x - 15, center.y);
            context.lineTo(center.x - 15, center.y + 10);
            context.lineTo(center.x - 10, center.y + 15);
            context.lineTo(center.x - 5, center.y + 10);
            context.lineTo(center.x, center.y + 15);
            context.lineTo(center.x + 5, center.y + 10);
            context.lineTo(center.x + 10, center.y + 15);
            context.lineTo(center.x + 15, center.y + 10);
            context.lineTo(center.x + 15, center.y);
            context.fill()
        }
        // context.fillRect(center.x - 15, center.y, 30, 15);
        //Eyes
        context.beginPath();
        context.arc(center.x - 6, center.y - 2.5, 4, 0, 2 * Math.PI); // circle
        context.lineTo(center.x, center.y);
        context.arc(center.x + 6, center.y - 2.5, 4, 0, 2 * Math.PI); // circle
        context.lineTo(center.x, center.y);
        context.fillStyle = "white"; //color
        context.fill();

        context.beginPath();
        context.arc(center.x - 4.5, center.y - 2, 2, 0, 2 * Math.PI); // circle
        context.lineTo(center.x, center.y);
        context.arc(center.x + 4.5, center.y - 2, 2, 0, 2 * Math.PI); // circle
        context.lineTo(center.x, center.y);
        context.fillStyle = "black"; //color
        context.fill();
    }


    context.clearRect(0, 0, canvas.width, canvas.height); //clean board
    lblScore.value = score;
    lblTime.value = time_elapsed;
    lblLife.value = pacman.lives;

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 22; j++) {
            center.x = i * 30 + 15;
            center.y = j * 30 + 15;
            context.beginPath();

            //Pacman
            if (board[j][i] === 2) {
                context.arc(center.x, center.y, 15, (direction + (0.25 - (0.25 / (0.25 + interval_num % 3)))) * Math.PI, (direction + 1.8) * Math.PI); // half circle
                context.lineTo(center.x, center.y);
                context.fillStyle = pac_color; //color
                context.fill();
                context.beginPath();

                // Eye
                if (direction === 0) { //right
                    context.arc(center.x + 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                }
                if (direction === 0.5) {//down
                    context.arc(center.x - 7.5, center.y - 2.5, 2.5, 0, 2 * Math.PI); // circle
                }
                if (direction === 1.5) {//up
                    context.arc(center.x - 7.5, center.y - 2.5, 2.5, 0, 2 * Math.PI); // circle
                }
                if (direction === 1) {//left
                    context.arc(center.x - 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                }
                // context.arc(center.x + 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                context.fillStyle = "black"; //color
                context.fill();
            }

            //Binkey
            else if (board[j][i] === 7) {
                drawGhost(binky);
            }

            //Pinky
            else if (board[j][i] === 8) {
                drawGhost(pinky);
            }

            //Binkey
            else if (board[j][i] === 9) {
                drawGhost(inky);
            }

            // Food
            //regular (5 points)
            else if (board[j][i] === 1) {
                context.arc(center.x, center.y, 8, 0, 2 * Math.PI); // circle
                context.fillStyle = color_5; //color
                context.fill();
                context.font = "15px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("5", center.x - 4.5, center.y + 5);
            } else if (board[j][i] === 5) {
                //medium (15 points)
                context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
                context.fillStyle = color_15; //color
                context.fill();
                context.font = "18px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("15", center.x - 11, center.y + 7);
            } else if (board[j][i] === 6) {
                //big (25 points)
                context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                context.fillStyle = color_25; //color
                context.fill();
                context.font = "20px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("25", center.x - 11, center.y + 8);
            } else if (board[j][i] === 4) {
                context.rect(center.x - 15, center.y - 15, 30, 30);
                context.fillStyle = "grey"; //color
                context.fill();

            } else if (board[j][i] === 10) {
                context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
                let my_gradient = context.createLinearGradient(center.x - 7, center.y - 7, center.x + 7, center.y + 7);
                my_gradient.addColorStop(0, "red");
                my_gradient.addColorStop(0.5, "white");
                my_gradient.addColorStop(1, "red");
                context.fillStyle = my_gradient;
                context.fill();
                context.closePath();
                context.beginPath();
                context.lineTo(center.x, center.y);
                context.lineTo(center.x - 15, center.y - 7);
                context.lineTo(center.x - 7, center.y - 15);
                context.fill();
                context.closePath();
                context.beginPath();
                context.lineTo(center.x, center.y);
                context.lineTo(center.x + 15, center.y + 7);
                context.lineTo(center.x + 7, center.y + 15);
                context.fill();
                context.closePath();

            } else if (board[j][i] === 11) {
                context.arc(center.x - 10, center.y - 14, 6, 0, 2 * Math.PI); // circle
                context.fillStyle = "yellow";
                context.fill();
                context.beginPath();
                context.arc(center.x + 10, center.y - 14, 6, 0, 2 * Math.PI); // circle
                context.fill();
                context.beginPath();
                context.fillStyle = "gold";
                context.arc(center.x - 13, center.y - 19, 1.5, 0, 2 * Math.PI); // circle
                context.fill();
                context.beginPath();
                context.arc(center.x + 13, center.y - 19, 1.5, 0, 2 * Math.PI); // circle
                context.fill();
                context.beginPath();
                context.arc(center.x, center.y, 18, 0, 2 * Math.PI); // circle
                context.fillStyle = "red";
                context.fill();
                context.beginPath();
                context.arc(center.x, center.y, 14, 0, 2 * Math.PI); // circle
                context.fillStyle = "white";
                context.fill();
                context.beginPath();
                context.font = "bold 16px Arial";
                context.fillStyle = "black";
                context.fillText("+", center.x - 12, center.y + 7);
                context.fillText("1", center.x - 4, center.y + 6);
                context.fillText("0", center.x + 4, center.y + 6);

            }
        }
    }


}

function isGhostPlace(di, dj, ghost) {
    let place = board[ghost.i + di][ghost.j + dj];
    return !(place === 7 || place === 8 || place === 9 || place === 4 || place === 2 || place === 10);

}

function isValidMove(direction, ghost) {
    if (direction === 1 && ghost.i < 21 && isGhostPlace(1, 0, ghost)) {
        return true;
    }
    if (direction === 0 && ghost.j < 18 && isGhostPlace(0, 1, ghost)) {
        return true;
    }
    if (direction === 3 && ghost.i > 0 && isGhostPlace(-1, 0, ghost)) {
        return true;
    }
    return direction === 2 && ghost.i > 0 && isGhostPlace(0, -1, ghost);

}

function moveBill() {

    function runAway() {
        let res = parseInt(Math.random() * 4) % 4;
        while (!isValidMove(res, bill))
            res = parseInt(Math.random() * 4) % 4;
        return res;
    }


    board[bill.i][bill.j] = bill.on;

    // let next = 2;
    let next = runAway();
    if (bill.lastMove !== 4)
        bill.lastMove = next;
    if (next === 0) {
        bill.on = board[bill.i][bill.j + 1];
        board[bill.i][bill.j + 1] = bill.id;
        bill.j++;
    }
    if (next === 1) {
        bill.on = board[bill.i + 1][bill.j];
        board[bill.i + 1][bill.j] = bill.id;
        bill.i++;
    }
    if (next === 2) {
        bill.on = board[bill.i][bill.j - 1];
        board[bill.i][bill.j - 1] = bill.id;
        bill.j--;
    }
    if (next === 3) {
        bill.on = board[bill.i - 1][bill.j];
        board[bill.i - 1][bill.j] = bill.id;
        bill.i--;
    }
}

function computeDistance(ghost, pacman) {
    let dx = ghost.i - pacman.i;
    let dy = ghost.j - pacman.j;
    return Math.sqrt((dx * dx) + (dy * dy));
}


function GetNextMove(ghost) {
    ghost.j++;
    let x0 = computeDistance(ghost, pacman);
    ghost.j--;
    ghost.i++;
    let x1 = computeDistance(ghost, pacman);
    ghost.i--;
    ghost.j--;
    let x2 = computeDistance(ghost, pacman);
    ghost.j++;
    ghost.i--;
    let x3 = computeDistance(ghost, pacman);
    ghost.i++;
    let shortest = x0;
    let res = 0;
    if (!isValidMove(res, ghost) || res === ghost.lastMove) {
        shortest = x1;
        res = 1;
    }
    if (!isValidMove(res, ghost) || res === ghost.lastMove) {
        shortest = x2;
        res = 2;
    }
    if (!isValidMove(res, ghost) || res === ghost.lastMove) {
        shortest = x3;
        res = 3;
    }
    if ((x1 <= shortest || res === ghost.lastMove) && isValidMove(1, ghost)) {
        shortest = x1;
        res = 1;
    }
    if ((x2 <= shortest || res === ghost.lastMove) && isValidMove(2, ghost)) {
        shortest = x2;
        res = 2;
    }
    if ((x3 <= shortest || res === ghost.lastMove) && isValidMove(3, ghost)) {
        res = 3;
    }
    if (!isValidMove(0, ghost) && !isValidMove(1, ghost) && !isValidMove(2, ghost) && !isValidMove(3, ghost))
        return 4;//stay
    return res;
}

function moveGhost(ghost) {
    board[ghost.i][ghost.j] = ghost.on;
    let next = GetNextMove(ghost);
    if (ghost.lastMove !== 4)
        ghost.lastMove = next;
    if (next === 0) {
        ghost.on = board[ghost.i][ghost.j + 1];
        board[ghost.i][ghost.j + 1] = ghost.id;
        ghost.j++;
    }
    if (next === 1) {
        ghost.on = board[ghost.i + 1][ghost.j];
        board[ghost.i + 1][ghost.j] = ghost.id;
        ghost.i++;
    }
    if (next === 2) {
        ghost.on = board[ghost.i][ghost.j - 1];
        board[ghost.i][ghost.j - 1] = ghost.id;
        ghost.j--;
    }
    if (next === 3) {
        ghost.on = board[ghost.i - 1][ghost.j];
        board[ghost.i - 1][ghost.j] = ghost.id;
        ghost.i--;
    }
}

function moveGhosts() {
    moveGhost(binky);
    moveGhost(pinky);
    moveGhost(inky);
    Draw();
}

function isCaught(ghost) {
    return ghost.i === pacman.i && ghost.j === pacman.j;
}

// function drawAlert(string) {
//     context.beginPath();
//     context.fillStyle = "blue";
//     context.fillRect(0,120,canvas.width,240);
//     context.fillStyle = "white";
//     context.font = "bold 64px Arial";
//     context.fillText(string, 10, 300, canvas.width - 20);
// }
//
// function Alert(string, waitFor) {
//     window.clearTimeout(interval);
//     window.clearTimeout(interval);
//             window.clearInterval(interval);
//     Draw();
//     context.beginPath();
//     context.fillStyle = "blue";
//     context.fillRect(0,120,canvas.width,240);
//     context.fillStyle = "white";
//     context.font = "bold 64px Arial";
//     context.fillText(string, 10, 300, canvas.width - 20);
//     // let alertInterval = window.setInterval(drawAlert,100,string)
//     // window.clearTimeout(alertInterval);
//     // window.clearInterval(alertInterval);
//     // window.setTimeout(restart,waitFor);
//     let starTimeCount = new Date();
//     let currTime = new Date();
//     while (currTime - starTimeCount < waitFor) {
//         drawAlert(string);
//         currTime = new Date();
//     }
// }

function Caught() {
    pacman.lives--;
    score -= 10;
    score2win -= 10;
    board[pacman.i][pacman.j]=0;
    // Draw();
    if (pacman.lives > 0) {
        // while (window.interval !== undefined && window.interval !== 'undefined')
        window.clearTimeout(interval);
            window.clearInterval(interval);
        // window.alert("You Lost 1 Life,\n" + pacman.lives + " Lives Remain");
        // Alert(pacman.lives +  " Lives Remain",3000)

        restart();
    } else {
        //     todo - endgame;
        // while (window.interval !== undefined && window.interval !== 'undefined')
        window.clearTimeout(interval);
            window.clearInterval(interval);
        GameOn = false;
        window.alert("You Lost");
        display_settings_menu();
    }
}

/**
 * @return {boolean}
 */
function TimeAboutToStop(time_elpased) {
    return time_elpased >= num_time - extraTimeDelta || num_time - extraTimeDelta<=0;
}

function ExtraTime() {
    if (timeClock.on === 0) {
        let timx = parseInt(Math.random() * 18) + 2;
        let timy = parseInt(Math.random() * 15) + 2;
        while (board[timx][timy] !== 0) {
            timx = parseInt(Math.random() * 18) + 2;
            timy = parseInt(Math.random() * 15) + 2;
        }
        timeClock.i = timx;
        timeClock.j = timy;
        board[timx][timy] = 11;
        timeClock.on=11;
        Draw();
    }
}

function addExtraTime() {
    extraTimeDelta--;
    num_time+=10;
    timeClock.on=0;
    Draw();
}

function UpdatePosition() {
    if (GameOn) {
        Draw();
        if (interval_num % 5 === 3 && bill.color === "red")
            moveBill();
        board[pacman.i][pacman.j] = 0;
        let x = GetKeyPressed();
        if (interval_num % 12 === 11 && interval_num > 16) {
            moveGhosts();
        }
        if (x === 2) {
            if (pacman.j > 0 && board[pacman.i][pacman.j - 1] !== 4) {
                pacman.j--;
            } else if (board[pacman.i][pacman.j - 1] !== 4) {
                pacman.j = 18;
            }
        }
        if (x === 0) {
            if (pacman.j < 18 && board[pacman.i][pacman.j + 1] !== 4) {
                pacman.j++;
            } else if (board[pacman.i][pacman.j + 1] !== 4) {
                pacman.j = 0;
            }
        }
        if (x === 3) {
            if (pacman.i > 0 && board[pacman.i - 1][pacman.j] !== 4) {
                pacman.i--;
            } else if (board[pacman.i - 1][pacman.j] !== 4) {
                pacman.i = 21;
            }
        }
        if (x === 1) {
            if (pacman.i < 21 && board[pacman.i + 1][pacman.j] !== 4) {
                pacman.i++;
            } else if (board[pacman.i + 1][pacman.j] !== 4) {
                pacman.i = 0;
            }
        }
        if (board[pacman.i][pacman.j] === 1) {
            score += 5;
        }
        if (board[pacman.i][pacman.j] === 5) {
            score += 15;
        }
        if (board[pacman.i][pacman.j] === 6) {
            score += 25;
        }
        if (board[pacman.i][pacman.j] === 10 || isCaught(bill)) {
            if (bill.on === 1)
                score += 5;
            if (bill.on === 5)
                score += 15;
            if (bill.on === 6)
                score += 25;
            score += 50;
            bill.color = "blue";
            bill.i = 22;
            bill.j = 22;
        }
        if (board[pacman.i][pacman.j]===11 ||(timeClock.i===pacman.i && timeClock.j===pacman.j)){
            addExtraTime();
        }

        board[pacman.i][pacman.j] = 2;
        interval_num++;
        let currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (TimeAboutToStop(time_elapsed)) {
            ExtraTime();
        }
        //todo - listener for time past
        if (time_elapsed >= num_time) {
            window.clearTimeout(interval);
            window.clearInterval(interval);
            if (score >= 150) {
                window.alert("We Have a Winner!");
                GameOn = false;
            } else {
                GameOn = false;
                window.alert("You Can Do Better..");
            }
        }
        if (score >= 200 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (isCaught(binky) || isCaught(pinky) || isCaught(inky)) {
            Caught();
        }
        else if (board[pacman.i][pacman.j] === 7 || board[pacman.i][pacman.j] === 8 || board[pacman.i][pacman.j] === 9) {
            Caught();
        }
        if (score === score2win) {
            Draw();
            window.clearTimeout(interval);
            window.clearInterval(interval);
            GameOn = false;
            window.alert("Game completed");
        } else {
            Draw();
        }
    }
}

class Ghost {
    constructor(i, j, id, color, on, lastMove) {
        this.i = i;
        this.j = j;
        this.id = id;
        this.color = color;
        this.on = on;
        this.lastMove = lastMove;
    }
}
