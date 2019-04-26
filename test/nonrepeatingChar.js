var firstUniqChar = function (s) {
  if (!s) {
    return -1;
  }

  let dict = {};
  let ans = s.length;

  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = dict[s[i]] || {
      count: 0,
      index: i
    };
    dict[s[i]].count++;
  }

  let keys = Object.keys(dict);

  for (let i = 0; i < keys.length; i++) {
    if (dict[keys[i]].count === 1) {
      ans = Math.min(dict[keys[i]].index, ans);
    }
  }

  return ans === s.length ? -1 : ans;
};

console.log(firstUniqChar('cc'));