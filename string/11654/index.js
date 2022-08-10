const fs = require("fs");

const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim();

let code = input.charCodeAt(0);

console.log(code);
