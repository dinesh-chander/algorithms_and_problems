/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

var findReplaceString = function (S, indexes, sources, targets) {
  let ans = [];
  let lastIndex = 0;

  let data = indexes.map((key, index) => ({
    index: key,
    source: sources[index],
    target: targets[index]
  })).sort((a, b) => a.index - b.index);


  for (let i = 0; i < data.length; i++) {
    let d = data[i];

    let foundAt = S.indexOf(d.source, d.index);

    if (lastIndex !== undefined) {
      while (lastIndex < d.index) {
        ans.push(S[lastIndex]);
        lastIndex++;
      }
    }

    if (d.index === foundAt) {
      ans.push(d.target);
      lastIndex = d.index + d.source.length;
    }
  }


  while (lastIndex < S.length) {
    ans.push(S[lastIndex]);
    lastIndex++;
  }

  return ans.join('');
};

// let S = "abcd",
//   indexes = [0, 2],
//   sources = ["a", "cd"],
//   targets = ["eee", "ffff"];

// let S = "abcd",
//   indexes = [0, 2],
//   sources = ["ab", "ec"],
//   targets = ["eee", "ffff"];

let S = "vmokgggqzp",
  indexes = [3, 5, 1],
  sources = ["kg", "ggq", "mo"],
  targets = ["s", "so", "bfr"];

console.log(findReplaceString(S, indexes, sources, targets));