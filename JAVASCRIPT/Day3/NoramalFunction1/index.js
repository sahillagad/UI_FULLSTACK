function printIf(startNumber, endNumber) {
  let result = "";
  if (startNumber <= endNumber) {
    for (var i = startNumber; i <= endNumber; i++) {
         
           result+=i+" "

    }
  }
  else{
          result= "Start Number Must Be Less Than End Number";
  }
   return result;
}


var output= printIf(1,10);
console.log(output)


// =========================================================







