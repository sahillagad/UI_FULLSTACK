/*
https://www.themealdb.com/api.php

*/

// https://jsonplaceholder.typicode.com/users

var uri = "https://jsonplaceholder.typicode.com";
var getUser = () => {
  var userDetails = `${uri}/users`;
  fetch(userDetails).then((response) => {
    response.json().then(response=>{
        console.log(response);
    });
  });
};

getUser();
