// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("p1 is resolved");
//     resolve("p1 is resolved");
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("p2 is resolved");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
//   console.log(value);
//   console.log("we are done now");
// });
