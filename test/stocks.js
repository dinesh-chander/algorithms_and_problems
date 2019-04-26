/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let max = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			max = Math.max(prices[j] - prices[i], max);
		}
	}

	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));
