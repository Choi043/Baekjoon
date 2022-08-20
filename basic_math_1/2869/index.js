const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ").map(e => +e);

let climb = input[0];
let slip = input[1];
let height = input[2];

let count = Math.ceil((height - slip)/(climb - slip));

console.log(count);