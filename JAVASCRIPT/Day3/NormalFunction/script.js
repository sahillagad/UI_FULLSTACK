

  function great(s){
    
    var result=""
    for(var i=0;i<s.length;i++){

        result=result+s[i]+" " 
    }
   console.log(result)
  }
 
  great("Sahil")


  function print(array,startNumber,endNumber){

    if(startNumber>=0 && endNumber<array.length && startNumber<=endNumber){
    var result=""
    for(var i=startNumber;i<endNumber;i++){

        result=result+array[i]+" " 
    }
   console.log(result)
    }
    else{

        console.log("please provide Correct Index")
    }
  }

  print("SahilBhasakar",1,5)



function welcome(){

    return "Welcome To India";
}

var output= welcome();
console.log(output)




