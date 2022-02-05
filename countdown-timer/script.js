const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const newYears = "1 Jan 2023"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate= new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24);

    const hours = Math.floor(Totalseconds / 3600) % 24;

    const minutes = Math.floor(Totalseconds / 60) % 24 % 60;

    const seconds =Math.floor (Totalseconds) % 60

    daysEl.innerHTML = days
    hoursEl .innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}

//initial call

countdown()

setInterval(countdown,1000)