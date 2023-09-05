// Assignment code here
function generatePassword(){
  var randletter = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  var password = new Array();
  for (let x= 0; x < 7; x++ ){
    var choice = Math.floor(Math.random() * 2);
    console.log(choice)
    if (choice == 0){
      var num = Math.floor(Math.random() * 10);
      console.log(num)
      password[x] = num; 
      
    } else if(choice == 1){
      var newnum = Math.floor(Math.random() * 53);
      var newltr =  randletter[newnum];
      console.log(newltr)
      password[x] = newltr;
    }
  }
  console.log(password)
  return password;
  
}

// console.log("hello");

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
