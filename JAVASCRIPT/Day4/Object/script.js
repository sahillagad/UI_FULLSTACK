// Object 

const mobile={
  "id":"877654",
  "name":"s2",
  "brand":"Samsung",
   "color":"black", 
  "price":655,
}

console.log(mobile);
//[] Notation
console.log(mobile["id"]);
console.log(`color : `+mobile["color"]);
console.log(`Brand : `+mobile["brand"]);


//Dot Notation
console.log(`Price : ${mobile.price}`);
console.log(`name : ${mobile.name}`);
console.log(`Brand : ${mobile.brand}`)

console.log("-----------------------------------------------")

for(var k in mobile){

 console.log(k+" "+mobile[k])

}


// access dynamic

const property="brand";
console.log("Brand "+mobile.property)
console.log("Brand "+mobile[property])



