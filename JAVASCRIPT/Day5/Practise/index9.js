/**
 * array of objects
 */
let employees = [
    {
      sno: "A001",
      name: "Rajan",
      age: 25,
      designation: "Software Engineer",
    },
    {
      sno: "A002",
      name: "John",
      age: 30,
      designation: "Sr.Software Engineer",
    },
    {
      sno: "A003",
      name: "Wilson",
      age: 35,
      designation: "Tech Lead",
    },
    {
      sno: "A004",
      name: "Arun",
      age: 40,
      designation: "Manager",
    },
    {
      sno: "A005",
      name: "Laura",
      age: 45,
      designation: "Director",
    },
  ];


const getAllJuniorEmployee=(startAge,endAge)=>{


    var juniorEmployee=[];

    for(let emp of employees){
        if(emp.age>=startAge && emp.age<=endAge){
      
            juniorEmployee.push(emp);
     
       } 
    }

    if(juniorEmployee.length==0){
        console.log("Employee Is Present This Age");
    }
    else{
      
      console.log(juniorEmployee);    

    }
}


getAllJuniorEmployee(21,37);



