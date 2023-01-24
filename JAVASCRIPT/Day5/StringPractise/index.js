var message = "GOoD MorNing";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.split(""));
console.log(message.split("").reverse());

var str = message.toUpperCase().split("").reverse().join("");

console.log(str);

var message1 = "good night";

console.log(message1.length);

var reverseMessage = "";
for (var i = message1.length - 1; i >= 0; i--) {
  reverseMessage = reverseMessage + message1[i];
}

console.log(reverseMessage);



