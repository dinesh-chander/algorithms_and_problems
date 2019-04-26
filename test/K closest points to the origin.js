/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function(points, K) {
	let distances = [];

	for (let i = 0; i < points.length; i++) {
		distances.push({
			dis: Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)),
			index: i
		});
	}

	distances.sort((a, b) => a.dis - b.dis);

	let ans = [];

	for (let i = 0; i < K; i++) {
		ans.push(points[distances[i].index]);
	}

	return ans;
};

console.log(kClosest([[1, 3], [-2, 2]], 1));
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));
