//Get html elements
const canvas = document.getElementsByClassName('game')[0];
const ctx = canvas.getContext('2d');

//Get image
const crossImg = new Image();
crossImg.src = "icons/cross.png";
const zeroImg = new Image();
zeroImg.src = "icons/zero.png";

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
function firstTurn () {
    return Math.round(Math.random()*2)
}
//main
function main () {
    drawLines();

}
//start main function onload
window.onload = () => {
    main();
}
