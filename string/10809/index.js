const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim();

let arr = Array.from({ length: 26 }, () => -1);

for (let i = 0; i < input.length; i++) {
  let number = input[i].charCodeAt(0) - 97;
  if (arr[number] === -1) {
    arr[number] = i;
  }
}

console.log(arr.join(" "));
