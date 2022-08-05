const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split("\n");

let i = 0;

while (i < input.length) {
  let arr = input[i].split(" ").map(Number);
  let sum = arr[0] + arr[1];

  if (sum != 0) {
    console.log(sum);
  }

  i++;
}
