const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ").map(Number);

let [A, B, C] = [input[0], input[1], input[2]];

let result = Math.floor(A / (C - B)) + 1;

B >= C ? console.log(-1) : console.log(result);
