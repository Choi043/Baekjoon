const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [n, ...arr] = fs.readFileSync(fileSync).toString().trim().split("\n");

let result = "";

for (let i = 0; i < n; i++) {
  let number = arr[i].split(" ").map(Number);
  result += number[0] + number[1] + "\n";
}

console.log(result);
