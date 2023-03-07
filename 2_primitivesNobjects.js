//nn bb ss u
let a = null;
let b = 12;
let c = BigInt("567") + BigInt("3");
let d = true;
let e = "Ajinkya";
let f = Symbol("I am a Symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

//objects - Key-Value Pairs
const item = {
  "A": 123,
  "B": "Ajinkya",
  "C": true,
  "D": undefined,
};
console.log(item["B"]);

//practice
console.log("Practice -->")

//1. concatination
let name = "Ajinkya";
let n = 05;
console.log(name+n);
console.log(typeof (a+b))

//2. a1 is pointing to an object stored in memory
const item2 = {
    name: "Ajinkya",
    Rollnum: "A1205",
    isGreat : true,
}
item2['status'] = "Single"
item2.school = "NMIMS"
console.log(item2)

//3.
const dict = {
    peter : "Spider-Man",
    bruce : "BatMan",
    clark : "SuperMan",
}
console.log(dict['peter'])
console.log(dict.bruce)