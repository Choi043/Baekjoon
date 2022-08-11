const { Console } = require("console");
const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim();
let count = 0;

let number = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

for (let i = 0; i < input.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (number[j].includes(input[i])) {
      count += j + 1;
    }
  }
}

console.log(count);
