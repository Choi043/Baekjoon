const fs = require("fs");

const [h, m] = fs.readFileSync(0).toString().trim().split(" ");

let hour = +h;
let min = +m;

if (min < 45) {
  hour--;
  if (hour < 0) {
    hour = 23;
  }
  min = 60 + min - 45;
} else {
  min = min - 45;
}

console.log(hour, min);
