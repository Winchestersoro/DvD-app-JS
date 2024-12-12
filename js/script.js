'use strict';

const button = document.getElementsByClassName('inter')[0];
const block = document.getElementsByClassName('block')[0];
const biba = document.getElementsByClassName('frame')[0];

let directionX = 1;
let directionY = 1;
let posX = 0;
let posY = 0;
let containerWidth = document.querySelector('.container').clientWidth - 50;
let containerHeight = document.querySelector('.container').clientHeight - 50;

let animationId; // Переменная для хранения идентификатора анимации

function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function animate() {
    if (posX >= containerWidth) {
        directionX = -1;
    } else if (posX <= 0) {
        directionX = 1;
    }
    if (posY >= containerHeight) {
        directionY = -1;
    } else if (posY <= 0) {
        directionY = 1;
    }
    posX += directionX;
    posY += directionY;
    block.style.left = posX + 'px';
    block.style.top = posY + 'px';
    animationId = requestAnimationFrame(animate); // Сохраняем идентификатор анимации
}

button.addEventListener("click", () => {
    posX = getRandomPosition(0, containerWidth);
    posY = getRandomPosition(0, containerHeight);
    directionX = Math.random() > 0.5 ? 1 : -1;
    directionY = Math.random() > 0.5 ? 1 : -1;
    animationId = requestAnimationFrame(animate);
});

biba.addEventListener("click", () => {
    cancelAnimationFrame(animationId); // Отменяем анимацию с помощью сохраненного идентификатора
});
