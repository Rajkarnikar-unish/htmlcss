// Variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSecs = 0;
let leadingMins = 0;
let leadingHrs = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

//Stop watch function 

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSecs = "0" + seconds.toString();
    } else {
        leadingSecs = seconds;
    }
    if (minutes < 10) {
        leadingMins = "0" + minutes.toString();
    } else {
        leadingMins = minutes;
    }
    if (hours < 10) {
        leadingHrs = "0" + hours.toString();
    } else {
        leadingHrs = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHrs + ":" + leadingMins + ":" + leadingSecs;
}

startStopBtn.addEventListener('click', function () {

    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML =
            `<i class="fa fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {

    window.clearInterval(timerInterval);
    seconds = 0;
    hours = 0;
    minutes = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

    if (timerStatus === "started") {
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-solid fa-play" id="play"></i>`;
    }
});