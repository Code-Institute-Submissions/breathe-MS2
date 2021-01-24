$("#range-labels").hide();

$("#custom-btn").click(function () {
    $("#range-labels").toggle();
})

$("#close-btn").click(function () {
    $("#range-labels").hide();
})

const inhaleExhale = document.getElementById("inhale-exhale");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

let seconds = 0;
let intervalID;


function getBreathText(elapsedSeconds, breathType){
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

startBtn.addEventListener("click", function () {
    if (intervalID) {
        clearInterval(intervalID);
    }

    intervalID = setInterval(function () {
        
        console.log(seconds);

        let relax = {
            inhale: 4,
            hold1: 7,
            exhale: 8,
            hold2: 0
        };
        let box = {
            inhale: 4,
            hold1: 4,
            exhale:4,
            hold2: 4
        };
        let calm = {
            inhale: 7,
            hold1: 0,
            exhale: 11,
            hold2: 0
        };


        let text = getBreathText(seconds, box);

        inhaleExhale.textContent = text;

        seconds += 1;
    }, 1000);
})

pauseBtn.addEventListener("click", function () {
    clearInterval(intervalID);
})

