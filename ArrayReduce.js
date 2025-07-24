Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = initialValue ? callbackFn(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const getMax = (a, b) => Math.max(a, b);

console.log([1, 100].myReduce(getMax, 50));
