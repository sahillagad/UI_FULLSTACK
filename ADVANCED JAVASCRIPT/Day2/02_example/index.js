var  uri="https://www.themealdb.com/api/json/v1/1/search.php?s="

var getFood=()=>{

 return new Promise((resolve,reject)=>{

    var data=uri+"chicken";

    fetch(data).then((res)=>{

        if(res){
            resolve(res.json());
        }
        else{
            reject("Some Thing Is Wrong");
        }
    })
    


 })

}
 
 
 
getFood().then((res)=>{
  console.log(res.meals)
    
}).catch((error)=>{

console.error(error);
});