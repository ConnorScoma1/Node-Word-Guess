var Letter = require("./Letter.js");

var Word = function(word){
  
  this.letterArray = []

  for(let i = 0; i < word.length; i++){

    if(word.charAt(i) === " ") {
      this.letterArray.push(' ')

    } else {
      this.letterArray.push(new Letter(word.charAt(i)))
    }
  }

  this.createString = function() {
    var wordString = "";

    this.letterArray.forEach(function(element) {
      if(element === " ") {
        wordString += " "
      } else {
        wordString += element.display()
      }
    })
    return wordString
  } 

  this.checkGuess = function(letterGuess) {
    this.lettersArray.forEach(function(element){
      if(element.letter !== undefined){
        element.checkGuess(letterGuess)
      }
    })
  } 
}

module.exports = Word;
