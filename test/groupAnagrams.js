/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var dict = {};

  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
    dict[temp] = dict[temp] || [];
    dict[temp].push(i);
  }

  let ans = [];

  return Object.keys(dict).map(key => {
    return dict[key].map(index => strs[index]);
  });
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));