//datatype
/*
String
Number
Boolean
Array
Object
*/

const emplName = "Ram";
const address = "Mumbai";
console.log(emplName);
console.log(address);

// type check
console.log(typeof emplName);
console.log(typeof address);

// concatintion 

console.log("Employee Name    "+ emplName);
console.log("Employee Address "+ address);

console.log(`Employee Name is ${emplName} and Employee Address ${address}`)

// Number
var num=1;
console.log(`Variable Name num and value is ${num} and type is ${typeof num}` )

// Boolean
const Boolean=true
console.log(`Variable Name Boolean and value is ${Boolean} and type is ${typeof Boolean}`);



// Object

let obj={
      "brand" :"Apple",
      "color":"black",
      "price" : 50000 

}

console.log(obj)
console.table(obj)

console.log(`Brand : ${obj.brand}`)
console.log(`Brand : ${obj["brand"]}`)





let obj1={
    "brand" :"Apple",
    "color":"black",
    "price" : 50000 

}

console.log(obj1)
console.table(obj1)

console.log(`Brand : ${obj1.brand}`)
console.log(`Brand : ${obj1["brand"]}`)
obj1["Warranty"]="6 Month";
console.table(obj1)



var array=[1,2,3,4,5,6,7,8,9,10];
console.log(array)
console.log("array[1] : "+array[1])


let mobiles=[

    {
        "brand" :"Apple",
        "color":"black",
        "price" : 50000 
    
    },

    {
        "brand" :"lenovo",
        "color":"black",
        "price" : 21000 
    
    },
    {
        "brand" :"Redmi",
        "color":"black",
        "price" : 12000 
    
    }
]

console.log(mobiles[1].brand)
console.log(mobiles[0])
console.log(mobiles[1])
