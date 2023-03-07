// function loadScript(src) {
//   return new Promise((resolved, reject) => {
//     var script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = function () {
//       resolved("script is loaded");
//     };
//     script.onerror = function () {
//       reject("Error loading the script");
//     };
//   });
// }

// let p = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
// );

// p.then((val) => {
//   console.log(val);
// }).catch((err) => {
//   console.log(err);
// });

// //Attaching multiple Handlers to a promise
// let p1 = new Promise((resolved, reject) => {
//   setTimeout(() => {
//     resolved(1);
//   }, 2000);
// });

// p1.then((val) => {
//   console.log("handler 1");
//   return new Promise((resolved, reject) => {
//     setTimeout(() => {
//       resolved(2);
//     }, 6000);
//   });
// }).then((val) => {
//   console.log("handler 1.2");
// });

// p1.then((val) => {
//   console.log("handler 2");
// });
