const findOddEven = (array) => {
  var countOdd = 0;
  var countEven = 0;
  var odd = [];
  var even = [];

  for (let elem of array) {
    if (elem % 2 == 0) {
        
        even.push(elem);
        countEven++;

    } else {
        odd.push(elem);
        countOdd++
    }
  }

  console.log( `Total Number Of Odd Number ${countOdd} and Odd Element Is ${odd}`);
  console.log( `Total Number Of Odd Number ${countEven} and Odd Element Is ${even}`);

};


let array=[1,2,3,4,5,6,7,8,9,10];
findOddEven(array)