//Here  Server Call WE Make To Fetch Data 
// How To Make Server Call For Fetching Data
// before we Make server Call WE Make /Create Service File
// Directly Send The Request To THe Client To THe DataBase We Make The Service in That 
// There Multipal Page Is There  for that we craete Service That Are Take Care about The Server Call 
// Html pAGE Call Service It Will Call The Server and Server give Response To The Service And That Service  Give The Reponse To The Html

// HTML-->SERVICE-->SERVER               (REQUEST TRAVEL)
// SERVER-->SERVICE-->HTML               (RESPONSE CALL)

// We Craete mediator call service 

import * as contactService from "../Services/contactService.js";

window.addEventListener("DOMContentLoaded",()=>{
// Axios Return Promise 

    contactService.getAllContact().then((result) => {
        
        //  console.log(result); it will give object we want only the data 
      
        displayData(result.data);

    }).catch((err) => {
                
        console.log(err);
    });
    

})



const displayData=(contact)=>{

 
    var dataPast=document.querySelector("#dataPast")
    let contactCardEmement="";
    // console.log(contact);
    // console.log(dataPast)
    for(let i=0;i<contact.length;i++){
        contactCardEmement=contactCardEmement+`<div class="col-sm-6">
        <div class="card shadow-lg m-2">
          <div class="card-body bg-light rounded-2" >
         <div class="row align-items-center">
             <div class="col-sm-3">
               <img src="${contact[i].imageuri}" class="img-fluid rounded-circle shadow-sm" alt="">
             </div>
             <div class="col-sm-7">
              <ul class="list-group">
                <li class="list-group-item">
                    Name : <span class="fw-bold">${contact[i].name}</span>
                </li>
                <li class="list-group-item">
                  Mobile : <span class="fw-bold">${contact[i].mobile}</span>
              </li>
                <li class="list-group-item">
                  Email : <span class="fw-bold">${contact[i].email}</span>
              </li>
              </ul>
             </div>
             <div class="col-sm-2 d-flex flex-column justify-content-around">
              
                         <a href="./viewContact.html?contactId=${contact[i].id}" class="btn btn-warning m-1">
                          <i class="bi bi-eye"></i>
                         </a>
                         <a href="./edit_Contact.html?contactId=${contact[i].id}" class="btn btn-primary m-1" >
                          <i class="bi bi-pencil"></i>
                         </a>
                          <button  onclick="window.location.href='./deleteContact.html?contactId=${contact[i].id}'" class="btn btn-danger m-1">

                            <i class="bi bi-trash"></i>
                          </button>
             </div>
         </div>
          </div>                  
        </div>
       </div>`;
     
    }
 
// console.log(contactCardEmement)
    dataPast.innerHTML=contactCardEmement;
  
  }
// If You Click On Delete Than We Want The ReLoad The Page
// Load The Same Page 
// you use  For Reload
// window Reload Also WE Use  



var SearchForm=document.querySelector("#searchBYIDForm");

SearchForm.addEventListener("submit",(event)=>{
 event.preventDefault();
 var contactId=document.querySelector("#valueOfSearch").value;
 window.location.href="../html/viewContact.html?contactId="+contactId;
  


})

