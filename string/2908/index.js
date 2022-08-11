const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ");

let numA = [...input[0]].reverse().join("");
let numB = [...input[1]].reverse().join("");

if (numA > numB) console.log(numA);
else console.log(numB);
