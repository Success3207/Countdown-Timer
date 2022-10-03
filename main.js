function countDown() {
    const futureDate = new Date('September 20, 2023 07:00:00').getTime();
    const nowDate = new Date().getTime();
    const gap = futureDate - nowDate;

        //Calculating some stuff
const seconds = 1000;
const minutes = seconds * 60;
const hour = minutes * 60;
const day = hour * 24;

//Getting the remainder

const daysAhead = Math.floor(gap / day);
const hoursAhead = Math.floor((gap % day) / hour);
const minutesAhead = Math.floor((gap % hour) / minutes);
const secondsAhead = Math.floor((gap % minutes) / seconds)


// Making it display

document.getElementById("day").innerText = daysAhead;
document.getElementById("hour").innerText = hoursAhead;
document.getElementById("minutes").innerText = minutesAhead;
document.getElementById("seconds").innerText = secondsAhead;
}
setInterval(countDown, 1000)


