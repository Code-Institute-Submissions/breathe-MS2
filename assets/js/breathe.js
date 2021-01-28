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
const inhaleExhale = document.getElementById("inhale-exhale-text");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const settingsBtn = document.getElementById("settings-btn");


let intervalID;

/*Adding click functions to buttons*/
startBtn.addEventListener("click", function () {
    startBreathing();
})

stopBtn.addEventListener("click", function () {
    clearInterval(intervalID);
})
settingsBtn.addEventListener("click", function () {
    clearInterval(intervalID);
})

$("#stop-btn, #settings-btn").click(function(){
    inhaleExhale.textContent = "Please press play to begin"
})

const submitBtn = document.getElementById("modal-submit-btn");

submitBtn.addEventListener("click", function () {
    // start breathing    
    startBreathing();
});


function startBreathing() {
    let breathingType = getSelectedBreathingType();
    let seconds = 0;

    if (intervalID) {
        clearInterval(intervalID);
    }

    inhaleExhale.textContent = "";

    setTimeout(function() {
        inhaleExhale.textContent = "3";
    }, 500);

    setTimeout(function() {
        inhaleExhale.textContent = "2";
    }, 1500);

    setTimeout(function() {
        inhaleExhale.textContent = "1";
    }, 2500);
    
    setTimeout(function() {
        intervalID = setInterval(function () {
        console.log(seconds);

        let text = getBreathText(seconds, breathingType);

        inhaleExhale.textContent = text;

        seconds += 1;
    }, 1000);
    
    }, 2500);
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
$("#modal-submit-btn").click(function(){
    $("#letsBreathe").modal("hide");
})

/* Only display play or stop button*/
$("#stop-btn").hide();

$("#start-btn").click(function(){
    $("#start-btn").hide();
    $("#stop-btn").show();
})

$("#stop-btn").click(function(){
    $("#stop-btn").hide();
    $("#start-btn").show();
})
/* Only display play or stop button*/
$("#modal-submit-btn").click(function(){
    $("#start-btn").hide();
    $("#stop-btn").show();
})

$("#settings-btn").click(function(){
    $("#stop-btn").hide();
    $("#start-btn").show();
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

/* Create function to get value from slider */
function getValueFromSlider(slider, value) {
    value.innerHTML = slider.value;
    slider.oninput = function(){
        value.innerHTML = this.value;
    }
}

getValueFromSlider(sliderInhale, output1);
getValueFromSlider(sliderInhaleHold, output2);
getValueFromSlider(sliderExhale, output3);
getValueFromSlider(sliderExhaleHold, output4);


