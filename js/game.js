var canvas;
var context;
var pacman = new Object();
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
var score2win = 0;
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
            [4, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 9, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 4, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4, 4],
            [4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4],
            [4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4],
            [4, 4, 0, 4, 0, 4, 0, 4, 4, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4],
            [4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 4],
            [4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4],
            [4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4],
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
        direction = 0;
        interval_num = 0;
        score2win = 0;
        score = 0;
        pac_color = "yellow";
        pacman.i = 4;
        pacman.j = 9;
        binky = new Ghost(20, 1, 7, "red", 0, 0);
        pinky = new Ghost(1, 1, 8, "pink", 0, 0);
        inky = new Ghost(1, 17, 9, "cyan", 0, 1);
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
        // if (num_monster < 3) {
        //     board[10][10] = 4;
        // }
        // if (num_monster < 2) {
        //     board[10][8] = 4;
        // }
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
    function drawGhost(ghost) {
        context.arc(center.x, center.y, 15, Math.PI, 0); // half circle
        context.lineTo(center.x, center.y);
        context.fillStyle = ghost.color; //color
        context.fill();
        context.beginPath();
        context.fillRect(center.x - 15, center.y, 30, 15);
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

    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 22; j++) {
            var center = new Object();
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
                context.fillText("15", center.x - 10, center.y + 7);
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

            }
        }
    }


}


function isValidMove(direction, ghost) {
    if (direction === 1 && ghost.i < 21 && board[ghost.i + 1][ghost.j] !== 4) {
        return true;
    }
    if (direction === 0 && ghost.j < 18 && board[ghost.i][ghost.j + 1] !== 4) {
        return true;
    }
    if (direction === 3 && ghost.i > 0 && board[ghost.i - 1][ghost.j] !== 4) {
        return true;
    }
    if (direction === 2 && ghost.i > 0 && board[ghost.i][ghost.j - 1] !== 4) {
        return true;
    }
    return false;
}

function argMax(arg1, val1, arg2, val2) {
    if (val1 >= val2) return arg1;
    return arg2;
}

function argMin(arg1, val1, arg2, val2) {
    if (val1 <= val2) return arg1;
    return arg2;
}

/**
 * @return {number}
 */
function GetNextMove(ghost) {
    let shorter_horizontal_arg = argMax(0, pacman.i, 2, ghost.i);
    let shorter_horizontal_val = Math.min(Math.abs(pacman.i - ghost.i));
    let shorter_vertical_arg = argMax(1, pacman.j, 3, ghost.j);
    let shorter_vertical_val = Math.min(Math.abs(pacman.j - ghost.j));
    let res = argMin(shorter_horizontal_arg, shorter_horizontal_val, shorter_vertical_arg, shorter_vertical_val);
    if (!isValidMove(res,ghost))
        res = argMax(shorter_horizontal_arg, shorter_horizontal_val, shorter_vertical_arg, shorter_vertical_val);
    if (!isValidMove(res,ghost))
        res = argMax(1, pacman.j, 3, ghost.j);
    if (!isValidMove(res,ghost))
        res = argMax(0, pacman.i, 2, ghost.i);
    return res;
}

function moveGhost(ghost) {
    board[ghost.i][ghost.j] = ghost.on;


    let next = GetNextMove(ghost);
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
    if (next === 2) {
        ghost.on = board[ghost.i - 1][ghost.j];
        board[ghost.i - 1][ghost.j] = ghost.id;
        ghost.i--;
    }
    //     if (ghost.j < pacman.j) {
    //     if (ghost.i < pacman.i && ghost.i < 21 && board[ghost.i + 1][ghost.j] !== 4) {
    //         ghost.on = board[ghost.i + 1][ghost.j];
    //         board[ghost.i + 1][ghost.j] = ghost.id;
    //         ghost.i++;
    //     } else if (ghost.i > 0 && board[ghost.i - 1][ghost.j] !== 4) {
    //         ghost.on = board[ghost.i - 1][ghost.j];
    //         board[ghost.i - 1][ghost.j] = ghost.id;
    //         ghost.i--;
    //     } else {
    //         if (ghost.j < pacman.j && ghost.j < 18 && board[ghost.i][ghost.j + 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j + 1];
    //             board[ghost.i][ghost.j + 1] = ghost.id;
    //             ghost.j++;
    //         } else if (ghost.j > pacman.j && ghost.j > 0 && board[ghost.i][ghost.j - 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j - 1];
    //             board[ghost.i][ghost.j - 1] = ghost.id;
    //             ghost.j--;
    //         }
    //     }
    // } else {
    //     if (ghost.i < pacman.i && ghost.i < 21 && board[ghost.i + 1][ghost.j] !== 4) {
    //         ghost.on = board[ghost.i + 1][ghost.j];
    //         board[ghost.i + 1][ghost.j] = ghost.id;
    //         ghost.i++;
    //     } else if (ghost.i > 0 && board[ghost.i - 1][ghost.j] !== 4) {
    //
    //         if (ghost.j < pacman.j && ghost.j < 18 && board[ghost.i][ghost.j + 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j + 1];
    //             board[ghost.i][ghost.j + 1] = ghost.id;
    //             ghost.j++;
    //         } else if (ghost.j > pacman.j && ghost.j > 0 && board[ghost.i][ghost.j - 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j - 1];
    //             board[ghost.i][ghost.j - 1] = ghost.id;
    //             ghost.j--;
    //         } else {
    //             ghost.on = board[ghost.i - 1][ghost.j];
    //             board[ghost.i - 1][ghost.j] = ghost.id;
    //             ghost.i--;
    //         }
    //     } else {
    //         if (ghost.j < pacman.j && ghost.j < 18 && board[ghost.i][ghost.j + 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j + 1];
    //             board[ghost.i][ghost.j + 1] = ghost.id;
    //             ghost.j++;
    //         } else if (ghost.j > pacman.j && ghost.j > 0 && board[ghost.i][ghost.j - 1] !== 4) {
    //             ghost.on = board[ghost.i][ghost.j - 1];
    //             board[ghost.i][ghost.j - 1] = ghost.id;
    //             ghost.j--;
    //         }
    //     }

    // }
}

function moveGhosts() {
    moveGhost(binky);
    moveGhost(pinky);
    moveGhost(inky);
}

function UpdatePosition() {
    if (GameOn) {
        board[pacman.i][pacman.j] = 0;
        let x = GetKeyPressed();
        if (interval_num % 10 === 0) {
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
        board[pacman.i][pacman.j] = 2;
        interval_num++;
        let currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 200 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (score === score2win) {
            Draw();
            window.clearInterval(interval);
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
