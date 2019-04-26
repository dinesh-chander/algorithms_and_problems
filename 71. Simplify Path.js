/* https://leetcode.com/problems/simplify-path/ */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	let dirs = path.split('/'),
		temp;

	for (let i = 0; i < dirs.length; i++) {
		temp = dirs[i];

		if (temp) {
			if (temp === '.') {
				dirs.splice(i--, 1);
			} else if (temp === '..') {
				temp = i;
				i -= i == 0 ? 1 : 2;
				dirs.splice(i + 1, temp == 0 ? 1 : 2);
			}
		} else {
			dirs.splice(i--, 1);
		}
	}

	return '/' + dirs.join('/');
};

console.log(simplifyPath('//a/b'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/a//b////c/d//././/..'));
console.log(simplifyPath('/a/../../b/../c//.//'));
