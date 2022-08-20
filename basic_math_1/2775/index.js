const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let [input, ...arr] = fs
  .readFileSync(fileSync)
  .toString()
  .trim()
  .split("\n")
  .map(e => +e);

function building(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 1) {
    return b;
  } else {
    return building(a, b - 1) + building(a - 1, b);
  }
}

for (let i = 0; i < input; i++) {
  let floor = arr.shift();
  let unit = arr.shift();
  let result = building(floor, unit);
  console.log(result);
}
