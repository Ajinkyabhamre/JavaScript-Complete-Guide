let p1 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Value 1");
  }, 1000);
});
let p2 = new Promise((resolved, reject) => {
  setTimeout(() => {
    reject(new Error("error"));
  }, 2000);
});
let p3 = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("Value 3");
  }, 3000);
});

// let promiseAll = Promise.all([p1, p2, p3]);
let promiseAll = Promise.allSettled([p1, p2, p3]);
// let promiseAll = Promise.race([p1, p2, p3]);
// let promiseAll = Promise.any([p1, p2, p3]);
// let promiseAll = Promise.resolve(5);
// let promiseAll = Promise.reject(new Error("err"));

promiseAll.then((val) => {
  console.log(val);
});
