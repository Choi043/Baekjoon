const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split(" ");
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    count++;
  }
}

console.log(count);
