const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter');

let timerValue = 0;

increase.addEventListener('click', () => {
    counter.textContent ++;
    if(counter.textContent >= '0') {
       counter.style.color = '#008000'
    }
});
decrease.addEventListener('click', () => {
       counter.textContent --;
       decreaseColors();
});
reset.addEventListener('click', () => {
       counter.textContent = '0';
       counter.style.color = '#008000'
});

function decreaseColors() {
    if(counter.textContent < '0') {
        counter.style.color = 'red';
    }
}

