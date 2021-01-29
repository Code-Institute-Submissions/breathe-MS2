/*Set variables & create getBreathText() function */
const inhaleExhale = document.getElementById("inhale-exhale-text");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const settingsBtn = document.getElementById("settings-btn");

let intervalID;

/* Create variables for  linkSliderToSpan() function*/
let sliderInhale = document.getElementById("inhale");
let sliderInhaleHold = document.getElementById("inhale-hold");
let sliderExhale = document.getElementById("exhale");
let sliderExhaleHold = document.getElementById("exhale-hold");

let inhaleSpan = document.getElementById("inhaleValue");
let inhaleHoldSpan = document.getElementById("inhaleHoldValue");
let exhaleSpan = document.getElementById("exhaleValue");
let exhaleHoldSpan = document.getElementById("exhaleHoldValue");

const submitBtn = document.getElementById("modal-submit-btn");

$(document).ready(function () {
    $("#range-labels").hide();
});

/* Click events */
$("#customBreathing").click(function () {
    $("#range-labels").show();
});

$("#boxBreathing, #relaxBreathing, #calmBreathing").click(function () {
    $("#range-labels").hide();
});

$("#close-btn").click(function () {
    $("#range-labels").hide();
});

/*Modal closes when submit button clicked*/
$("#modal-submit-btn").click(function () {
    $("#letsBreathe").modal("hide");
});

/* Only display play or stop button*/
$("#stop-btn").hide();

/* Only display play or stop button*/
$("#modal-submit-btn").click(function () {
    $("#start-btn").hide();
    $("#stop-btn").show();
});

/*Adding click functions to buttons*/
$(startBtn).click(function () {
    startBreathing();
    $("#start-btn").hide();
    $("#stop-btn").show();
});

$(stopBtn).click(function () {
    clearInterval(intervalID);
    $("#stop-btn").hide();
    $("#start-btn").show();
});
settingsBtn.addEventListener("click", function () {
    clearInterval(intervalID);
});

$("#stop-btn, #settings-btn").click(function () {
    inhaleExhale.textContent = "Press play to begin";
});

submitBtn.addEventListener("click", function () {
    // start breathing    
    startBreathing();
    $("#stop-btn").hide();
    $("#start-btn").show();
});

function startBreathing() {
    let breathingType = getSelectedBreathingType();
    let seconds = 0;

    if (intervalID) {
        clearInterval(intervalID);
    }

    inhaleExhale.textContent = "";

    setTimeout(function () {
        inhaleExhale.textContent = "3";
    }, 500);

    setTimeout(function () {
        inhaleExhale.textContent = "2";
    }, 1500);

    setTimeout(function () {
        inhaleExhale.textContent = "1";
    }, 2500);

    setTimeout(function () {
        intervalID = setInterval(function () {
            console.log(seconds);

            let text = getBreathText(seconds, breathingType);

            inhaleExhale.textContent = text;

            seconds += 1;
        }, 1000);

    }, 2500);
}

function getBreathText(elapsedSeconds, breathType) {
    let breathDuration = breathType.inhale + breathType.inhaleHold + breathType.exhale + breathType.exhaleHold;
    let breathSeconds = elapsedSeconds % breathDuration;
    let text;

    if (breathSeconds < breathType.inhale) {
        text = "Inhale";
    }
    // 1st hold
    else if (breathSeconds < (breathType.inhale + breathType.inhaleHold)) {
        text = "Hold";
    }
    // 'out'
    else if (breathSeconds < (breathType.inhale + breathType.inhaleHold + breathType.exhale)) {
        text = "Exhale";
    }
    // 2nd hold
    else {
        text = "Hold";
    }

    return text;
}

function getSelectedBreathingType() {
    let box = {
        inhale: 4,
        inhaleHold: 4,
        exhale: 4,
        exhaleHold: 4
    };

    let relax = {
        inhale: 4,
        inhaleHold: 7,
        exhale: 8,
        exhaleHold: 0
    };

    let calm = {
        inhale: 7,
        inhaleHold: 0,
        exhale: 11,
        exhaleHold: 0
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
}

function getCustomBreathingType() {
    return {
        inhale: parseInt(document.getElementById("inhale").value),
        inhaleHold: parseInt(document.getElementById("inhale-hold").value),
        exhale: parseInt(document.getElementById("exhale").value),
        exhaleHold: parseInt(document.getElementById("exhale-hold").value),
    };
}


/* Create function to show value in span */
function linkSliderValueToSpanText(slider, span) {
    span.innerHTML = slider.value;
    slider.oninput = function () {
        span.innerHTML = this.value;
    };
}

linkSliderValueToSpanText(sliderInhale, inhaleSpan);
linkSliderValueToSpanText(sliderInhaleHold, inhaleHoldSpan);
linkSliderValueToSpanText(sliderExhale, exhaleSpan);
linkSliderValueToSpanText(sliderExhaleHold, exhaleHoldSpan);


/* Fullscreen API for breathe circle */
function getFullscreenElement(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement;
}

function toggleFullscreenMode() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    } else {
        document.getElementById("breathe-timer").requestFullscreen().catch(console.log);
    }
}
document.getElementById("fullscreen-btn").addEventListener("click", () => {
    toggleFullscreenMode();
});


