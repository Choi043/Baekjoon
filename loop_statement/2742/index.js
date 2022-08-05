const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const n = fs.readFileSync(fileSync).toString().trim();

let result = "";

for (let i = n; i > 0; i--) {
  result += i + "\n";
}

console.log(result);
