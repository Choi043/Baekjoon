const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let [n, ...arr] = fs.readFileSync(fileSync).toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  let [iter, str] = arr[i].split(" ");
  let newWord = "";

  for (let j = 0; j < str.length; j++) {
    newWord += str[j].repeat(iter);
  }

  console.log(newWord);
}
