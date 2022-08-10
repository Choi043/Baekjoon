const fs = require("fs");

const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split("\n");
let sum = 0;

const n = Number(input[0]);

for (let i = 0; i < n; i++) {
  sum += +input[1][i];
}

console.log(sum);
