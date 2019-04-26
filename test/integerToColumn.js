/**
 * @param {number} n
 * @return {string}
 */

var convertToTitle = function (n) {
  let temp = 26,
    ans = '',
    i = 0;

  while (temp < n) {
    temp += Math.pow(26, ++i) * 26;
  }

  // while (n) {
  //   if (i) {
  //     temp = Math.pow(26, i);
  //     let temp2 = Math.floor(n / temp);
  //     n -= (temp + temp2);

  //     if (26 < n) {
  //       ans += String.fromCharCode(64 + temp2);
  //     } else {
  //       ans += String.fromCharCode(64 + 1);
  //     }

  //   } else {
  //     ans += String.fromCharCode(64 + n);
  //     n = 0;
  //   }

  //   i--;
  // }

  let j = 0;

  ans = [];

  while (j <= i) {
    let k = 1;
    temp = Math.pow(26, j);

    for (; k < 27; k++) {
      if (n - temp * k < 27) {
        console.log(n - temp * j);
        break;
      }
    }

    if (k === 27) {
      k--;
    }


    ans.push(String.fromCharCode(64 + k));

    j++;
  }

  return ans;
};

console.log(convertToTitle(703));
// console.log(convertToTitle(701));
// console.log(convertToTitle(27));
// console.log(convertToTitle(52));


// console.log(Math.pow(26, 1) * 26 + Math.pow(26, 0) * 25);

// 703
// console.log(Math.pow(26, 2) * 1 + Math.pow(26, 1) * 1 + Math.pow(26, 0) * 1);