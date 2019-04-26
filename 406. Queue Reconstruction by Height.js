/* https://leetcode.com/problems/queue-reconstruction-by-height/ */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */

var reconstructQueue = function(people) {
	people.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] < b[0] ? -1 : 1;
		} else {
			return a[1] < b[1] ? -1 : 1;
		}
	});

	let temp,
		i,
		j,
		count,
		k = 0;

	for (i = 0; i < people.length; i++) {
		temp = people[i];

		if (0 < temp[1]) {
			count = 0;

			for (j = 0; j < people.length; j++) {
				if (temp[0] <= people[j][0]) {
					count++;
				}

				if (temp[1] === count) {
					break;
				}
			}

			if (j !== people.length) {
				people.splice(i, 1);
				k = j + 1;

				while (k < people.length && people[k][0] < temp[0]) {
					if (
						people[k][1] < temp[1] ||
						(people[k][1] === temp[1] && people[k][0] < temp[0])
					) {
						k++;
					} else {
						break;
					}
				}

				people.splice(k, 0, temp);
			}
		}
	}

	return people;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));

// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
