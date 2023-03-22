let meditationButtonEl = document.getElementById("meditationButton");
let morningExcercisesButtonEl = document.getElementById("morningExcercisesButton");
let eveningExcercisesButtonEl = document.getElementById("eveningExcercisesButton");
let meditationVideoEl = document.getElementById("meditationVideo");
let morningExcercisesVideoEl = document.getElementById("morningExcercisesVideo");
let eveningExcercisesVideoEl = document.getElementById("eveningExcercisesVideo");

let earlyMorningButtonEl = document.getElementById("earlyMorningButton");
let breakFastButtonEl = document.getElementById("breakFastButton");
let lunchButtonEl = document.getElementById("lunchButton");
let eveningButtonEl = document.getElementById("eveningButton");
let dinnerButtonEl = document.getElementById("dinnerButton");
let bedTimeButtonEl = document.getElementById("bedTimeButton");

let earlyMorningEl = document.getElementById("earlyMorning");
let breakFastEl = document.getElementById("breakFast");
let lunchEl = document.getElementById("lunch");
let eveningEl = document.getElementById("evening");
let dinnerEl = document.getElementById("dinner");
let bedTimeEl = document.getElementById("bedTime");

let checkBPEl = document.getElementById("checkBP");
let checkSugarEl = document.getElementById("checkSugar");
let checkHeartRateEl = document.getElementById("checkHeartRate");
let bpRangesEl = document.getElementById("bpRanges");
let sugarRangesEl = document.getElementById("sugarRanges");
let hearRateRangesEl = document.getElementById("hearRateRanges");

meditationButtonEl.addEventListener("click", function() {
    meditationVideoEl.classList.toggle("d-none");
});
morningExcercisesButtonEl.addEventListener("click", function() {
    morningExcercisesVideoEl.classList.toggle("d-none");
});
eveningExcercisesButtonEl.addEventListener("click", function() {
    eveningExcercisesVideoEl.classList.toggle("d-none");
});

earlyMorningButtonEl.addEventListener("click", function() {
    earlyMorningEl.classList.toggle("d-none");
});
breakFastButtonEl.addEventListener("click", function() {
    breakFastEl.classList.toggle("d-none");
});
lunchButtonEl.addEventListener("click", function() {
    lunchEl.classList.toggle("d-none");
});
eveningButtonEl.addEventListener("click", function() {
    eveningEl.classList.toggle("d-none");
});
dinnerButtonEl.addEventListener("click", function() {
    dinnerEl.classList.toggle("d-none");
});
bedTimeButtonEl.addEventListener("click", function() {
    bedTimeEl.classList.toggle("d-none");
});

checkBPEl.addEventListener("click", function() {
    bpRangesEl.classList.toggle("d-none");
});
checkSugarEl.addEventListener("click", function() {
    sugarRangesEl.classList.toggle("d-none");
});
checkHeartRateEl.addEventListener("click", function() {
    hearRateRangesEl.classList.toggle("d-none");
});
