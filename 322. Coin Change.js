/* https://leetcode.com/problems/coin-change/ */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	let dict = { 0: 0 };
	coins.sort((a, b) => a - b);

	let compute = amt => {
		if (amt === 0) {
			return 0;
		}

		if (dict[amt] !== undefined) {
			return dict[amt];
		}

		let a = Infinity;

		for (let i = 0; i < coins.length && coins[i] <= amt; i++) {
			a = Math.min(compute(amt - coins[i]), a);
		}

		dict[amt] = a == Infinity ? Infinity : 1 + a;
		return dict[amt];
	};

	compute(amount);
	return dict[amount] === Infinity ? -1 : dict[amount];
};

console.log(coinChange([3], 4));
console.log(coinChange([2], 0));
console.log(coinChange([2], 3));
console.log(coinChange([1], 3));
console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([2, 1, 5], 11));
