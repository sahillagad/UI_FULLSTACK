import * as userDetails from "./userDetails.js";

//we want imort all the things of the userDetails.js
// thats why we here import
//the   * (start we not use that why we give the userDetails as alias Support)
// from where this data is come

// here WE Want as soon as we loaded the page data fill be laod
// for that one event is there;
// DOMContentLoaded is event i want when open html data is read and show it
// After Load The Html
// Data is load and Show That data in the user

var windowLoad = window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});

var tbody = document.querySelector("tbody");

function myFunction() {
  var details = userDetails.getAllUser(); // Data  Is Come From Here
  let tableRowElement = "";
  for (var i = 0; i < details.length; i++) {
    tableRowElement =
      tableRowElement +
      `<tr>
          <td>${details[i].id}</td>
          <td>${details[i].name}</td>
          <td>${details[i].email}</td>
          <td>${details[i].website}</td>
          <td>${details[i].address.street}</td>
          <td>${details[i].address.city}</td>
        </tr>`;
  }

  console.log(tableRowElement);
  tbody.innerHTML=tableRowElement
}
