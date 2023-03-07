//GET

// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((response) => {
// console.log(response.status);
// console.log(response.ok);
// console.log(response);

// return response.json();
// }).then((response) => {
// console.log(response);
// });

//POST
const createtodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) => {
  let p = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  let res = await p.json();
  return res;
};

const mainFunc = async () => {
  let todo = {
    title: "Ajinkya",
    body: "bhai",
    userId: "05",
  };
  let res = await createtodo(todo);
  console.log(res);
  console.log(await getTodo(5));
};

mainFunc();




//Cookies in Browser

// console.log(document.cookie);
// document.cookie = "name=Ajinkyabhamre05";
// document.cookie = "name2=ajju";
// document.cookie = "name2=ajju-bhamre";

// console.log(document.cookie);

// //encode URI component
// let key = prompt("enter your key..");
// let value = prompt("enter your value..");
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
// console.log(document.cookie);

//LocalStorage & related methods
//1.keys and values are stored as strings
//2. we can use 2 JSON methods to store objects in localstorage ->
// JSON.stringify(object) -> converts objects to JSON strings
// JSON.parse(string) -> converts strings to objects (must be valid JSON)

// let key = prompt("Enter the key you want to set...");
// let value = prompt("Enter the value you want to set...");

// localStorage.setItem(key, value);
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//   localStorage.removeItem(key);
// }

// if (key == 0) {
//   localStorage.clear();
// }

// console.log(localStorage.length);
// console.log(localStorage.key("localstorage first element =>", 0));

//sessionStorage & related methods

// sessionStorage.setItem("name", "Ajinkya");
// sessionStorage.getItem("name");
// sessionStorage.clear();
// sessionStorage.removeItem("name");

//Storage Event

  // window.onstorage = (e) => {
  //   alert("Changed");
  //   console.log(e);
  // };
