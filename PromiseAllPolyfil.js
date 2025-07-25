function MyPromiseAll(promiseArr) {
  let res = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    promiseArr.forEach((element, index) => {
      element
        .resolve()
        .then((value) => {
          res[index] = value;
          completed++;
          if (completed == promiseArr.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}








