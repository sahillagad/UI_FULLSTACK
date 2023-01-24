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
// way 2

const getEmployee=employees.find(emp=>{
    return emp.sno=="A005";
})

console.log(getEmployee);


var findEmployeeBySno=(empId)=>{

    var empDetail=employees.find(function(emp){
             
        if(emp.sno==empId){
            return emp;
        }
        else{
            return "employee is Not Find Out By Given Id";
        }
    });

     console.log(empDetail);
}


findEmployeeBySno("A001")