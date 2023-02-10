import * as contactService from "../Services/contactService.js";


var imageinput=document.querySelector("#image");
//way2
// Note 2 
imageinput.addEventListener("input",()=>{
  
  var imageuri=imageinput.value;
  var imageShow=document.querySelector("#imageShow");
  imageShow.setAttribute("src",imageuri);
  imageShow.style.backgroundColor="white"
  imageShow.style.visibility ="visible"

})



var contactAddFrom = document.querySelector("#formAddContact");

var isEmptyField=(contact)=>{
    for(var value of Object.values(contact)){
       if(value=== ""){    
          return false;
       }}
    return true;
}



contactAddFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  // Way1

  // var name1 = document.querySelector("#name").value;
  // var image1 = document.querySelector("#image").value;
  // var phone1 = document.querySelector("#phone").value;
  // var email1 = document.querySelector("#email").value;
  // var company1 = document.querySelector("#company").value;
  // var title1 = document.querySelector("#title").value;
  // var groupId1 = document.querySelector("#groupId").value;

  // var contact = {
  //   name: name1,
  //   imageuri: image1,
  //   mobile: phone1,
  //   eamil: email1,
  //   company: company1,
  //   title: title1,
  //   groupId: groupId1,
  // };

  // or
  // way2
 


  var contact = {
    name: document.querySelector("#name").value,
    imageuri: document.querySelector("#image").value,
    mobile: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
    company: document.querySelector("#company").value,
    title: document.querySelector("#title").value,
    groupId: document.querySelector("#groupId").value,

  };


  // Way 1 To Add Image In side Image Tag
  // var image1 = document.querySelector("#image").value;
  // imageShow.setAttribute("src",image1);

  //  Another Way Refer Note 1



  // Here You Can Applied Form Vaildataion
  /*
        here WE Send JavaScript Objectit will Convert Internaly
        in THe Json format
        axois Convert
*/






// Here We Data Base Store

if(Object.keys(contact).length > 0  && isEmptyField(contact)) {
    contactService.createContact(contact)
      .then((result) => {
        if (result.data) {
        // WE Redirct This Page Where All Record
          window.location.href="../html/contactAdmin.html";        
        }
      })
      .catch((err) => {
        // console.log(err);
        alert("Contact Not Save");
      });
  }
  else if(isEmptyField(contact)==false){
// All The Filed We Make The Rqiuered bUT Only Select 
// If You Not SElect or SElect SElect A Group It Will Give alert
    alert("Please Select Proper Group ");
  }
});

