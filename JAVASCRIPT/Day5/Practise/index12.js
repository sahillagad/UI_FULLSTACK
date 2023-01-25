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



const employeeDetail=employees.map((emp)=>{
      
    if(emp.age>=35){
        return emp;
    }
    

})

console.log(employeeDetail.filter((emp=>{

    if(emp!=undefined){
        return emp;
    }
})))

