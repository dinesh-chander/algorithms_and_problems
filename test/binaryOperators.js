let addOperators = (s, target) => {
  let ans = [];

  let compute = (index, str) => {
    if (index === s.length) {
      if (sum === target) {
        ans.push(str);
      }

      return;
    }

    let newIndex = index + 1;

    compute(newIndex, str + '+' + s[index]);
    compute(newIndex, str + '-' + s[index]);
    compute(newIndex, str + '*' + s[index]);
  };

  compute(1, -(+s[0]), '-' + s[0]);
  compute(1, +s[0], s[0]);

  return ans;
};

// console.log(addOperators('123', 6));
console.log(addOperators('232', 8));
// console.log(addOperators('105', 5));
// console.log(addOperators('00', 0));
// console.log(addOperators('3456237490', 9191));