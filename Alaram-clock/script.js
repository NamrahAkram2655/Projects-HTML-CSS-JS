// Selecting all elemnts to use and add some actions 
const time = document.getElementById("time");
const morningEvening = document.getElementById("me");

const btn = document.getElementById("btn");

const hours = document.getElementById("hours");
const min = document.getElementById("min");
const set = document.getElementById("set");

// making a function to pass it to set interval, you can also do it dirctly 

function Alarm() {
    let exacttime = new Date();
    time.innerHTML = exacttime.toLocaleTimeString();

    // Doing this for AM and PM
    hoursChecking = exacttime.getHours();
    if (hoursChecking >= 0 && hoursChecking < 12) {
        morningEvening.innerText = "AM";
    }
    else {
        morningEvening.innerText = "PM";
    }
}
// calling set interval function

setInterval(Alarm, 1000);

// Adding a event on button for setting alarm

btn.addEventListener("click", function () {

    let h = hours.value;
    let m = min.value;

    // checking that input shouldn't be empty while setting alarm

    if (h === "") {
        alert("hours is empty");
    }
    if (m === "") {
        alert("min is empty");
    }

    set.innerText = h + ":" + m + ":" + "00";
});

let sound = document.getElementById("music");
let logo = document.querySelector(".logo");
let gift = document.querySelector(".gift");
let stop = document.getElementById("stop");
let daynight = document.getElementById("daynight");

let checkInterval = setInterval(() => {

    let exacttime = new Date();
    time.innerHTML = exacttime.toLocaleTimeString();

    hoursChecking = Number(exacttime.getHours());
    minChecking = Number(exacttime.getMinutes());

    let h = Number(hours.value);
    let m = Number(min.value);
    let dn = daynight.value;

    if (hoursChecking === h && minChecking === m && morningEvening.innerText === dn) {
        sound.play();
        logo.style.display = "none";
        gift.classList.add("show");
    }
    else if (dn != morningEvening.innerText) {
        sound.pause();
        logo.style.display = "flex";
        gift.classList.remove("show");
    }
    else {
        sound.pause();
        logo.style.display = "flex";
        gift.classList.remove("show");
    }
}, 1000);



