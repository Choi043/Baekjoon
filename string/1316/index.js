const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let [n, ...arr] = fs.readFileSync(fileSync).toString().trim().split("\n");
let count = 0;

for (let i = 0; i < n; i++) {
  let word = arr[i];
  let alpha = Array.from({ length: 26 }).fill(0);
  for (let j = 0; j < word.length - 1; j++) {
    let current = word[j];
    let next = word[j + 1];
    let index = current.charCodeAt(0) - 97;

    if (current === next) {
      continue;
    } else {
      if (alpha[next.charCodeAt(0) - 97]) {
        count++;
        break;
      }
    }
    alpha[index] += 1;
  }
}

console.log(n - count);
