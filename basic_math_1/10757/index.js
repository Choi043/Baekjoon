const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ").map(BigInt);

const numA = input[0];
const numB = input[1];

const result = (numA + numB).toString();

console.log(result);
