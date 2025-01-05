let secondsElapsed = 0; //let keyword means we can change this value later on
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    //padStart is used to pad a string value that isnt a certain length with certain character
    return String(value).padStart(2, "0");
}

function updateTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    // .innerHTML is used to change the inner elements of the tags within an html file. in this instance its the h1 tags
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    updateTime();
}

function startClock() {
    //to remove any previous interval and set a new one (no repeats)
    if (interval) stopClock()
    //interval will increment a clock by a set amount of time
    //calls function with this amount milliseconds in between
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval) //stops counting
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;     //reset the clock value
    updateTime();   //updates and shows the time without counting
}