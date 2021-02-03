/*Create initialiseBreathingApp function with all functions inside*/
function initialiseBreathingApp() {
    /*Set variables for elements from index.html page to use in later function*/
    const inhaleExhale = document.getElementById("inhale-exhale-text");
    const countdown = document.getElementById("breathingCountdown");
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const submitBtn = document.getElementById("modal-submit-btn");

    let intervalID = 0;

    /* Create variables for  linkSliderToSpan() function*/
    let sliderInhale = document.getElementById("inhale");
    let sliderInhaleHold = document.getElementById("inhale-hold");
    let sliderExhale = document.getElementById("exhale");
    let sliderExhaleHold = document.getElementById("exhale-hold");

    let inhaleSpan = document.getElementById("inhaleValue");
    let inhaleHoldSpan = document.getElementById("inhaleHoldValue");
    let exhaleSpan = document.getElementById("exhaleValue");
    let exhaleHoldSpan = document.getElementById("exhaleHoldValue");

    // Set variables for elements from index.html page to use in getSelectedBreathingType function
    let boxBreathing = document.getElementById("boxBreathing");
    let relaxBreathing = document.getElementById("relaxBreathing");
    let calmBreathing = document.getElementById("calmBreathing");
    let customBreathing = document.getElementById("customBreathing");

    // Set object variables for the three set breathing types
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

    $("#range-labels").hide();
    $("#stop-btn").hide();

    function registerEventHandlers() {
        $("#customBreathing").click(function () {
            $("#range-labels").show();
        });
        // Custom slider options collapse if other breathing is selected
        $("#boxBreathing, #relaxBreathing, #calmBreathing").click(function () {
            $("#range-labels").hide();
        });

        $("#close-btn").click(function () {
            $("#range-labels").hide();
        });

        function disableBtns() {
            $(stopBtn).attr("disabled", "disabled");
            $(settingsBtn).attr("disabled", "disabled");
            setTimeout(function () {
                $(stopBtn).attr("disabled", false);
                $(settingsBtn).attr("disabled", false);
            }, 2500);
        }
        //Adding click functions to buttons
        $(startBtn).click(function () {
            startBreathing();
            disableBtns();
            $("#start-btn").hide();
            $("#stop-btn").show();

        });

        //Modal closes when submit button clicked
        $(submitBtn).click(function () {
            $("#letsBreathe").modal("hide");
            $("#start-btn").hide();
            $("#stop-btn").show();
            disableBtns();
        });

        $(stopBtn).click(function () {
            clearInterval(intervalID);
            $("#stop-btn").hide();
            $("#start-btn").show();
            inhaleExhale.textContent = "Press play to begin";
            /**Puts a blank space in span to keep same 
             * distance between elements
             */
            countdown.textContent = "\xa0";
        });

        settingsBtn.addEventListener("click", function () {
            clearInterval(intervalID);
            $(stopBtn).hide();
            $(startBtn).show();
            inhaleExhale.textContent = "Press play to begin";
            countdown.textContent = "\xa0";
        });

        submitBtn.addEventListener("click", function () {
            // start breathing function    
            startBreathing();
            $(stopBtn).show();
            $(startBtn).hide();
        });
    }
    //Call the function
    registerEventHandlers();

    /**
     * Displays text in breathe circle before breathing intervals begin
     * and sets clearInterval.
     * @param {TYPE} arg
     * @return {!Array<TYPE>}
     * @template TYPE
     */
    function startBreathing() {
        let breathingType = getSelectedBreathingType();
        let seconds = 0;

        if (intervalID) {
            clearInterval(intervalID);
        }
        // Create countdown of 3 seconds before breathing starts
        inhaleExhale.textContent = "";

        setTimeout(function () {
            inhaleExhale.textContent = "Ready?";
        }, 500);

        setTimeout(function () {
            inhaleExhale.textContent = "Let's go!";
        }, 1500);

        // Delay setInterval by 1.5sec to allow for person to get ready.   
        setTimeout(function () {
            intervalID = setInterval(function () {
                console.log(seconds);

                let options = getBreathText(seconds, breathingType);

                inhaleExhale.textContent = options.text;
                countdown.textContent = options.countdown;

                seconds += 1;
            }, 1000);
        }, 1500);
    }

    /**
     * Create function to display correct breath prompts and countdown 
     * in seconds for respective breathing methods
     * @param {Integer} elapsedSeconds
     * @param {Object} breathType
     * @return {!text<String>}
     */
    function getBreathText(elapsedSeconds, breathType) {
        let breathDuration = breathType.inhale + breathType.inhaleHold + breathType.exhale + breathType.exhaleHold;
        let breathSeconds = elapsedSeconds % breathDuration;

        if (breathSeconds < breathType.inhale) {
            return {
                text: "Inhale",
                countdown: breathType.inhale - breathSeconds
            };
        }
        // 1st hold
        else if (breathSeconds < (breathType.inhale + breathType.inhaleHold)) {
            return {
                text: "Hold",
                countdown: (breathType.inhale + breathType.inhaleHold) - breathSeconds
            };
        }
        // 'out'
        else if (breathSeconds < (breathType.inhale + breathType.inhaleHold + breathType.exhale)) {
            return {
                text: "Exhale",
                countdown: (breathType.inhale + breathType.inhaleHold + breathType.exhale) - breathSeconds
            };
        }
        // 2nd hold
        else {
            return {
                text: "Hold",
                countdown: (breathType.inhale + breathType.inhaleHold + breathType.exhale + breathType.exhaleHold) - breathSeconds
            };
        }
    }

    /**
     * Links checked radio button to object variable to use in startBreathing() function
     * @return {!box<Object>}
     */
    function getSelectedBreathingType() {
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

    /**
     * Turns custom string value into integer value for use in getSelectedBreathingType()
     * @return {!box<Object>}
     */
    function getCustomBreathingType() {
        return {
            inhale: parseInt(document.getElementById("inhale").value),
            inhaleHold: parseInt(document.getElementById("inhale-hold").value),
            exhale: parseInt(document.getElementById("exhale").value),
            exhaleHold: parseInt(document.getElementById("exhale-hold").value),
        };
    }

    /**
     * Shows the selected value above the slider in the modal 
     */
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

    /**
     * Fullscreen function for breathe circle
     * Found tips on youtube tutorial - full credit in README 
     */
    function getFullscreenElement() {
        return document.fullscreenElement;
    }

    //Toggle full screen using a click event listener to the fullscreen icon on the breathe circle
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
}

// Call the function when page is loaded
$(document).ready(function () {
    initialiseBreathingApp();
});