const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const n = fs.readFileSync(fileSync).toString().trim();

let result = "";

for (let i = 1; i <= n; i++) {
  result += i + "\n";
}

console.log(result);
