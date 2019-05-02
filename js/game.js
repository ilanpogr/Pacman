var canvas;
var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var loaded = false;
var direction = 0;
var food_put = 0;

window.addEventListener("keydown", UpdatePosition, false);

var GameOn = false;

function startGame() {
    display_game();
    GameOn = true;
    start();
}

function start() {
    if (GameOn) {
        canvas = document.getElementById('canvas');
        context = canvas.getContext("2d");
        // board = new Array();
        board = [
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4],
            [4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
        ];
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
        score = 0;
        pac_color = "yellow";
        shape.i = 4;
        shape.j = 9;
        var cnt = 178;
        var food_remain = num_balls;
        var pacman_remain = 1;
        start_time = new Date();
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
        // shape.i = i;
        // shape.j = j;
        // pacman_remain--;
        // board[i][j] = 2;
        // } else {
        // board[i][j] = 0;
        // }
        // cnt--;
        // }
        // }
        // }
        while (food_remain > 0) {
            var emptyCell = findRandomEmptyCell(board);
            if (food_remain >= 0.4 * num_balls)
                board[emptyCell[0]][emptyCell[1]] = 1;
            else if (food_remain >= 0.1 * num_balls)
                board[emptyCell[0]][emptyCell[1]] = 5;
            else
                board[emptyCell[0]][emptyCell[1]] = 6;

            food_remain--;
        }
        keysDown = {};
        addEventListener("keydown", function (e) {
            keysDown[e.code] = true;
        }, false);
        addEventListener("keyup", function (e) {
            keysDown[e.code] = false;
        }, false);
        interval = setInterval(UpdatePosition, 100);
    }
}


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
    context.clearRect(0, 0, canvas.width, canvas.height); //clean board
    lblScore.value = score;
    lblTime.value = time_elapsed;
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 22; j++) {
            var center = new Object();
            center.x = i * 30 + 15;
            center.y = j * 30 + 15;
            if (board[j][i] === 2) {
                context.beginPath();
                context.arc(center.x, center.y, 15, (direction + 0.15) * Math.PI, (direction + 1.85) * Math.PI); // half circle
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
            // Food
            //regular (5 points)
            else if (board[j][i] === 1) {
                context.beginPath();
                context.arc(center.x, center.y, 8, 0, 2 * Math.PI); // circle
                context.fillStyle = color_5; //color
                context.fill();
                context.font = "15px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("5", center.x - 4.5, center.y + 5);
            } else if (board[j][i] === 5) {
                //medium (15 points)
                context.beginPath();
                context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
                context.fillStyle = color_15; //color
                context.fill();
                context.font = "18px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("15", center.x -10, center.y + 7);
            } else if (board[j][i] === 6) {
                //big (25 points)
                context.beginPath();
                context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                context.fillStyle = color_25; //color
                context.fill();
                context.font = "20px Arial";
                context.fillStyle = "white"; //color of text
                context.fillText("25", center.x - 11, center.y + 8);
            } else if (board[j][i] === 4) {
                context.beginPath();
                context.rect(center.x - 15, center.y - 15, 30, 30);
                context.fillStyle = "grey"; //color
                context.fill();

            }
        }
    }


}

function UpdatePosition() {
    if (GameOn) {
        board[shape.i][shape.j] = 0;
        var x = GetKeyPressed();
        if (x === 2) {
            if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
                shape.j--;
            } else if (board[shape.i][shape.j - 1] !== 4) {
                shape.j = 18;
            }
        }
        if (x === 0) {
            if (shape.j < 18 && board[shape.i][shape.j + 1] !== 4) {
                shape.j++;
            } else if (board[shape.i][shape.j + 1] !== 4) {
                shape.j = 0;
            }
        }
        if (x === 3) {
            if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
                shape.i--;
            } else if (board[shape.i - 1][shape.j] !== 4) {
                shape.i = 21;
            }
        }
        if (x === 1) {
            if (shape.i < 21 && board[shape.i + 1][shape.j] !== 4) {
                shape.i++;
            } else if (board[shape.i + 1][shape.j] !== 4) {
                shape.i = 0;
            }
        }
        if (board[shape.i][shape.j] === 1) {
            score+=5;
        }
        if (board[shape.i][shape.j] === 5) {
            score+=15;
        }
        if (board[shape.i][shape.j] === 6) {
            score+=25;
        }
        board[shape.i][shape.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 200 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (score === num_balls) {
            Draw();
            window.clearInterval(interval);
            window.alert("Game completed");
        } else {
            Draw();
        }
    }
}