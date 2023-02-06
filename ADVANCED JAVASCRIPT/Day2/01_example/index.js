var uri = "https://jsonplaceholder.typicode.com/";
const getAllFood = () => {
  return new Promise((resolve, reject) => {
    let data = uri + "users";

    fetch(data)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res) {
          resolve(res);
        }
        else{
            reject("Some Thing Is Wrong");
        }
      });
  });
};



getAllFood().then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error)
})