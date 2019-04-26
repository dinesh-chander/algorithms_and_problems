/* https://leetcode.com/problems/decode-string/ */

/**
 * @param {string} s
 * @return {string}
 */

// var decodeString = function(str) {
// 	let i = 0,
// 		ch = str[0];

// 	let parse = () => {
// 		let repeatCount = '';
// 		let currentPattern = '';

// 		while (ch !== ']' && i < str.length) {
// 			if (('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z')) {
// 				currentPattern += ch;
// 			} else if ('0' <= ch && ch <= '9') {
// 				do {
// 					repeatCount += ch;
// 					ch = str[++i];
// 				} while ('0' <= ch && ch <= '9');

// 				repeatCount = parseInt(repeatCount);

// 				if (ch === '[') {
// 					var temp2 = parse();
// 					currentPattern += temp2.repeat(repeatCount);
// 				}

// 				repeatCount = '';
// 			}
// 			ch = str[++i];
// 		}

// 		return currentPattern;
// 	};

// 	return parse();
// };

var decodeString = function(str) {};

console.log(decodeString('3[a]2[bc]') === 'aaabcbc');
console.log(decodeString('3[a2[c]]') === 'accaccacc');
console.log(decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef');
console.log(decodeString('3[a]2[b4[F]c]') === 'aaabFFFFcbFFFFc');
