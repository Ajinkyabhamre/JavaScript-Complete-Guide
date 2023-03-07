const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("script is loaded");
    };
    script.onerror = () => {
      reject("script is not loaded");
    };
  });
};

//prob1
// let p = loadScript(
// "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
// );
// p.then((result) => {
// console.log(result);
// }).catch((err) => {
// console.log(err);
// });

//prob2

// const main1 = async () => {
//   let p = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//   );

//   console.log(p);
// };

// main1();

//prob3
// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("this is an error"));
//     }, 3000);
//   });
// };

// const main2 = async () => {
//   try {
//     let res = await p1();
//     console.log(res);
//   } catch (error) {
//     console.log("This error is handled");
//     console.log("this is in catch block");
//   }
// };

// main2();

//prob4
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const main3 = async () => {
  //   console.time();
  //   let a1 = await p1();
  //   let a2 = await p2();
  //   let a3 = await p3();
  //   console.log(a1, a2, a3);
  //   console.timeEnd();

  console.time("run");
  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let a1a2a3 = await Promise.all([a1, a2, a3]);
  console.log(a1a2a3);
  console.timeEnd("run");
};

main3();
