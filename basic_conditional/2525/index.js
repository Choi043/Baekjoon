const fs = require("fs");

const time = fs.readFileSync(0).toString().trim().split("\n");

let hour = +time[0].split(" ")[0];
let min = +time[0].split(" ")[1];
let runTime = +time[1];
let setHour, setMin;

if (runTime >= 60) {
  setHour = parseInt(runTime / 60);
  setMin = runTime % 60;
  hour += setHour;
  min += setMin;
} else {
  min += runTime;
}

if (min >= 60) {
  min -= 60;
  hour++;
}

if (hour > 23) hour -= 24;

console.log(hour, min);
