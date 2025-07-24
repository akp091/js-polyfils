Function.prototype.myApply = function (context = {}, args) {
  if (typeof this != "function") {
    throw new Error(this + "is not callable");
  }
  context.fn = this;
  context.fn(...args);
};
