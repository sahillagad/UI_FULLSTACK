function print(num) {
  var str = "";
  for (var i = 1; i < num; i++) {
    str = str + i + " ";
  }
  console.log(str);
}

var arrayFun = () => {
  var str = "";
  for (var i = 1; i < num; i++) {
    str = str + i + " ";
  }
  console.log(str);
};

// Return Function
function print(num) {
  var str = "";
  for (var i = 1; i <= num; i++) {
    str = str + i + " ";
  }
  return str;
}

var output = print(4);
console.log(output);

const calc = function (num1, num2) {
  var total = num1 - num2;
  return;
};

calc(num1, num2);
