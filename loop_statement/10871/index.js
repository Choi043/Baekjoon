const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, x] = input[0].split(" ");

let arr = "";

input[1].split(" ").filter(e => {
  if (e < +x) {
    arr += e + " ";
  }
});

console.log(arr);
