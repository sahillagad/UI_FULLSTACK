/*
 Call Back Function 
*/

/*
I want Make Coffee It Full Depandent Statement
1] Get Milk from Shop
2] Boil The Milk 
3] Add Sugar AND Coffee
*/

// By Default JavaScript Is syncronous Progarming

const getMilkFromShop = (boilMilk, addSugar) => {
  setTimeout(() => {
    console.log("1. I Get Milk From Shop");
    boilMilk(addSugar);
  }, 2000);
};

const boilMilk = (addSugar) => {
  setTimeout(() => {
    console.log("2. boil The Milk");
    addSugar();
  }, 1000);
};

const addSugar = () => {
  setTimeout(() => {
    console.log("3. Add Sugar And Coffee");
  }, 3000);
};

const getCoffee = (getMilkFromShop, boilMilk, addSugar) => {
  getMilkFromShop(boilMilk, addSugar);
};

getCoffee(getMilkFromShop,boilMilk,addSugar);
