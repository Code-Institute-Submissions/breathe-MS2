$(document).ready(function () {
    $("#range-labels").hide();
});

$("#customBreathing").click(function () {
    $("#range-labels").show();
})

$("#boxBreathing, #relaxBreathing, #calmBreathing").click(function () {
    $("#range-labels").hide();
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
    let customBreathing = document.getElementById("customBreathing");

    if (boxBreathing.checked) {
        return box;
    }
    else if (relaxBreathing.checked) {
        return relax;
    }
    else if (calmBreathing.checked) {
        return calm;
    }
    else if (customBreathing.checked) {
        return getCustomBreathingType();
    }
    // default to box breathing
    else {
        return box;
    }
};

function getCustomBreathingType() {
    return {
        inhale: parseInt(document.getElementById("inhale").value),
        hold1: parseInt(document.getElementById("inhale-hold").value),
        exhale: parseInt(document.getElementById("exhale").value),
        hold2: parseInt(document.getElementById("exhale-hold").value),
    };
};

/*Modal closes when submit button clicked*/
$("#modal-btn").click(function(){
    $("#letsBreathe").modal("hide");
})



/* Values from custom slider */
var sliderInhale = document.getElementById("inhale");
var sliderInhaleHold = document.getElementById("inhale-hold");
var sliderExhale = document.getElementById("exhale");
var sliderExhaleHold = document.getElementById("exhale-hold");

var output1 = document.getElementById("inhaleValue");
var output2 = document.getElementById("inhaleHoldValue");
var output3 = document.getElementById("exhaleValue");
var output4 = document.getElementById("exhaleHoldValue");

output1.innerHTML = sliderInhale.value;
sliderInhale.oninput = function(){
    output1.innerHTML = this.value;
}
output2.innerHTML = sliderInhaleHold.value;
sliderInhaleHold.oninput = function(){
    output2.innerHTML = this.value;
}
output3.innerHTML = sliderExhale.value;
sliderExhale.oninput = function(){
    output3.innerHTML = this.value;
}
output4.innerHTML = sliderExhaleHold.value;
sliderExhaleHold.oninput = function(){
    output4.innerHTML = this.value;
}

