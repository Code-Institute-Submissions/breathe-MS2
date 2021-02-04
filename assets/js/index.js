/*Create initialiseBreathingApp function with all functions inside*/
function initialiseBreathingApp() {
    /*Set variables for elements from index.html page to use in later function*/
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const submitBtn = document.getElementById("modal-submit-btn");

    const breatheCircle = document.getElementById("breathe-circle");
    const inhaleExhale = document.getElementById("inhale-exhale-text");
    const countdown = document.getElementById("breathingCountdown");

    let intervalID = 0;

    /* Create variables for  linkSliderToSpan() function*/
    const sliderInhale = document.getElementById("inhale");
    const sliderInhaleHold = document.getElementById("inhale-hold");
    const sliderExhale = document.getElementById("exhale");
    const sliderExhaleHold = document.getElementById("exhale-hold");

    const inhaleSpan = document.getElementById("inhaleValue");
    const inhaleHoldSpan = document.getElementById("inhaleHoldValue");
    const exhaleSpan = document.getElementById("exhaleValue");
    const exhaleHoldSpan = document.getElementById("exhaleHoldValue");

    // Set variables for elements from index.html page to use in getSelectedBreathingType function
    const boxBreathing = document.getElementById("boxBreathing");
    const relaxBreathing = document.getElementById("relaxBreathing");
    const calmBreathing = document.getElementById("calmBreathing");
    const customBreathing = document.getElementById("customBreathing");

    // Set object variables for the three set breathing types
    const box = {
        inhale: 4,
        inhaleHold: 4,
        exhale: 4,
        exhaleHold: 4
    };

    const relax = {
        inhale: 4,
        inhaleHold: 7,
        exhale: 8,
        exhaleHold: 0
    };

    const calm = {
        inhale: 7,
        inhaleHold: 0,
        exhale: 11,
        exhaleHold: 0
    };

    // Hides elements on index.html
    function hideOnLoad() {
        $("#range-labels, #stop-btn").hide();
    }
    function toggleCustomBtnOnClick() {
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
    }
    // Disable stop and settings button for 2.5 seconds
    function disableBtns() {
        $(stopBtn).attr("disabled", "disabled");
        $(settingsBtn).attr("disabled", "disabled");
        setTimeout(function () {
            $(stopBtn).attr("disabled", false);
            $(settingsBtn).attr("disabled", false);
        }, 2500);
    }

    //Add click events to startBtn
    function onStartBtnClick() {
        $(startBtn).click(function () {
            startBreathing();
            disableBtns();
            $("#start-btn").hide();
            $("#stop-btn").show();
        });
    }

    //Add click events to stopBtn
    function onStopBtnClick() {
        $(stopBtn).click(function () {
            clearInterval(intervalID);
            $("#stop-btn").hide();
            $("#start-btn").show();
            inhaleExhale.textContent = "Press play to begin";
            /**Puts a blank space in span to keep same 
             * distance between elements
             */
            countdown.textContent = "\xa0";
            //Reverts background-colour back to original colour
            breatheCircle.classList.remove(breatheCircle.classList.item(1));
        });
    }

    function onSettingsBtnClick() {
        settingsBtn.addEventListener("click", function () {
            clearInterval(intervalID);
            $(stopBtn).hide();
            $(startBtn).show();

            inhaleExhale.textContent = "Press play to begin";
            countdown.textContent = "\xa0";
            breatheCircle.classList.remove(breatheCircle.classList.item(1));
        });
    }

    function onSubmitBtnClick() {
        submitBtn.addEventListener("click", function () {
            // start breathing function    
            startBreathing();
            $(stopBtn).show();
            $(startBtn).hide();
            $("#letsBreathe").modal("hide");
            disableBtns();
        });
    }

    hideOnLoad();
    toggleCustomBtnOnClick();
    onStartBtnClick();
    onStopBtnClick();
    onSettingsBtnClick();
    onSubmitBtnClick();

    /**
     * Sets 2.5 delay on setInterval so text displays 
     * in breathe circle before exercise begins
     * Displays the prompts from getBreathText and
     * colour changes from one prompt to the next
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
                breatheCircle.classList.add(options.circleClassName);
                /* Removes previous color class from current breathing prompt  
                on breathe circle to prevent second hold colour from sticking*/
                if (breatheCircle.classList.length > 1) {
                    breatheCircle.classList.remove(breatheCircle.classList.item(1));
                    breatheCircle.classList.add(options.circleClassName);
                }
                seconds += 1;
            }, 1000);
        }, 1500);
    }

    /**
     * Create function to display correct breath prompts,  
     * countdown in seconds and background-colour changes   
     * for respective breathing methods
     * @param {Integer} elapsedSeconds
     * @param {Object} breathType
     * @return {!<Object>}
     */
    function getBreathText(elapsedSeconds, breathType) {
        let breathDuration = breathType.inhale + breathType.inhaleHold + breathType.exhale + breathType.exhaleHold;
        let breathSeconds = elapsedSeconds % breathDuration;

        if (breathSeconds < breathType.inhale) {
            return {
                text: "Inhale",
                countdown: breathType.inhale - breathSeconds,
                circleClassName: "inhale-colour",

            };
        }
        // 1st hold
        else if (breathSeconds < (breathType.inhale + breathType.inhaleHold)) {
            return {
                text: "Hold",
                countdown: (breathType.inhale + breathType.inhaleHold) - breathSeconds,
                circleClassName: "hold-colour",

            };
        }
        // 'out'
        else if (breathSeconds < (breathType.inhale + breathType.inhaleHold + breathType.exhale)) {
            return {
                text: "Exhale",
                countdown: (breathType.inhale + breathType.inhaleHold + breathType.exhale) - breathSeconds,
                circleClassName: "exhale-colour",

            };
        }
        // 2nd hold
        else {
            return {
                text: "Hold",
                countdown: (breathType.inhale + breathType.inhaleHold + breathType.exhale + breathType.exhaleHold) - breathSeconds,
                circleClassName: "hold-colour2",
            };
        }
    }

    /**
     * Links checked radio button to object variable to use in startBreathing() function
     * @return {!<Object>}
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
     * @return {!<Object>}
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