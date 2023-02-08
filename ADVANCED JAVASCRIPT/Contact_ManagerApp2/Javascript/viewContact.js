
import * as contcatService from  "../Services/contactService.js";
// Land On This Page View The Uri There Is  Id We get That   Id And Call Service Method

window.addEventListener("DOMContentLoaded",()=>{

// Read URI 
// way 1
// const uri=window.location.href;
// console.log(uri)

//way 2
const uri1=document.URL;
console.log(uri1)

// I Want Only Contect Id We Not Want Whole Uri
// For That WE Use The Split Inbulit Function

var arr=uri1.split("?")
// console.log(arr)

var key=arr[1].split("=")[1];
FetchData(key);

})



function FetchData(key){

      contcatService.getContactById(key).then((result) => {
        
        // console.log(result)
        // console.log(result.data)


                            var groupId=result.data.groupId;
                
                            contcatService.getGroupById(groupId).then((group) => {
                                
                                displayData(result.data,group.data);

                            }).catch((message)=>{
                              console.log(message)
                            })
     
       

      }).catch((err) => {
        console.log(err)

      });;
}


var postData1=document.querySelector("#postData1");

var displayData=(contact,group)=>{
    console.log(contact);
    console.log(group);

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
                 Email : <span class="fw-bold">${contact.eamil}</span>
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




