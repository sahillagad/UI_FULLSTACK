//  Write a JavaScript function that accepts a string as a
//  parameter and converts the first letter of each word of the
//  string in upper case. Go to the editor
//  Example string : 'the quick brown fox'
//  Expected Output : 'The Quick Brown Fox '

function accepts(str) {
 
    var result="";
    for (var i = 0; i < str.length; i++) {

        if(i==0){
            result=result+str[i].toUpperCase();
        }
       else if(str[i-1]==" "){
        result=result+str[i].toUpperCase();
       } 
       else{
        result=result+str[i]
       }

    }

 console.log(result);

}
accepts("the quick brown fox")