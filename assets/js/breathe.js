$(document).ready(function () {
    $("#range-labels").hide();
});

$("#custom-btn").click(function () {
    $("#range-labels").toggle();
})

$("#close-btn").click(function () {
    $("#range-labels").hide();
})


/*Set variables & create getBreathText() function */
const inhaleExhale = document.getElementById("inhale-exhale");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

let seconds = 0;
let intervalID;



startBtn.addEventListener("click", function () {
    startBreathing();
})

pauseBtn.addEventListener("click", function () {
    clearInterval(intervalID);
})



const submitBtn = document.getElementById("modal-btn");

submitBtn.addEventListener("click", function () {
    // start breathing
    startBreathing();

    // TODO: close modal
});

function startBreathing() {
    let breathingType = getSelectedBreathingType();

    if (intervalID) {
        clearInterval(intervalID);
    }

    intervalID = setInterval(function () {
        console.log(seconds);

        let text = getBreathText(seconds, breathingType);

        inhaleExhale.textContent = text;

        seconds += 1;
    }, 1000);
}

function getBreathText(elapsedSeconds, breathType) {
    let breathDuration = breathType.inhale + breathType.hold1 + breathType.exhale + breathType.hold2;
    let breathSeconds = elapsedSeconds % breathDuration;

    let text;

    if (breathSeconds < breathType.inhale) {
        text = "inhale";
    }
    // 1st hold
    else if (breathSeconds < (breathType.inhale + breathType.hold1)) {
        text = "hold";
    }
    // 'out'
    else if (breathSeconds < (breathType.inhale + breathType.hold1 + breathType.exhale)) {
        text = "exhale";
    }
    // 2nd hold
    else {
        text = "hold";
    }

    return text;
}

function getSelectedBreathingType() {
    let box = {
        inhale: 4,
        hold1: 4,
        exhale: 4,
        hold2: 4
    };

    let relax = {
        inhale: 4,
        hold1: 7,
        exhale: 8,
        hold2: 0
    };

    let calm = {
        inhale: 7,
        hold1: 0,
        exhale: 11,
        hold2: 0
    };
    
    let boxBreathing = document.getElementById("boxBreathing");
    let relaxBreathing = document.getElementById("relaxBreathing");
    let calmBreathing = document.getElementById("calmBreathing");


    if (boxBreathing.checked) {
        return box;
    }
    else if (relaxBreathing.checked) {
        return relax;
    }
    else if (calmBreathing.checked) {
        return calm;
    }
    // default to box breathing
    else {
        return box;
    }
}


/*
submitBtn.addEventListener("click", function(){
    getBreathText(seconds, box);

}) */

