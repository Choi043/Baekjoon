const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [n, ...arr] = fs.readFileSync(fileSync).toString().trim().split("\n");

let result = "";

for (let i = 0; i < n; i++) {
  let number = arr[i].split(" ").map(Number);
  result += `Case #${i + 1}: ` + `${number[0]} + ${number[1]} = ` + (+number[0] + +number[1]) + "\n";
}

console.log(result);
