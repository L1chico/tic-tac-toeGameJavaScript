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
    return currentTurn
}
//computer move function
function computerMove () {

}
//player move function
function playerMove () {
    console.log('Старт хода игрока');
    //get coordinates
    canvas.addEventListener('mouseup', function playerEvent(event){
        /*     globalThis.X = event.clientX;
    globalThis.Y = event.clientY; */
    globalThis.X = event.pageX - event.target.offsetLeft,
    globalThis.Y = event.pageY - event.target.offsetTop;
    console.log(X +':'+ Y);
    //0
    if (globalThis.X <= 128 && globalThis.Y <= 128) {
        console.log('0');
        if (globalThis.board[0] == 0) {globalThis.board[0] = "X";drawCross(0,0);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    } 
    //1
    else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y <= 128) {
        console.log('1');
        if (globalThis.board[1] == 0) {globalThis.board[1] = "X";drawCross(128,0);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //2
    else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y <= 128) {
        console.log('2');
        if (globalThis.board[2] == 0) {globalThis.board[2] = "X";drawCross(256,0);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //3
    else if (globalThis.X <= 128 && globalThis.Y >= 128 && globalThis.Y <= 256) {
        console.log('3');
        if (globalThis.board[3] == 0) {globalThis.board[3] = "X";drawCross(0,128);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //4
    else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y >= 128 && globalThis.Y <= 256) {
        console.log('4');
        if (globalThis.board[4] == 0) {globalThis.board[4] = "X";drawCross(128,128);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //5
    else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y >= 128 && globalThis.Y <= 256) {
        console.log('5');
        if (globalThis.board[5] == 0) {globalThis.board[5] = "X";drawCross(256,128);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //6
    else if (globalThis.X <= 128 && globalThis.Y >= 256 && globalThis.Y <= 384) {
        console.log('6');
        if (globalThis.board[6] == 0) {globalThis.board[6] = "X";drawCross(0,256);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //7
    else if (globalThis.X >= 128 && globalThis.X <= 256 && globalThis.Y >= 256 && globalThis.Y <= 384) {
        console.log('7');
        if (globalThis.board[7] == 0) {globalThis.board[7] = "X";drawCross(128,256);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    //8
    else if (globalThis.X >= 256 && globalThis.X <= 384 && globalThis.Y >= 256 && globalThis.Y <= 384) {
        console.log('8');
        if (globalThis.board[8] == 0) {globalThis.board[8] = "X";drawCross(256,256);canvas.removeEventListener('mouseup', playerEvent);currentTurn = 0;return console.log('Конец хода игрока'),currentTurn,processGame()}
    }
    else {
        commentator.textContent = "Вы нажали не туда!!!";
    }
    console.log('0');
    });
}
//check winner
function checkWinner() {
    let X = [];
    let resultX = "";
    let resultO = "";
    let O = [];
    /* board.forEach((item,index) => {
        console.log('Проверка победителя');
        if (item) {
            console.log('type:' + item);
            for(let i = 0;i < board.length;i++){
                if (board[i]== 'X'){resultX.push(i)}
                else if (board[i]== 'O'){resultO.push(i)}
                
            }
            result = String(index);
            console.log('result1:' + result);
            result += String(board.indexOf(type,Number(result.charAt(1))));
            console.log('result2:' + result);
            result += String(board.indexOf(type,Number(result.charAt(2))));
            console.log('result3:' + result);
            
        }
    }); */
    for(let i = 0;i < board.length;i++){
        if (board[i]== 'X'){X.push(i)}
        else if (board[i]== 'O'){O.push(i)}
    }
    for(let i = 0;i < X.length;i++) {
        resultX += String(X[i]);
    }
    for(let i = 0;i < O.length;i++) {
        resultX += String(O[i]);
    }
    for (let i = 0;i < wayToWin.length; i++) {
        if (resultX.includes(wayToWin[i][0]) && resultX.includes(wayToWin[i][1]) && resultX.includes(wayToWin[i][2])){winner = "Игрок"}
        else if (resultO.includes(wayToWin[i][0]) && resultO.includes(wayToWin[i][1]) && resultO.includes(wayToWin[i][2])){winner = "Компьютер"}
    }
    /* while(resultO.lenght < 2 || resultX.lenght < 2) {
        for(let i = 0;i < board.length;i++) {
            if (board[i] == 'X'){resultX.push(i)}
            else if (board[i] == 'O'){resultO.push(i)}
        }
    } */
    console.log(X);
    console.log(O);
    console.log(resultX);
    console.log(resultO);
    console.log(winner);
    return winner
}
//main
function startGame () {
    ctx.clearRect(0, 0, 384, 384)
    drawLines();
    currentTurn = firstTurn();
    winner = "";
    globalThis.board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ];
}
function processGame () {
    console.log('Старт обработки игры');
    checkWinner();
    if (winner) {return congratulationWinner(winner)};
    console.log('Старт проверки первого хода');
    /* switch (currentTurn) {
        case 'computer':
            console.log('Ход компьютера');
            computerMove();
            break;
        case 'player':
            console.log('Ход игрока');
            playerMove();
            break;
        default:
            console.log('Ход ничейный');
            break
    } */
    switch (currentTurn) {
        case 0:
            //computer first
            console.log('Ход компьютера');
            commentator.textContent = "Ход: Компьютер";
            computerMove();
            break;
        case 1:
            //player first
            console.log('Ход игрока');
            commentator.textContent = "Ход: Игрок" + '\n';
            commentator.textContent += "Сделайте ход";
            playerMove();
            break;
    }
}
function congratulationWinner (winner) {
    commentator.textContent = "Поздравляем победителя: " + winner + '\r \n';
    commentator.textContent += "Нажмите на текст чтобы перезапустить игру";
    commentator.addEventListener('mouseup', function restartGame(){
        console.log('Событие нажатия');
        commentator.textContent = "dfsdfsdf";
        return startGame(), processGame(), commentator.removeEventListener('mouseup', restartGame);
    });
}
//start main function onload
globalThis.onload = () => {
    startGame();
    processGame();
}
