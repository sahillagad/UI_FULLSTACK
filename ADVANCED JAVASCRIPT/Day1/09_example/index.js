/*
  async-await Function 
*/

/*
I want Make Coffee It Full Depandent Statement
1] Get Milk from Shop
2] Boil The Milk 
3] Add Sugar AND Coffee
*/

var getMilkFromShop = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var isDone = true;
      if (isDone) {
        resolve("1. Get Milk from Shop");
      } else {
        reject("Milk IS Not Get");
      }
    }, 3000);
  });
};

var boilMilk = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var isDone = true;
      if (isDone) {
        resolve("2.Milk Boiling");
      } else {
        reject("Milk IS Not Boiling");
      }
    }, 1000);
  });
};

var addSugar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var isDone = true;
      if (isDone) {
        resolve("3.Sugar ANd Coffie Been Add");
      } else {
        reject("Sugar ANd Coffie IS Not Use");
      }
    }, 2000);
  });
};

var getCoffee = async () => {
  try {
    var result = await getMilkFromShop();
    console.log(result);
    var result1 = await boilMilk();
    console.log(result1);
    var result2 = await addSugar();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};
getCoffee();
