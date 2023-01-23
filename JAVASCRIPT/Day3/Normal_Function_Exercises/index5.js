// 6. Write a JavaScript function that accepts a string as a parameter
//  and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// Click me to see the solution


function foundLongestWord(str){

    var arr=str.split(" ");
  console.log(arr)
    
    var max=-Infinity;
    var ans=""
   for(var i=0;i<arr.length;i++){

  
    if((arr[i].length)>max){
      
          max= arr[i].length;
          ans=arr[i]
         
    }


   }

console.log(ans)

}

foundLongestWord("Web Development Tutorial")
