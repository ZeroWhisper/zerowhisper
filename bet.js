const odd1 = 2.45;
const odd2 = 2.75;

var totalTimes = 0;
var totalTimesStop = 10000;
var mxRange = 500;
var finish = false;
var betProximity = 1.5;

function prt(i, j) {
  console.group("DADOS");
  console.log("ODD 1", odd1);
  console.log("ODD 2", odd2);
  console.log("");
  console.log("Aposta 1", i);
  console.log("Aposta 2", j);
  console.log("Total Aposta", i + j);
  console.log("");
  console.log("PREMIO 1", i * odd1);
  console.log("PREMIO 2", j * odd2);
  console.groupEnd();
}

console.log("INICIO!");

for (let i = mxRange; i > 50; i--) {
  var result1 = odd1 * i;

  for (let j = 50; j < mxRange; j++) {
    totalTimes = totalTimes + 1;

    let result2 = odd2 * j;

    const trueWin = i + j <= result2 && i + j <= result1;

    if (trueWin) {
      if (result1 === result2) {
        prt(i, j);
        finish = true;
      }
      if (result1 < result2 && result1 > result2 - betProximity) {
        prt(i, j);
        finish = true;
      }
      if (result1 > result2 && result1 < result2 + betProximity) {
        prt(i, j);
        finish = true;
      }
    }

    if (finish || totalTimes > totalTimesStop) break;
  }

  if (finish || totalTimes > totalTimesStop) break;
}

console.log("FIM");

console.log("Total times", totalTimes);

if (totalTimes > totalTimesStop) {
  console.log("ODD's NÃO FUNCIONAM...");
}
