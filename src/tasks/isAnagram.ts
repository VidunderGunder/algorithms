// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const ts = [...t].sort();
  const ss = [...s].sort();

  for (let i = 0; i < s.length; i++) {
    if (ss[i] !== ts[i]) return false;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "margana"));
console.log(isAnagram("abba", "abba"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("bb", "aa"));
console.log(isAnagram("bba", "aa"));
