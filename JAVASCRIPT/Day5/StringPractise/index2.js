// **
//  * GOOD
//  *  OOD
//  *   OD
//  *    D
//  */

var pattern1 = (str) => {
  var result = "";
  for (var i = 0; i < str.length; i++) {

  for(var j=0;j<=i;j++){

    result+=" "
  } 
    

  result+=str.substring(i,str.length)+"\n"
       
  }
  console.log(result)   
};

pattern1("GOOD")