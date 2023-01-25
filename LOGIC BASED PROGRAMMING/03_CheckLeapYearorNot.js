var checkLeap = (year) => {
  if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a leap Year`);
  }
  else if(year%400==0){

    console.log(`${year} is a leap Year`);
  }
  else{
    console.log(`${year} is Not a leap Year`);
  }
};

checkLeap(2022)
