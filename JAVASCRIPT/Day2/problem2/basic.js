/*

statement 
1. if-else
2. switch
3. for loop
4. while 
5. do while

*/


const currentTime=7;
let message="";
if(currentTime>0 && currentTime<=12){
   message="Good Morning"; 
}
else if(currentTime>12 && currentTime<=18){
   message="Good Afternoon";   

}
else if(currentTime>18 && currentTime<=24){
  message="Good Evening"

}

console.log(message)



















/*

let theArray=[10,20,30,40,50,60,70,80,90,100];

for (const element of theArray) {
 
    console.log(element)
    
}
console.log("------------------------------------")
//forEach  not async-friendly
theArray.forEach(element => {

    console.log(element)

});

console.log("------------------------------------")
//old-fashioned for loop
for (let index = 0; index < theArray.length; ++index) {
    const element = theArray[index];
    console.log(element)
}

console.log("------------------------------------")
//for-in
for (const propertyName in theArray) {
 
        const element = theArray[propertyName];
        console.log(element)
        
  
}
*/