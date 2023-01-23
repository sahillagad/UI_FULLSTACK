
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// 

var countVowel_Consonant = function (str1) {

    var count=0;
    var vowel="aeiou";

    for(var i=0;i<vowel.length;i++){
        var char=vowel[i];
        for(var j=0;j<str1.length;j++){


            if(char==str1[j]){
              count++

            }

        }
    }


    console.log("Vowel : "+count)



}
  
countVowel_Consonant("The quick brown fox");


  