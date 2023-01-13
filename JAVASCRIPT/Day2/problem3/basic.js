
/*
getDate() in javascript only returns the day as number (1-31)

Example
var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();

Output:
22

Method	            Description
getFullYear()	    Get the year as a four digit number (yyyy)
getMonth()	        Get the month as a number (0-11)
getDate()	        Get the day as a number (1-31)
getHours()	        Get the hour (0-23)
getMinutes()	    Get the minute (0-59)
getSeconds()	    Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	        Get the time (milliseconds since January 1, 1970)
getDay()	        Get the weekday as a number (0-6)
Date.now()	        Get the time. ECMAScript 5.

*/
var date=new Date().getDate()
console.log(`Date : ${date}`)


var year=new Date().getFullYear()
console.log(`Year : ${year}`)

var month=new Date().getMonth();
console.log(`Month : ${month}`)




















