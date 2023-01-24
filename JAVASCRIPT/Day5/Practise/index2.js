var array = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"];

for (var i in array) {
  console.log(Number(i) + 1 + " " + array[i]);
}



var bag = "";
for (var k in array) {
  bag = bag + array[k] + " ";
}
console.log(bag);



// for Of Loop
for(let a of array){

    console.log(a)
 
}

var bag1=""
for(let b of array){
 
    bag1=bag1+b+" "
}

console.log(bag1);





var result="* ";
array.forEach((a)=>{
    
    result+=a+" * ";

})

console.log(result);
