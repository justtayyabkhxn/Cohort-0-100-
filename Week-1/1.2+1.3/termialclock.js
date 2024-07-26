//Strarting from 00:00:00
seconds = 0;
minutes = 0;
hours = 0;
i = 0;
function clock() {
    if (seconds == 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    seconds++;
    console.clear();
    console.log(`0${hours} : 0${minutes} : ${seconds}`)
}
setTimeout(clock, 1 * 1000);
for (let i = 0; i < 100000; i++) {
    setTimeout(clock, i * 1000);
}

// count=10;
// function a() {
//     console.clear();
//     console.log("The bomb will blast in: " + count--)
// }
// for (let i = 1; i < 11; i++) {
//     setTimeout(a, i * 1000);
// }