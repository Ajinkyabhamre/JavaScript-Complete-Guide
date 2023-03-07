//Synchronous programming
// let name = prompt("Enter your name...")
// let age = prompt("Enter your age...")
// let color = prompt("Enter your color...")
// console.log(name + "'s age is "+ age + " and fav color is "+ color)

//Asynchronous programming
// console.log("start")
// setTimeout(()=>{
//     console.log("hello world !")
// }, 3000)
// console.log("end")

//Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script is loaded with src: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("src got some error !"));
  };
  document.body.appendChild(script);
}

function linkName(error, srcLink) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Link name is " + srcLink);
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  linkName
);

//Pyramid of doom

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Script is loaded with src: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("src got some error !"));
//   };
//   document.body.appendChild(script);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",

//   function linkName(error, srcLink) {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     // alert("Link name is " + srcLink);
//     loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
//       function linkName(error, srcLink) {
//         if (error) {
//           console.log(error);
//           return;
//         }
//         // alert("Link name is " + srcLink);
//         loadScript(
//           "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",

//           function linkName(error, srcLink) {
//             if (error) {
//               console.log(error);
//               return;
//             }
//             // alert("Link name is " + srcLink);
//             loadScript(
//               "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",

//               function linkName(error, srcLink) {
//                 if (error) {
//                   console.log(error);
//                   return;
//                 }
//                 // alert("Link name is " + srcLink);
//                 loadScript(
//                   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",

//                   function linkName(error, srcLink) {
//                     if (error) {
//                       console.log(error);
//                       return;
//                     }
//                     // alert("Link name is " + srcLink);

//                   }
//                 );
//               }
//             );
//           }
//         );
//       }
//     );
//   }
// );
