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

    
    if (choice == 0 && nm == true){
      var num = Math.floor(Math.random() * 10);
      console.log(num)
      password[x] = num; 
      
    } else if(choice == 1 && rdl == true){
      var newnum = Math.floor(Math.random() * randletter.length);
      var newltr =  randletter[newnum];
      console.log(newltr);
      password[x] = newltr;
     }else if(choice == 2 && spcl == true){
        var nwnum =  Math.floor(Math.random() * randspcl.length);
        var nwspcl = randspcl[nwnum];
        console.log(nwspcl);
        password[x] = nwspcl;
    } else if(choice == 3 && rdcl == true){
        var nwnum =  Math.floor(Math.random() * randcap.length);
        var nwcap = randcap[nwnum];
        console.log(nwcap);
        password[x] = nwcap;

    }
  }
  
  var running = false; 
  return password;
  
}
function change(val, boo){
  if (document.getElementById(val).checked){
    var boo = true;
    return boo;
  } else{
    boo = false;
    return boo;
  }
}
function changetest(val, boo){
  if (val == 'y'){
    var boo = true;
    return boo;
  } else{
    boo = false;
    return boo;
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var sbbtn =  document.querySelector("#sbmt");


// Write password to the #password input
function writePassword(lower,upper,numb,special,len) {
  // var len = document.getElementById("len").value;
  console.log(len)
  // var test = prompt("include lowercase letters? (y/n)");
  var rdl = false;
  var rdcl =false;
  var nm = false;
  var spcl = false;
  rdl = changetest(lower, rdl);
  // rdl = change("low", rdl);
  rdcl = changetest(upper, rdcl);
  nm = changetest(numb, nm);
  spcl = changetest(special, rdl)
  if(len < 8 || len > 128){
    alert("invalid number")
    }else{
  if (nm == false && rdl == false && rdcl == false && spcl == false) {
    alert("error: no parameters set.")
  }else{
    var password = generatePassword(len,rdl,rdcl,nm,spcl);
    var fpassword = password.join("");
     console.log(fpassword)
    console.log(typeof fpassword);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = fpassword;
  }
}

}
function show(){
  var len = prompt("enter legth between 8 and 128 charecters");
  var lower = prompt("include lowercase letters? (y/n)");
  var upper = prompt("include uppercase letters? (y/n)");
  var numb = prompt("include numbers? (y/n)");
  var special = prompt("include special charecters? (y/n)");
  writePassword(lower,upper,numb,special,len);
    // document.getElementById("shy").style.display = "flex";
}
// Add event listener to generate button
generateBtn.addEventListener("click", /*writePassword*/ show);
sbbtn.addEventListener("click", writePassword);
