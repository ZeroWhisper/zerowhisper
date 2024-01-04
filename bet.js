const odd1 = 1.3;
const odd2 = 6;

var totalTimes = 0;
var totalTimesStop = 10000;
var mxRange = 500;
var finish = false;

function prt(i, j) {
  console.group("DADOS");
  console.log("Valor Aposta 1", i);
  console.log("Valor Aposta 2", j);
  console.log("");
  console.log("PREMIO 1", i * odd1);
  console.log("PREMIO 2", j * odd2);
  console.groupEnd();
}

console.log("INICIO!");

for (let i = mxRange; i > 100; i--) {
  var result1 = odd1 * i;

  for (let j = 100; j < mxRange; j++) {
    totalTimes = totalTimes + 1;

    let result2 = odd2 * j;

    const trueWin = i + j <= result2 && i + j <= result1;

    if (trueWin) {
      if (result1 === result2) {
        prt(i, j);
        finish = true;
      }
      if (result1 < result2 && result1 > result2 - 10) {
        prt(i, j);
        finish = true;
      }
      if (result1 > result2 && result1 < result2 + 10) {
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
