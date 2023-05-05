// Assignment code here



function generatePassword() {

var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase Letters
var lowercaseLetters = "abcefghijklmnopqrstuvwxyz";  // Lowercase Letter
var numbers = "0123456789" // Numbers
var specialCharacters = "!@#$%^&*" // Special Characters
var finalpassword = [""] // placeholder var the end result Password user will see

var userChoiceHowMany = window.prompt("How many characters? Must be a Minimum of 8, and a Maximum of 128 characters."); // User confirms how many characters for password 

// restarts prompt if the chosen number isn't in the criteria 
if (userChoiceHowMany < 8 || userChoiceHowMany > 128){
    return generatePassword();
} 

var userChoiceNumbers = window.confirm("Would you like Numbers?"); // User confirms if they want Numbers in password 
var userChoiceSpecialCharacters = window.confirm("Would you like Special Characters?"); // User confirms if they want Special Characters in password 
var userChoiceLowerCase = window.confirm("Would you like Lowercase letters?"); // User confirms if they want Lower Case letters in password
var userChoiceUpperCase = window.confirm("Would you like Uppercase letters?"); // User confirms if they want Upper Case Letters in password

var chosenCharacters = ""; // Place hodler var for the confirmed characters for password
var actualpassword = []; // Place holder var for a random array of characters by created by "for loop" below

if ((userChoiceSpecialCharacters==true)) {
 chosenCharacters += specialCharacters;} // if User confirms they want Special Characters, this adds Special Characters to var place holder var "chosenCharacters"
if ((userChoiceNumbers==true)) {
 chosenCharacters += numbers;} // if User confirms they want Numbers, this adds Numbers to var place holder var "chosenCharacters"
if ((userChoiceLowerCase==true)) {
 chosenCharacters += lowercaseLetters;} // if User confirms they want Lower Case Letters, this adds Lower Case Letter to var "chosenCharacters"
if ((userChoiceUpperCase==true)) {
 chosenCharacters += capitalLetters;} // if User confirms they want Upper Case Letters, this adds Upper Case Letters to var "chosenCharacters"

// var "randomLetter" is a random character from the "chosenCharacters" placeholder var created from math random method
for (let i = 0; i < userChoiceHowMany; i++) {
  var randomLetter =
    chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]; // for loop repeats the random math method X amount of times (how many desired characters for password confirmed by user) and stores them into the "actuapassword" var as an array

  actualpassword.push(randomLetter);
  }
finalpassword = actualpassword.join(""); // adds the resulted "array" of "actualpassword" to var "finalpassword" as a string to eventually be shown on the page
return finalpassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);