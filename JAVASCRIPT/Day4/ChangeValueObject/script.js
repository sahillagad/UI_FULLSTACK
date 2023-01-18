// Object 

const mobile={
  "id":"877654",
  "name":"s2",
  "brand":"Samsung",
   "color":"black", 
  "price":655,
}

console.log(mobile);

console.log("----------------------------------")


//change Object Value
mobile.price=450000
console.log(mobile);

mobile["color"]="Blue";
console.log(mobile);


console.log("----------------------------------")

//Add key value pair Object 
mobile.camera="50Mp";
console.log(mobile);

mobile["Ram"]="4GB";
console.log(mobile);


console.log("----------------------------------")

let product={
    id:1,
    name:"Lux",
    qty:2,
    price:20

}


let product1={
          
    ...product
     
    
}

console.log(product1)




let product2={
          
  ...product,
  qty:5,
  price:200
   
  
}

console.log(product2)



let product3={
          
  ...product,
  qty:5,
  price:200,
  add:"mumbai",
    
  
}

console.log(product3)