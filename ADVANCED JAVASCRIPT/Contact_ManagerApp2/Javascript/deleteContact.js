import * as contactService from "../Services/contactService.js";

window.addEventListener("DOMContentLoaded", () => {
  var contactId = document.URL.split("=")[1];

  contactService.getContactById(contactId).then((result) => {
    var contactDetail = result.data;
     var groupId=result.data.groupId;
      contactService.getGroupById(groupId).then((res) => {
                     
                        var group=res.data;
                        displayData(contactDetail,group); 
                        getDeleteContactById(contactDetail.id);
                    });
    })
    .catch((err) => {
      console.log(err);
    });
});

var postData1=document.querySelector("#postData1");

function   displayData(contact,group){

    var contactData=`
    <div class="row align-items-center">
    <div class="col-sm-4">
       <div class="m-2"> 
           <img src="${contact.imageuri}"  class="rounded-circle" alt="">
          </div> 
    </div>

    <div class="col-sm-8">

     <div class="row" >
       <div class="col-sm-12 m-2">
         <ul class="list-group">
             <li class="list-group-item">
                 Name : <span class="fw-bold">${contact.name}</span>
             </li>
             <li class="list-group-item">
                 Mobile : <span class="fw-bold">${contact.mobile}</span>
             </li> 
             <li class="list-group-item">
                 Email : <span class="fw-bold">${contact.email}</span>
             </li> 
             <li class="list-group-item">
                 Company : <span class="fw-bold">${contact.company}</span>
             </li> 
             <li class="list-group-item">
                 Title : <span class="fw-bold">${contact.title}</span>
             </li> 
             <li class="list-group-item">
                 Group : <span class="fw-bold">${group.name}</span>
             </li>  
         </ul>
            </div>

     </div>
     <div class="row">
         <div class="col-sm-12 m-2">
             <a href="./contactAdmin.html" class="btn btn-dark ">Back</a>        

             </div>
     </div>

    </div>
   </div>

`
     
postData1.innerHTML=contactData;


}



function getDeleteContactById(contactId){
    setTimeout(()=>{
    var ans=confirm("Are Sure To Delete This Contact");
 console.log(ans)
     if(ans==true){
 
        contactService.getDeleteContactById(contactId).then((result) => {
            window.location.href="../html/contactAdmin.html"; 
          }).catch((err) => {
             console.log(err);
          });
 
     }
     else{
 
        
        window.location.href="../html/contactAdmin.html"; 
     }
  
    },1000)


 }