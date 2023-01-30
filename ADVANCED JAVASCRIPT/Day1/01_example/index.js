const great = () => {
  console.log("Greet Function Call");
};

great();

let intervalId=setInterval(() => {
    
  great();


}, 1000);


setTimeout(()=>{

        clearInterval(intervalId);

},10000)
