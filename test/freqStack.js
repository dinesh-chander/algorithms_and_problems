var FreqStack = function () {
  this.maxFreq = 0;
  this.nodes = {};
  this.freq = {};
};


/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  this.freq[x] = this.freq[x] || 0;
  this.freq[x]++;

  this.maxFreq = Math.max(this.freq[x], this.maxFreq);

  this.nodes[this.freq[x]] = this.nodes[this.freq[x]] || [];
  this.nodes[this.freq[x]].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let poppedElement;

  while (!(this.nodes[this.maxFreq] && this.nodes[this.maxFreq].length) && 0 <= this.maxFreq) {
    this.maxFreq--;
  }

  if (0 <= this.maxFreq) {
    poppedElement = this.nodes[this.maxFreq].pop();
    this.freq[poppedElement]--;
    return poppedElement;
  }
};

var obj = new FreqStack();
// [5, 7, 5, 7, 4, 5].forEach((val) => obj.push(val));
// console.log(obj)

// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj);
// console.log(obj.pop());
// console.log(obj.pop());

// console.log(obj);

[1, 1, 1, 2].forEach((val) => obj.push(val));
console.log(obj.pop());
console.log(obj.pop());
[2, 2, 1].forEach((val) => obj.push(val));
console.log(obj);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());