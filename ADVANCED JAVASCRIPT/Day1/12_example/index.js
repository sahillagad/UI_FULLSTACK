// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

var uri = "https://www.themealdb.com/api/json/v1/1/search.php?s";
var getdata = () => {
  var data = `${uri}=Arrabiata`;

  fetch(data)
    .then((response) => response.json())
    .then((json) => console.log(json.meals[0]));
};
getdata();
