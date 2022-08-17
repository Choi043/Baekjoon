const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = fs.readFileSync(fileSync).toString().trim();

const croatiaAlpha = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

croatiaAlpha.map(e => (input = input.replace(e, "a")));

console.log(input.length);
