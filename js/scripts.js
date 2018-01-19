// take user input

// check if input is a string
  // if it is a string, check if it begins with a vowel.
    // if it is a vowel, add "-way" to the end of the word.
    // if it is a consonant , move first consecutive consonants to the end of word, and add "-ay" after.
    // if it starts with "qu", move the "u" with the "q" to the end of the word.
  // else if input is NOT a string, return "not a word"

//Back-End
//     else if (wordArray[0] != "a" || wordArray[0] != "e" || wordArray[0] != "i" || wordArray[0] != "o" || wordArray[0] != "u") {
//       if (wordArray[0] === "y" && i>0) {
//       alert("starts with y");
//       }
//     }
//   }
//     return char;
//     console.log(char);
// }

//Front-End
function pigLatin(englishInput) {
  var vowelArray = ["a","e","i","o","u"];
  var finalPhrase = function(userPhrase) {
  if (vowelArray.includes(englishInput[0]) === true) {
    finalPhrase = englishInput + "way";
  } else {
    alert("does not start with vowel");
    }
  }
  return finalPhrase;
}


$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    // var allConsonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    var englishInput = $("#englishWord").val();
    var wordArray = englishInput.split("");

    $("#pigpen").text(pigLatin(englishInput));

  // } else if (wordArray[0] === allConsonants) {
  //   alert(allConsonants);
    // str.slice(wordarray[0,1]) += "ay";
  });
});
