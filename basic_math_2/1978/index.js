const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().split("\n");

let number = Number(input[0]);
let arr = input[1].split(" ").map(e => Number(e));
let result = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      result++;
    }
  }
}
console.log(result);
