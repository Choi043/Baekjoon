const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim();

let number = Number(input);

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  return factorial(n - 1) * n;
}

console.log(factorial(number));
