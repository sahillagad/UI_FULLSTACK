let message = "Good MorNINg";

console.log(message.toLowerCase);
console.log(message.toUpperCase);

console.log(message.split("").reverse().join(""));
console.log(message.length);
console.log(message.substring(0, 4));
console.log(message.substring(5));

var str = "Good";

let arr = [];
for (var i = str.length; i > 0; i--) {
  var sub = str.substring(0, i);

  arr.push(sub);
}

console.log(arr);

var arr1 = [];
for (let j = 1; j <= str.length; j++) {
  var sub = str.substring(0, j);

  arr1.push(sub);
}

console.log(arr1);

var arr2 = [];
for (let j = 0; j < str.length; j++) {
  var sub = str.substring(j, str.length);
  arr2.push(sub);
}

console.log(arr2);


for (var i = 0; i < str.length; i++) {
  var index = i;
  var str1 = "";
  for (var j = 0; j < str.length; j++) {
    if (j >= index) {
      str1 = str1 + str[j];
    }
    else{
      str1 = str1 +" ";
    }
  }
  console.log(str1)
}


