/**
 *     D
 *    OD
 *   OOD
 *  GOOD
 */

var pattern1 = (str) => {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
 
    for(var j=0;j<(i);j++){
      result=result+" "

    }

    result+=str.substring(i,str.length)+"\n"
  }

  console.log(result);
};

pattern1("GOOD");