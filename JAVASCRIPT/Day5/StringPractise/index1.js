/*
 * GOOD
 * GOO
 * GO
 * G
 */

var pattern1 = (str) => {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.substring(0, str.length - i) + "\n";
  }
  console.log(result);
};

pattern1("GOOD");

var pattern3 = (str) => {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str.substring(0, str.length - i) + "\n";
  }
  console.log(result);
};

pattern3("GOOD");

var pattern2 = (str) => {
  var result = "";
  for (var i = 0; i <= str.length; i++) {
    result += str.substring(0, i) + "\n";
  }
  console.log(result);
};

pattern2("GOOD");
