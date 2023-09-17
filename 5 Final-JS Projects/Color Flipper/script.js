const main = document.querySelector('.main-bg');
const colorName = document.getElementById('color-name');


const colors = [
     'red', 'green', 'blue', 'black', 'white', 'Purple', 'orange', 'violet'
];

const colorNames = [
   'Red', 'Green', 'Blue','Black', 'White', 'Purple', 'Orange', 'Violet'
];
console.log(colors);

const colorBtn = document.querySelector('.btn');

colorBtn.addEventListener('click', function() {
    changeColorName();
    changeBackgroundColor();
});

function getColor() {
  const randomIndex =  Math.floor( Math.random() * colors.length);
    return colors[randomIndex];
}
function getName() {
    const randomName =  Math.floor( Math.random() * colorNames.length);
    return colorNames[randomName];
}

function changeBackgroundColor() {
    const randomColor = getColor();
    document.body.style.backgroundColor = randomColor;
}  
function changeColorName() {
    const nameRandom = getName();
    colorName.textContent = nameRandom;
}
