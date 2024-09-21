const displayBoard = document.getElementById('display');
const colorText = document.getElementById('color');
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const violet = document.getElementById("violet");
const green = document.getElementById("green");
const indigo = document.getElementById("indigo");
const gold = document.getElementById("gold");
const salmon = document.getElementById("salmon");
const seagreen = document.getElementById("seagreen");
const brown = document.getElementById("brown");
const purple = document.getElementById("purple");


red.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'red';
    colorText.innerHTML = 'Red';
})

orange.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'orange';
    colorText.innerHTML = 'orange';
})

pink.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'pink';
    colorText.innerHTML = 'pink';
})

blue.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'blue';
    colorText.innerHTML = 'blue';
})

violet.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'violet';
    colorText.innerHTML = 'violet';
})

green.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'green';
    colorText.innerHTML = 'green';
})

indigo.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'indigo';
    colorText.innerHTML = 'indigo';
})

gold.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'gold';
    colorText.innerHTML = 'gold';
})

salmon.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'salmon';
    colorText.innerHTML = 'salmon';
})

seagreen.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'seagreen';
    colorText.innerHTML = 'seagreen';
})

brown.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'brown';
    colorText.innerHTML = 'brown';
})

purple.addEventListener('click', () => {
    displayBoard.style.backgroundColor = 'purple';
    colorText.innerHTML = 'purple';
})
