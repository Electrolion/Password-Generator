// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "01234567890123";
  var symbols = "!@#$%^&*_-+=";
 
 password='';
 finalPassword='';
  var charPrompt = window.prompt('How many characters?');

   if (charPrompt >= 8 && charPrompt <= 123) {
      numberPrompt = window.confirm("Would you like to add numbers?");
      specialPrompt = window.confirm("Would you like to add special characters?");
      lowerPrompt = window.confirm("Would you like lowercase letters?");
      upperPrompt = window.confirm("Would you like uppercase letters?")
    }
    else {
      window.alert("You need to pick between 8 and 123 characters!");
      generatePassword();
    }
    password='';
    if (numberPrompt===true) {
      password += numbers
    }

    if (specialPrompt===true) {
      password += symbols
    }

    if (lowerPrompt===true) {
      password += lower
    }

    if (upperPrompt===true) {
      password += upper
    }

    var length =(charPrompt);
    for(var i = 0; i < length; i++){
      var random = Math.floor(Math.random() * password.length);
      finalPassword += password[random];
    }
    return finalPassword;


};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
