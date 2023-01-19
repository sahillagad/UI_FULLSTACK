let employee=[
            
    {
      sno: "A003",
      name:"Jhon",
      age:35,
      designation:"Tech load"
    },

    {
        sno: "A004",
        name:"Tom",
        age:40,
        designation:"Software Engineer"
      },


      {
        sno: "A005",
        name:"Mahan",
        age:45,
        designation:"sr Software Engineer"
      },


      {
        sno: "A006",
        name:"Jarray",
        age:37,
        designation:"Tech load"
      }


]


const getEmployee=(empId)=>{
    for(let i=0;i<employee.length;i++){
        if(((employee[i])["sno"])===empId){
            console.log(employee[i])
        }
      }
}


getEmployee("A006");





const   getAllTeachLead=(employee)=>{
  let jrEmployee=[]

  for(let i=0;i<employee.length;i++){

    if(employee[i].designation=="Tech load"){
    
                   jrEmployee.push(employee[i]);

    }
  }

  console.log(jrEmployee)

}
 
getAllTeachLead(employee)
