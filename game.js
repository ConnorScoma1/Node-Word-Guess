// NPM Inquirer
var inquire = require('inquirer')
// Word Constructor File
var Word = require('./Word.js')

// Word Bank 
var wordArr = ['Hello', 'Planet']

const letters = /[a-zA-Z]/;

var numGuess;
debugger

function game() {
    var randWord = wordArr[Math.floor(Math.random() * 10)]

    var word = new Word(randWord)

    numGuess = 10;

    guessWord(word, randWord)
    
}

function guessWord(guess, actual) {
    var letterWordArr = [];
    var guessArr = [];

    console.log('');
    console.log(guess.createString());
    console.log('');

    inquire.prompt([
        {
            name: 'guessLetter',
            message: 'Pick a Letter. ',
            validate: function validateLetter(name){
                if(!name.match(letters)){
                    return 'please pick a letter only. '
                } else {
                    return true
                }
            }
        }
    ]).then(function (answer){

        guess.checkGuess(answer.guessLetter.toUpperCase())

        guess.letterArray.forEach(function (element){
            
            letterWordArr.push(element.letter)
            guessArr.push(element.guess)

        })

        if(letterWordArr.indexOf(answer.guessLetter.toUpperCase()) > -1) {
            console.log('')
            console.log('correct')
        } else {
            console.log('')
            console.log('Incorrect')
            numGuess--;
            console.log(`You Have ${numGuess} Tries Remaining`)
        }

        if(guessArr.indexOf(false) > -1 && numGuess > 0){
            guessWord(guess, actual)
        } else {

            if(numGuess === 0){
                console.log('')
                console.log('You Lose')
                console.log(`The Word Was ${actual}!`)
                console.log('')
            } else {
                console.log('')
                console.log('You Did It! ')
                console.log(`The Word Was ${actual}`)
                console.log('')
            }
        inquire.prompt([{
            type: 'confirm',
            name: 'playAgain',
            message: 'Play Again? ',
            defualt: true

        }]).then(function(answer){
            if(answer.playAgain){
                game()
            } else {
                prompt.exit()
            }
        })
        }
    })
}

game();