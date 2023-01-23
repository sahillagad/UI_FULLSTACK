// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function arrangeAlpha(str) {
  var alpha = "abcdefghijklmnopqrstvwxyz";
  var result="";

  for (var i = 0; i < alpha.length; i++) {
    var char=alpha[i]

    for (var j = 0; j < str.length; j++) {


         if(char==str[j]){

            result=result+char;
         }

    }
  }

  console.log(result);

}
arrangeAlpha("webmaster");

