// https://leetcode.com/problems/excel-sheet-column-number/

function titleToNumber(columnTitle: string): number {
  const num = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // TODO
  }

  return num;
}

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("B")); // 2
console.log(titleToNumber("Z")); // 26
console.log(titleToNumber("AA")); // 27
console.log(titleToNumber("AB")); // 28

console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
