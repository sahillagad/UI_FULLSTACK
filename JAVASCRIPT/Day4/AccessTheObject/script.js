// Object 

const mobile={
  "id":"877654",
  "name":"s2",
  "brand":"Samsung",
   "color":"black", 
  "price":655,
  address:{
               city:"Mumbai",
               state:"MH",
               pincode:"765432" 
     
    
  }
}


/*
Object.keys()
Object.values()
Object.entries()

*/


console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));

console.log("-----------------------------------------------")


for(let key of Object.keys(mobile)){

  console.log(key)

}


console.log("-----------------------------------------------")


for(let value of Object.values(mobile)){

  console.log(value)

}


console.log("-----------------------------------------------")



for(let [key,value] of Object.entries(mobile)){

  console.log("Key : "+key+" "+"Value :  "+ value);

}


console.log(mobile)

const jsonMobile=JSON.stringify(mobile)
console.log(jsonMobile);


const mobileObj=JSON.parse(jsonMobile);
console.log(mobileObj)