const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim().toUpperCase().split("");

let arr = Array.from({ length: 26 }).fill(0);
let max, count;

for (let i = 0; i < input.length; i++) {
  let char = input[i].charCodeAt(0) - 65;
  arr[char]++;
}

max = Math.max.apply(null, arr);
count = arr.filter(e => e >= max);

if (count.length > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(arr.indexOf(max) + 65));
}
