var nextClosestTime = function(time) {
	time = time
		.split(':')
		.join('')
		.split('');
	var digits = [...time];
	var max = ['2', '3', '5', '9'];

	digits.sort((a, b) => a.localeCompare(b));

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	digits = digits.filter(onlyUnique);

	var index = 3;
	let flag = true;

	while (flag) {
		let temp = digits.indexOf(time[index]);

		console.log(time[index].charCodeAt() < max[index].charCodeAt());

		if (
			time[index].charCodeAt() < max[index].charCodeAt() &&
			temp < digits.length - 1
		) {
			if (
				index === 3 &&
				time[2] === '5' &&
				digits[temp + 1].charCodeAt() <= max[index].charCodeAt()
			) {
				time[index] = digits[temp + 1];
				flag = false;
			} else {
				index--;
			}

			if (index === 2 || index === 0) {
				time[index] = digits[temp + 1];
				flag = false;
			}

			if (
				index === 1 &&
				time[0] === '2' &&
				digits[temp + 1].charCodeAt() <= max[index].charCodeAt()
			) {
				time[index] = digits[temp + 1];
				flag = false;
			} else {
				index--;
			}
		} else {
			if (index === 0) {
				time[0] = time[1] = time[2] = time[3] = digits[0];
				flag = false;
			} else if (0 < index) {
				index--;
			}
		}
	}

	return `${time[0]}${time[1]}:${time[2]}${time[3]}`;
};

// console.log(nextClosestTime('19:34'));
// console.log(nextClosestTime('23:59'));
// console.log(nextClosestTime('23:53'));
// console.log(nextClosestTime('12:01'));
console.log(nextClosestTime('13:55'));
