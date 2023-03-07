// // let promise = new Promise(function (resolve, reject) {
// //   console.log("hello");
// //   resolve(55);
// // });

// // console.log(promise);

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise & i am resolved");
//     resolve(true);
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("I am promise & i am rejected");
//     reject(new Error("I am an error"));
//   }, 5000);
// });

// //To get the value
// p1.then((value) => {
//   console.log(value);
// });

// //To catch the error
// p2.catch((error) => {
//   console.log("some error occured in p2");
// });
