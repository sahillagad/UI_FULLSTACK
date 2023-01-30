/*
CallBack Function 
*/

let sum = (a, b) => {
  return ("sum :"+ (a + b));
};

let div = (a, b) => {
  return("div :"+ (a / b));
};

let mul = (a, b) => {
    return("mul :"+ (a * b));
};

let sub = (a, b) => {
    return("sub :"+ (a - b));
};

let calculate = (num1, num2, fun) => {
  let result = fun(num1, num2);
  console.log(result)
};


calculate(10,20,sum);
calculate(10,20,mul);
calculate(10,20,div);
calculate(100,20,sub);
calculate(10,20,(a,b)=>{
     
   return ("SUM : "+(a+b+100));
})
