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

var tbody = document.querySelector("tbody");
var details = userDetails.getAllUser(); // Data  Is Come From Here

var windowLoad = window.addEventListener("DOMContentLoaded", () => {
  myFunction();
});

function myFunction() {
  for (var i = 0; i < details.length; i++) {
    var trTag = document.createElement("tr");
    var item = details[i];

    var tdTag = document.createElement("td");
    tdTag.innerText = item.id;
    trTag.appendChild(tdTag);

    var tdTag1 = document.createElement("td");
    tdTag1.innerText = item.name;
    trTag.appendChild(tdTag1);

    var tdTag2 = document.createElement("td");
    tdTag2.innerText = item.email;
    trTag.appendChild(tdTag2);

    var tdTag3 = document.createElement("td");
    tdTag3.innerText = item.website;
    trTag.appendChild(tdTag3);

    var tdTag4 = document.createElement("td");
    tdTag4.innerText = item.address.street;
    trTag.appendChild(tdTag4);

    var tdTag5 = document.createElement("td");
    tdTag5.innerText = item.address.city;
    trTag.appendChild(tdTag5);

    tbody.appendChild(trTag);
  }
}
