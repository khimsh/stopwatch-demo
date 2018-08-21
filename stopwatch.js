// Variables
const displayTime = document.getElementById('displayTime');
const pastTimes = document.getElementById('pastTimes');

// App Controls
const startStop = document.getElementById('startStop');
const reset = document.getElementById('reset');
const recordTime = document.getElementById('recordTime');

let running = false;
let timer = 0;
let interval;

// Run Funtions
startStop.addEventListener('click', () => {
    running = !running;
    if(running) {
        startTimer();
    } else {
        stopTimer();
    }
});

recordTime.addEventListener('click', appendTime);
reset.addEventListener('click', resetAll);

document.addEventListener('keydown', (event) => {
    if(event.key === 't') {
        appendTime();
    } else if(event.key === 'r') {
        resetAll();
    } else if(event.key === 's') {
        running = !running;
        if(running) {
            startTimer();
        } else {
            stopTimer();
        }
    }
});

// Function definitions
function startTimer() {
    interval = setInterval(() => {
        timer = timer + 0.01;
        displayTime.innerHTML = timer.toFixed(2);
    }, 10)
}

function stopTimer() {
    timer = timer;
    clearInterval(interval);
    displayTime.innerHTML = timer.toFixed(2);
}

// appends time to pastTimes
function appendTime() {
    let li = document.createElement('li');
    li.className = 'app__li';
    li.innerHTML = timer.toFixed(2);
    pastTimes.appendChild(li);
}

// Reset
function resetAll() {
    clearInterval(interval);
    timer = 0;
    displayTime.innerHTML = timer;
    running = false;
    while (pastTimes.firstChild) {
        pastTimes.removeChild(pastTimes.firstChild);
    }
}