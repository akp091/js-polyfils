Array.prototype.myReduce = function (cb) {
  if (typeof cb != "function") {
    throw new Error("callback is not a function");
  }
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      answer.push(this[i]);
    }
  }

  return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr.myReduce((num) => num % 3 != 0));
