/*
  Promise Function 
*/

/*
I want Make Coffee It Full Depandent Statement
1] Get Milk from Shop
2] Boil The Milk 
3] Add Sugar AND Coffee
*/

var getMilkFromShop = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve(" 1. Get Milk from Shop");
    } else {
      reject("Failed To Get Mailk From Shop");
    }
  }, 3000);
});

var boilMilk = new Promise((resolve, reject) => {
  setTimeout(() => {
    var isDone = true;
    if (isDone) {
      resolve("2. Boil The Milk ");
    } else {
      reject("Failed To Boil The Milk");
    }
  }, 1000);
});

var addSugar = new Promise((resolve, reject) => {
  setTimeout(() => {
    var isDone = true;
    if (isDone) {
      resolve("3. Add Sugar AND Coffee ");
    } else {
      reject("Failed To Add Sugar AND Coffee");
    }
  }, 2000);
});

var getCoffee = () => {
  getMilkFromShop
    .then((result) => {
      console.log("getMilkFromShop Promise Call " + result);

      boilMilk
        .then((output) => {
          console.log("boilMilk Promise Call " + output);

          addSugar
            .then((ans) => {
              console.log("addSugar : " + ans);
            })
            .catch((err2) => {
              console.log(err2);
            });
        })
        .catch((err1) => {
          console.log(err1);
        });
    })
    .catch((err) => {});
};
getCoffee();