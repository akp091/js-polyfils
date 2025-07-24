Array.prototype.sumOfCubes = function () {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    res += this[i] ** 3;
  }
  return res;
};




const res=[1,2,3].sumOfCubes();
console.log(res);