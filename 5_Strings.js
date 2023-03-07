let friend = "Sahil"
console.log(friend.length)
console.log(friend[0])

//string can also be declared in ==> ' '
let toxicfriend = 'Om'
console.log(toxicfriend) 

//Template Literals
let boy1 = 'Om'
let boy2 = 'Sahil'
let boy3 = 'Ajinkya'

let sentence = `${boy1} and ${boy2} always bitch about ${boy3}`
console.log(sentence)

//Escape Sequence Characters
let myfriends = 'only-2-friend\'s still toxic'
console.log(myfriends)
console.log(myfriends.length)

//Methods in String
let myName = "Ajinkya-Bhamre"
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.slice(3,6))
console.log(myName.slice(3))
console.log(myName.replace("Ajinkya", "Ajju"))
console.log(myName.concat(" is a true friend of ", boy1, " & ", boy2))

let spacesName = "        ajju          ";
console.log(spacesName.trim())


//Q. includes, startswith, endswith
const phrase = 'The quick brown fox jumps over the lazy dog'
const word = 'fox';
console.log(`The word "${word}" ${phrase.includes(word) ? 'is' : 'is not'} in the sentence`)

//Q. 
let str = "Please give Rs 1000"
let amt = Number.parseInt(str.slice("please give Rs ".length))
console.log(amt)

//Q
let lady = "deepika"
console.log(lady.replace("e", "i")) // a new string is created, since strings are immutable we cannot change the existing string