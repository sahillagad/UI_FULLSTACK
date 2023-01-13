//Mathmatic operator

const num1=20;
const num2=30;
console.log(`Sum: ${num1 + num2 }`);
console.log(`sub: ${num1 - num2 }`);
console.log(`mul: ${num1 * num2 }`);
console.log(`div: ${num1 / num2 }`)
console.log(`mode: ${num1 % num2 }`)


//shorthand math operator 
var price=100;
var qty=5;
var tax=10;
var total=0;
// total=total+(price+qty); 
total+=(price*qty);
console.log("Total : "+total)

// tax calculate
tax+=((total*18)/100)
console.log("tax : "+tax)

// increase qty 2time
qty*=2
console.log("qty : "+qty)





let availability=10

let result=""
if(availability>=10){
result="product Available";
}
else if(availability<10 && availability>=1){
    result="Product limited stock"
}
else{
    result="product is out of stock"
}

console.log(result);


// incr,decr operator

var num=6;
num=num+1;
console.log(num)
num++
console.log(num)
num+=1
console.log(num)




// ternary operator
let age=21;
// condition?true: false
let courseComplete=true
let projectfineshed=2

let output=(courseComplete && projectfineshed>=2)?"read for Job":"please make project";
console.log(output)




// euality operator ===
let a=10;
let b=20;
if(a===b){

    console.log("Both Are equal")
}
else{

    console.log("Both Are not equal")

}









































