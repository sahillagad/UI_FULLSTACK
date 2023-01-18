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

console.log(mobile);
console.log(mobile.address);
console.log(mobile.address.city);
console.log(mobile.address.state);
console.log(mobile.address.pincode);


let {city,state}=mobile.address;
console.log(city)
console.log(state)


