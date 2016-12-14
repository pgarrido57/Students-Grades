var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;

function grades() {
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] <= 60) {
      F++
    } else if (scores[i] <= 70 && scores[i] <= 61) {
      D++
    } else if (scores[i] <= 80 && scores[i] <= 71) {
      C++
    } else if (scores[i] <= 90 && scores[i] <= 81) {
      B++
    } else if (scores[i] <= 100 && scores[i] <= 91) {
      A++
    }
  }
}
grades()
console.log(scores);

scores.sort()
console.log(scores);

console.log(scores[0]);

console.log(scores[11])
