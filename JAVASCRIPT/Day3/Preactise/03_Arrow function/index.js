// Arrow function


var printMyAge=(BirthDateYear)=>{

    var year=new Date().getFullYear();
     var age=0;

    if(BirthDateYear<=year){
     
         age=year-BirthDateYear;

         console.log(age);

    }
    else{
    
         console.log("Please Give Proper Date")
    }
}


printMyAge(2000)


