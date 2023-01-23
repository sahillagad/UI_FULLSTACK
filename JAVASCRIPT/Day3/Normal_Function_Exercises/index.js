/**
 *  Write a JavaScript function that reverse a number. Go to the editor
 *  Example x = 32243;
 *  Expected Output : 34223
 */

function reverseNumber(number) {
  var str = ""+number;

  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  console.log(`Output : ${result}`);
}

var number = 32243;
reverseNumber(number);


// =====================================================================

