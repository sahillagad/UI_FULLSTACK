let great = function (s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    result = result + s[i] + " ";
  }
  console.log(result);
};

console.log(great("Sahil"));

let print = function (array, startNumber, endNumber) {
  if (
    startNumber >= 0 &&
    endNumber < array.length &&
    startNumber <= endNumber
  ) {
    var result = "";
    for (var i = startNumber; i < endNumber; i++) {
      result = result + array[i] + " ";
    }
    console.log(result);
  } else {
    console.log("please provide Correct Index");
  }
};

print("SahilBhasakar", 1, 5);



let welcome = function () {
  return "Welcome To India";
};

console.log(welcome());
