const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ");

const num = parseInt(input[0]);

let incNumber = 1;
let i = 1;

while (num > i) {
  i += incNumber * 6;
  incNumber++;
}

console.log(incNumber);
