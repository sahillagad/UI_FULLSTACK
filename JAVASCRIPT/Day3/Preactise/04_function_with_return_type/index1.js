// function with return type

var num1 = 123;
var num2 = 233;

// way1
function sum0(num1, num2) {
  var sum = num1 + num2;
  console.log(`SUM : ${sum}`);
}

sum0(num1,num2);




// Way 2
var sum = function (num1, num2) {
  var sum = num1 + num2;
  console.log(`SUM : ${sum}`);
};

sum(num1, num2);






// way3
var sum1 = (num1, num2) => {
  var sum = num1 + num2;
  console.log(`SUM : ${sum}`);
};

sum1(num1, num2);
