var mobile={

     brand:"Apple",
     color:"Silver",
     price:12500
}

console.log(mobile);
console.log(mobile.price);
console.log(mobile.color);
console.log(mobile.price);

console.log(mobile["brand"]);
console.log(mobile["color"]);
console.log(mobile["price"]);


mobile["Warranty"]="1Year";
console.log(mobile); 

const property="color"
var info=mobile[property];
console.log(info);

console.log("----------------------------------------------------------------")

// Change Object Data
console.log(mobile)
mobile.brand="Lenvaoe";
console.log(mobile.brand);
console.log(mobile);





