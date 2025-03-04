/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// function capitalise(str) {
//   return str.charAt(0).toUpperCase() + str.substring(1);
// }

// function capitalise(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// let capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function capitalise(str){
  str = str.split("");
  for(let each of str){
    let upperCase = each.slice(0, 1).toUpperCase();
    let theRest = str.slice(1).join("");
    return upperCase.concat(theRest);
}
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
