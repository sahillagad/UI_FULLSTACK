/*

3. Write a JavaScript function that generates all combinations of a string. Go to the editor
Example string : 'dog'
Expected Output : d,do,dog,o,og,g

*/

function combinations(str) {
  for (var i = 0; i < str.length; i++) {
    var str1 = "";
    for (var j = i; j < str.length; j++) {
      str1 = str1 + str[j]+" ";
      console.log(str1);
    }

   
  }
}



combinations("dog")
