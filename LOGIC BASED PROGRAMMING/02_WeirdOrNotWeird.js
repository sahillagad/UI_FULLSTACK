/*Given an integer, , perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird
*/

const main = (array) => {
  for (let elem of array) {
    if (elem % 2 == 1) {
      console.log(elem + " Weird");
    } else {
      if (elem >= 2 && elem <= 5) {
        console.log(elem + " Not weird");
      } else if (elem >= 6 && elem <= 20) {
        console.log(elem + " weird");
      } else if (elem > 20) {
        console.log(elem + " Not weird");
      }
    }
  }
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
main(array);
