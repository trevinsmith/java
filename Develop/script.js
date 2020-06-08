// Assignment code here

//need: length generator, random letters, uppercase and lowercase,
//special characters, numbers. prompts for each option.
//randomly generate password based on inputs




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

function generatePassword () {

var questions = [ {
    questionname= "questionLength",
    questionquestion= "how long would you like your password to be?"},
  {
    questionname= "addUppercase",
    questionquestion= "Would you like to use uppercase letters?"
  },

  {
    questionname= "addLowercase",
    questionquestion="Would you like to use lowewercase letters?"
  },

  {
    questionname="addNumbers",
    questionquestion="Would you like to add numbers?"
  },
  {
    questionname="addSpecialCharacters",
    questionquestion="Would you like to use special characters?"
  }
]
//get length

function getLength() {

}

.onclick( getLength())

}