/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = s.split('');
  t = t.split('');

  return s.sort((a, b) => a.localeCompare(b)).join('') === t.sort((a, b) => a.localeCompare(b)).join('');
};


console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));