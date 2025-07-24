Function.prototype.myBind = function (context, ...args) {
  if (typeof this != "function") {
    throw new Error("not able to bind");
  }

  context.fn = this;

  return (...newArgs) => {
    const res = context.fn(...args, ...newArgs);
    return res;
  };
};
