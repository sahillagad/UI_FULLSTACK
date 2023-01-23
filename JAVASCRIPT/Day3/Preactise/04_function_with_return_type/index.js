// function with return type




//Normal Function
function printPattern(num) {
  for (var i = 1; i <= num; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str = str + j + " ";
    }
    console.log(str);
  }
}
printPattern(6);










//Function Expression
var print2 = function (num) {
  for (var i = 1; i <= num; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str = str + j + " ";
    }
    console.log(str);
  }
};

print2(6);







// Array Function
var print3 = (num7) => {
  for (var i = 1; i <= num7; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str = str + j + " ";
    }
    console.log(str);
  }
};
print3(7);



