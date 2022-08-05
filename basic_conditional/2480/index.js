const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const list = fs.readFileSync(fileSync).toString().trim().split(" ").map(Number);

const [dice1, dice2, dice3] = list;

let prizeMoney;

if (dice1 === dice2 && dice2 === dice3) {
  prizeMoney = 10000 + dice1 * 1000;
} else if (dice1 === dice2 || dice1 === dice3) {
  prizeMoney = 1000 + dice1 * 100;
} else if (dice2 === dice3) {
  prizeMoney = 1000 + dice2 * 100;
} else {
  prizeMoney = Math.max(...list) * 100;
}

console.log(prizeMoney);
