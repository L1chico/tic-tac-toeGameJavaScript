//Get html elements
const canvas = document.getElementsByClassName('game')[0];
const ctx = canvas.getContext('2d');
let commentator = document.getElementsByClassName('game-container__commentator-text-area')[0];

//Get image
const crossImg = new Image();
crossImg.src = "icons/cross.png";
const zeroImg = new Image();
zeroImg.src = "icons/zero.png";

let currentTurn;
let winner;
globalThis.board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
];
const wayToWin = [
    "012",
    "345",
    "678",
    "048",
    "246",
    "036",
    "147",
    "258",
];
const optionsToGo = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
];
const optionsToGoMiddle = 4;
const optionsToGoCorners = [
    0,
    2,
    6,
    8,
];
const optionsToGoSides = [
    1,
    3,
    5,
    7,
];
//get coordinates
canvas.addEventListener('mouseup', (event)  => {
/*     globalThis.X = event.clientX;
    globalThis.Y = event.clientY; */
    globalThis.X = event.pageX - event.target.offsetLeft,
    globalThis.Y = event.pageY - event.target.offsetTop;
    console.log(X +':'+ Y);
});
//markup draw
function drawLines () {
    ctx.fillStyle = "black";
    ctx.fillRect(128 ,0 , 2, 429);
    ctx.fillRect(256 ,0 , 2, 429);
    ctx.fillRect(0 ,128 , 429, 2);
    ctx.fillRect(0 ,256 , 429, 2);
}
//draw Cross
function drawCross (ImgX , ImgY) {
    ctx.drawImage(crossImg, ImgX, ImgY)
}
//draw Zero
function drawZero (ImgX , ImgY) {
    ctx.drawImage(zeroImg, ImgX, ImgY);
}
//
function firstTurn (currentTurn) {
    currentTurn = Math.round(Math.random());
    switch (currentTurn) {
        case 0:
            //computer first
            currentTurn = "computer";
            break;
        case 1:
            //player first
            currentTurn = "player";
            break;
    }
    return currentTurn
}
//computer move function
function computerMove () {

}
//player move function
function playerMove () {
    console.log('Старт хода игрока');
    MoveWhile: while (true) {
        //0
        if (globalThis.X <= 128 && globalThis.Y <= 128) {
            console.log('0');
            if (globalThis.board[0] == 0) {globalThis.board[0] = "X";drawCross(0,0);break MoveWhile;}
        } 
        //1
        else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y <= 128) {
            console.log('1');
            if (globalThis.board[1] == 0) {globalThis.board[1] = "X";drawCross(128,0);break MoveWhile;}
        }
        //2
        else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y <= 128) {
            console.log('2');
            if (globalThis.board[2] == 0) {globalThis.board[2] = "X";drawCross(256,0);break MoveWhile;}
        }
        //3
        else if (globalThis.X <= 128 && globalThis.Y >= 128 && globalThis.Y <= 256) {
            console.log('3');
            if (globalThis.board[3] == 0) {globalThis.board[3] = "X";drawCross(0,128);break MoveWhile;}
        }
        //4
        else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y >= 128 && globalThis.Y <= 256) {
            console.log('4');
            if (globalThis.board[4] == 0) {globalThis.board[4] = "X";drawCross(128,128);break MoveWhile;}
        }
        //5
        else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y >= 128 && globalThis.Y <= 256) {
            console.log('5');
            if (globalThis.board[5] == 0) {globalThis.board[5] = "X";drawCross(256,128);break MoveWhile;}
        }
        //6
        else if (globalThis.X <= 128 && globalThis.Y >= 256 && globalThis.Y <= 384) {
            console.log('6');
            if (globalThis.board[6] == 0) {globalThis.board[6] = "X";drawCross(0,256);break MoveWhile;}
        }
        //7
        else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y >= 256 && globalThis.Y <= 384) {
            console.log('7');
            if (globalThis.board[7] == 0) {globalThis.board[7] = "X";drawCross(128,256);break MoveWhile;}
        }
        //8
        else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y >= 256 && globalThis.Y <= 384) {
            console.log('8');
            if (globalThis.board[8] == 0) {globalThis.board[8] = "X";drawCross(256,256);break MoveWhile;}
        }
        else {
            commentator.textContent = "Вы нажали не туда!!!"
        }
        console.log('0');
    }
}
//main
function startGame () {
    ctx.clearRect(0, 0, 384, 384)
    drawLines();
    currentTurn = firstTurn();
    globalThis.board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ];
}
function processGame (currentTurn) {
    if (winner) {return congratulationWinner(winner);}
    switch (currentTurn) {
        case "computer":
            computerMove();
            break;
        case "player":
            playerMove();
            break;
    }
}
function congratulationWinner (winner) {
    commentator.textContent = "Поздравляем победителя: " + winner;
}
//start main function onload
globalThis.onload = () => {
    startGame();
    processGame();
}
