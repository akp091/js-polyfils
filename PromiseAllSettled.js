function MyPromiseAllSettled(promises) {
  let res = [];
  completed = 0;
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new Error(promises + "is not an array"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          const obj = { value: result, status: "fulfilled" };
          res[index] = obj;
          completed++;
        })
        .catch((err) => {
          const obj = { reason: err, status: "rejected" };
          res[index] = obj;
          completed++;
        });
    });

    if (completed == promises.length) {
      resolve(res);
    }
  });
}