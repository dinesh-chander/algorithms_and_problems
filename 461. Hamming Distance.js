/* https://leetcode.com/problems/hamming-distance/ */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
    var ansBitString = (x ^ y).toString(2);
    let setBitCount = 0;
    for (let i = 0; i < ansBitString.length; i++) {
        if (ansBitString[i] === '1') {
            setBitCount++;
        }
    }

    return setBitCount;
};

console.log(hammingDistance(1, 4));