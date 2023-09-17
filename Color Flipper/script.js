const main = document.querySelector('.main-bg');
const colorName = document.getElementById('color-name');


const colors = [
     'red', 'green', 'blue', 'black', 'white', 'Purple', 'orange', 'violet'
];

const colorNames = [
    'Red', 'Green', 'Blue','Black', 'White', 'Purple', 'Orange', 'Violet'
];

const colorBtn = document.querySelector('.btn');

colorBtn.addEventListener('click', function() {
    const randomIndex =  Math.floor( Math.random() * colors.length);
    changeColorName(randomIndex);
    changeBackgroundColor(randomIndex); 
   
});


function getColor(randomIndex) {
//   const randomIndex =  Math.floor( Math.random() * colors.length);
//   console.log(randomIndex);
    return colors[randomIndex];
    
}

function getName(randomIndex) {
    // const randomName =  Math.floor( Math.random() * colorNames.length);
    // console.log(randomIndex);
    return colorNames[randomIndex];
}


function changeBackgroundColor(randomIndex) {
    const randomColor = getColor(randomIndex);
    main.style.backgroundColor = randomColor;
    
}  
function changeColorName(randomIndex) {
    colorName.style.color = getColor(randomIndex);
    const nameRandom = getName(randomIndex);
    colorName.textContent = nameRandom;

    if (colorName.textContent == 'Black') {
        return colorName.style.color = 'white';
    }
}
