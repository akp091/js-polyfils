function once(callback, ...args) {
  return (...newArgs) => {
    let res;
    if (callback) {
      res = callback(...args, ...newArgs);
      callback = null;
    }
    return res;
  };
}

const sayHello = (a, b) => {
  console.log("Hello", a, b);
};

const callOnce = once(sayHello);
callOnce(1, 2);
callOnce(2, 2);
callOnce(3, 2);
