/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let minimum = this.stack.length ? Math.min(x, this.stack[this.stack.length - 1][1]) : x;
  return this.stack.push([x, minimum]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp = this.stack.pop();
  return temp[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let temp = this.stack[this.stack.length - 1];
  return temp ? temp[0] : temp;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let temp = this.stack[this.stack.length - 1];
  return temp ? temp[1] : temp;
};

var minStack = new MinStack()
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());