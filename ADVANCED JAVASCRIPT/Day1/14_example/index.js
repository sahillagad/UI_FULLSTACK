var uri = "https://jsonplaceholder.typicode.com";
const getAllUserFromServer = () => {
  return new Promise((resolve, reject) => {
    var dataUri = `${uri}/users`;

    fetch(dataUri)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          reject("some error occure");
        }
      });
  });
};

var tbody = document.querySelector("tbody");
getAllUserFromServer()
  .then((data) => {
    console.log(data);

    var tableRow = "";
    for (var i = 0; i < data.length; i++) {
      var person = data[i];
      var tr = document.createElement("tr");

      tableRow =
        tableRow +
        `
                      <tr>
                      <td> ${person.id}</td>
                      <td>${person.name}</td>
                      <td>${person.email}</td>
                      <td>${person.phone}</td>
                      <td>${person.website}</td>
                      <td>${person.address.street}</td>
                      <td>${person.address.city}</td>
                      <td>${person.address.zipcode}</td>
                       </tr>
                      `;
    }
    tbody.innerHTML=tableRow;
  })
  .catch((error) => {
    console.error(error);
  });
