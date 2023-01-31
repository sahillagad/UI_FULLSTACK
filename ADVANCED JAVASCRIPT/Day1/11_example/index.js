/*
https://www.themealdb.com/api.php

*/

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// var uri = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// var getRecipe = () => {
//   var data = `{uri}Arrabiata`;

//   fetch(data).then((response) => response.json()).then((res)=>{

//       console.log(res)
//     })

// };
// getRecipe();

var uri = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
async function getdata() {
  var res = await fetch(uri);
  var recipe = await res.json();

  console.log(recipe.meals);
}
getdata();
