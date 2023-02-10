import * as contactService from "../Services/contactService.js";

window.addEventListener("DOMContentLoaded", () => {
  editFunction();
});

var uri = document.URL;
var uri2 = uri.split("?");
var uri3 = uri2[1].split("=");
var contactId = uri3[1];
// console.log(contactId);

const isEmptyField = (contact) => {
  for (const value of Object.values(contact)) {
    if (value === "") {
      return false;
    }
  }
  return true;
};

var editFunction = () => {
  contactService
    .getContactById(contactId)
    .then((result) => {
      var contactDetail = result.data;
      if (isEmptyField(contactDetail)) {
        var group_Id = result.data.groupId;
        showContactDetail(contactDetail, group_Id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

var iamgeInput = document.querySelector("#iamge");
iamgeInput.addEventListener("input", () => {
  var iamgeUri = iamgeInput.value;
  var showImg = document.querySelector("#showImg");
  showImg.setAttribute("src", imageuri);
});

function showContactDetail(contactDetail, group_Id) {
  var name = document.querySelector("#name");
  var iamge = document.querySelector("#iamge");
  var phone = document.querySelector("#phone");
  var email = document.querySelector("#email");
  var company = document.querySelector("#company");
  var title = document.querySelector("#title");
  var groupId = document.querySelector("#groupId");
  console.log(contactDetail);

  // Apped Value In The Input Tag
  name.value = contactDetail.name;
  iamge.value = contactDetail.imageuri;
  phone.value = contactDetail.mobile;
  email.value = contactDetail.email;
  company.value = contactDetail.company;
  title.value = contactDetail.title;

  groupId.value = `${group_Id}`;
  showImg.setAttribute("src", contactDetail.imageuri);
}

var updateForm = document.querySelector("#updateForm");
updateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var contactObj = {
    name: document.querySelector("#name").value,
    imageuri: document.querySelector("#iamge").value,
    mobile: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
    company: document.querySelector("#company").value,
    title: document.querySelector("#title").value,
    groupId: document.querySelector("#groupId").value,
  };

  console.log(contactObj);
  contactService.updateContact(contactObj, contactId).then((result) => {
   
     // WE Redirct This Page Where All Record
     window.location.href="../html/contactAdmin.html"; 

  }).catch((err) => {
    
   console.log(err);

  });;
});
