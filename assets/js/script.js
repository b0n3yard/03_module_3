// Assignment code here
function generatePassword(len,rdl,rdcl,nm,spcl){
  var randletter = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
  var randcap =new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  var randspcl = new Array('#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~','+', '=');
  var password = new Array();
  
  for (let x= 0; x < len; x++ ){
    var running = true; 
    var choice = Math.floor(Math.random() * 4);
    
    while (running == true){
      
      if (choice == 0 && nm == false){
        choice = choice + 1;
        
      } else if (choice == 1 && rdl == false){
        choice = choice + 1;
        
        
      } else if (choice == 2 && spcl == false){
        choice = choice + 1;
        
      } else if (choice == 3 && rdcl == false){
        choice = choice + 1;
        
      } else if(choice == 4){
        choice = 0;
      } else{
        running = false;
        
      }
      
    }

    
    if (choice == 0){
      var num = Math.floor(Math.random() * 10);
      password[x] = num; 
    } else if(choice == 1){
      var newnum = Math.floor(Math.random() * randletter.length);
      var newltr =  randletter[newnum];
      password[x] = newltr;
     }else if(choice == 2){
        var nwnum =  Math.floor(Math.random() * randspcl.length);
        var nwspcl = randspcl[nwnum];
        password[x] = nwspcl;
    } else if(choice == 3){
        var nwnum =  Math.floor(Math.random() * randcap.length);
        var nwcap = randcap[nwnum];
        password[x] = nwcap;

    }
  }
  
  var running = false; 
  return password;
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(len) {
  console.log(len)
  var rdl = confirm("include lowercase letters?");
  var rdcl =confirm("include uppercase letters?");;
  var nm = confirm("include numbers?");
  var spcl = confirm("include special charecters?");
  if(len < 8 || len > 128 || isNaN(len)){
    alert("invalid number")
    }else{
  if (nm == false && rdl == false && rdcl == false && spcl == false) {
    alert("error: no parameters set.")
  }else{
    var password = generatePassword(len,rdl,rdcl,nm,spcl);
    var fpassword = password.join("");
    var passwordText = document.querySelector("#password");
    
    passwordText.value = fpassword;
  }
}

}
function show(){
  
   var len = prompt( "enter legth between 8 and 128 charecters") || 9;
  writePassword(len);
}
// Add event listener to generate button
generateBtn.addEventListener("click", show);
