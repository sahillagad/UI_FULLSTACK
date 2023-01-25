

const result = (array) => {
    var D = [];
    var C = [];
    var B = [];
    var A = [];
    var E = [];
    for (var i = 0; i <array.length; i++) {
      if (array[i] >= 30 && array[i] <= 50) {
        D.push(array[i]);
      } else if (array[i] >= 51 && array[i] <= 60) {
        C.push(array[i]);
      } else if (array[i] >= 61 && array[i] <= 80) {
        B.push(array[i]);
      } else if (array[i] >= 81 && array[i]<= 100) {
        A.push(array[i]);
      }
      else if (array[i] <=29) {
          E.push(array[i]);
        }
    }
  
    console.log("A group : "+A.join(" "));
    console.log("B group : "+B.join(" "));
    console.log("C group : "+C.join(" "));
    console.log("D group : "+D.join(" "));
    console.log("E group : "+E.join(" "));
  
  };
  var array = [12, 34, 60, 35, 65, 85];
  result(array);
  
  
  