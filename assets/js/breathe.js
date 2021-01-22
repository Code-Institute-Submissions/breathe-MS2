const inhaleExhale = document.getElementById("inhale-exhale");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");

let count = 0;
let intervalID;

startBtn.addEventListener("click", function(){
    intervalID = setInterval(function() {
        count += 1;
        inhaleExhale.textContent = count;
    }, 1000);
})

pauseBtn.addEventListener("click", function(){
    clearInterval(intervalID);
})