// Assignment Code
let generateBtn = document.querySelector("#generate");

//Generate password function

function generatePassword() {

//Define Variables
// I used Let since this is New instead of Var

let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbArray =      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//Array
 
let resultArray = [];
let userArray = [];

uppercaseArray [1]
//-----------------------------------------------------------------
let numCharacter = prompt("How much number of Character you want between 8 and 128?");
let numbers    = confirm ("Would you like numbers in your password?");
let uppercases = confirm ("Would you like Uppercase characters in your password?");
let lowercases = confirm ("Would you like Lowercase characters in your password?");
let characters = confirm ("Would you like Special Characters in your password?");


//User Input 

if (numbers){
  resultArray = resultArray.concat(numbArray);
  console.log("numbers");
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
  console.log ("uppercases")

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
  console.log ("lowercases")

}

if (characters){
  resultArray = resultArray.concat(characterArray);
  console.log ("characters")
}

  console.log(resultArray)


for (let i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//# Worked with Peter Lillis on this code but I changed the css where I added background image,
//changed header/card background color and added footer. 

