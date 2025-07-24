const STATE = {
  FULFILLED: "fulfilled",
  PENDING: "pending",
  REJECTED: "rejected",
};

class MyPromise {
  onSuccess = null;
  onFail = null;
  status = STATE.PENDING;
  value = undefined;
  isCalled = false;

  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  then = (cbT) => {
    this.onSuccess = cbT;
    if ((this.status = FULFILLED && !this.isCalled)) {
      this.isCalled = true;
      this.onSuccess(value);
    }
    return this;
  };

  catch = (cbF) => {
    this.onFail = cbF;
    if ((this.status = REJECTED && !this.isCalled)) {
      this.isCalled = true;
      this.onFail(value);
    }
    return this;
  };

  resolve = (value) => {
    this.status = STATE.FULFILLED;
    this.value = value;
    if (typeof this.onSuccess == "function") {
      this.onSuccess(value);
    }
  };

  reject = (value) => {
    this.status = STATE.REJECTED;
    this.value = value;
    if (typeof this.onFail == "function") {
      this.onFail(value);
    }
  };
}

const p = new MyPromise((res, rej) => {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      res(random);
    } else {
      rej("invalid number");
    }
  }, 1000);
});

p.then((value) => {
  console.log(value);
}).catch((er) => {
  console.log(err);
});
