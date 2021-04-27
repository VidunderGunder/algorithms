// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  let sum = 0;
  let next: string;

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    switch (symbol) {
      case "I":
        next = s[i + 1];
        switch (next) {
          case "V":
            sum += 4;
            i++;
            break;
          case "X":
            sum += 9;
            i++;
            break;
          default:
            sum += 1;
        }
        break;
      case "V":
        sum += 5;
        break;
      case "X":
        next = s[i + 1];
        switch (next) {
          case "L":
            sum += 40;
            i++;
            break;
          case "C":
            sum += 90;
            i++;
            break;
          default:
            sum += 10;
        }
        break;
      case "L":
        sum += 50;
        break;
      case "C":
        next = s[i + 1];
        switch (next) {
          case "D":
            sum += 400;
            i++;
            break;
          case "M":
            sum += 900;
            i++;
            break;
          default:
            sum += 100;
        }
        break;
      case "D":
        sum += 500;
        break;
      case "M":
        sum += 1000;
        break;
    }
  }

  return sum;
}

console.assert(romanToInt("I") === 1, "I");
console.assert(romanToInt("II") === 2, "II");
console.assert(romanToInt("III") === 3, "III");
console.assert(romanToInt("IV") === 4, "IV");
console.assert(romanToInt("V") === 5, "V");
console.assert(romanToInt("VI") === 6, "VI");
console.assert(romanToInt("VII") === 7, "VII");
console.assert(romanToInt("VIII") === 8, "VIII");
console.assert(romanToInt("IX") === 9, "IX");
console.assert(romanToInt("X") === 10, "X");
console.assert(romanToInt("XI") === 11, "XI");
console.assert(romanToInt("M") === 1000, "M");
console.assert(romanToInt("MCMXCIV") === 1994, "MCMXCIV");
