// setTimeout(() => {
//   console.log("Hacking is in initial process...");
// }, 1000);

// try {
//   //code inside try should be synchronous, otherwise it will not work !!!
//   setTimeout(() => {
//     try {
//       console.log(bogusFunc);
//     } catch (error) {
//       console.log("this function is not declred !");
//     }
//   }, 100);
// } catch (error) {
//   console.log("this function is not declred !");
// }

// setTimeout(() => {
//   console.log("fetching data of the user...");
// }, 2000);
// setTimeout(() => {
//   console.log("All data downloaded...");
// }, 3000);
// setTimeout(() => {
//   console.log("data has pushed to the servers...");
// }, 4000);

//The Error Object & Custom Errors & finally

// const func = () => {
//   try {
//     let age = prompt("Enter your age...");
//     age = Number.parseInt(age);
//     if (age > 150) {
//       throw new ReferenceError("this is not true !!!");
//     }
//       return;
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(p);
//   } finally {
//     console.log("This is finally block -> script is still running !!!");
//     //close the file
//     //exit the loop
//     //write in log files
//   }
// };

// func();
// console.log("END");
