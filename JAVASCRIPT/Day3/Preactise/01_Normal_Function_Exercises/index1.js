/*
 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
*/

function checkPalindrome(str) {
  var reverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  var flag = true;

  for (let j = 0; j < str.length; j++) {
    if (str[j] != reverseStr[j]) {
      flag = false;
       break;
    }
  }
 
  if(flag==true){
     console.log("The Given String Is palindrome");
  }
  else{
    console.log("The Given String Is Not Palindrome");

  }
} 

checkPalindrome("SaS");
checkPalindrome("Sahil");

