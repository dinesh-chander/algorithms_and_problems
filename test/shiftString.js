var rotateString = (a, s) => {
	if (a.length !== s.length) {
		return false;
	}

	if (a === s) {
		return true;
	}

	var check = function(sIndex, aIndex) {
		for (let k = 0; k < a.length; k++) {
			if (s[sIndex] !== a[aIndex]) {
				return false;
			}

			sIndex++;
			aIndex++;

			if (a.length <= sIndex) {
				sIndex = 0;
			}

			if (a.length <= aIndex) {
				aIndex = 0;
			}
		}

		return true;
	};

	let firstHalf = a.substring(0, Math.floor(a.length / 2));
	let secondHalf = a.substring(Math.floor(a.length / 2), a.length);

	let firstHalfIndex = s.indexOf(firstHalf);
	let secondHalfIndex = s.indexOf(secondHalf);

	if (
		check(firstHalfIndex, 0) ||
		check(secondHalfIndex, Math.floor(a.length / 2))
	) {
		return true;
	}

	return false;
};

console.log(rotateString('abcde', 'cdeab'));

console.log(rotateString('abcde', 'abced'));
console.log(rotateString('ab', 'ba'));
