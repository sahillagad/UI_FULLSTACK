var technologies = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"];
console.log(technologies);
console.log(technologies[0]);
console.log(technologies[1]);
console.log(technologies[2]);
console.log(technologies[3]);

// Normal FOR-LOOP

for (var i = 0; i < technologies.length; i++) {
  console.log(technologies[i]);
}

var bag = "";
for (var j = 0; j < technologies.length; j++) {
  bag = bag + technologies[j] + " ";
}

console.log(bag);

for (var k = 0; k < technologies.length; k++) {
  var bag = "";
  if (k % 2 == 1) {
    bag = bag + "............" + technologies[k];
  } else {
    bag = bag + technologies[k] + "............";
  }
  console.log(bag);
}
