/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let ans = 0;

	const dict = {
		I: 1,
		II: 2,
		III: 3,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	for (let i = 0; i < s.length; i++) {
		let k = i;
		let j = i + 1;
		let temp = s[i];

		while (dict[s[k]] <= dict[s[j]]) {
			temp += s[j];
			k = j;
			j++;
		}

		i = j - 1;

		console.log(temp);

		if (dict[temp]) {
			k = dict[temp];
		} else {
			k = dict[temp[0]];

			for (j = 1; j < temp.length; j++) {
				if (k < dict[temp[j]]) {
					k = dict[temp[j]] - k;
				} else {
					k += dict[temp[j]];
				}
			}
		}

		ans += k;
	}

	return ans;
};

console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('DCXXI'));
