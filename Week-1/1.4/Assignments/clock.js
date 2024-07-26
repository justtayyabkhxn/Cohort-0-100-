const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const montharr = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


function clock() {
    const myTime = new Date();
    const year = (myTime.getFullYear()); //Year
    const day = (weekDays[myTime.getDay()]); //Day
    const month = (montharr[myTime.getMonth()]); //Month
    const date = (myTime.getDate()); //Date
    console.clear();
    var seconds = myTime.getSeconds();
    var minutes = myTime.getMinutes();
    var hours = myTime.getHours();
    let zone;
    if(hours/12>=1) zone="pm";
    else zone="am";
    console.log(`${date} ${month} ${year} , ${day}`);
    console.log(`${hours} : ${minutes} : ${seconds} ${zone}`);
}

setInterval(clock, 1000);

