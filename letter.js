
function Letter(letter) {
    this.letter = letter
    this.guess = false

    this.display = function(){
        if(this.guess) {
            return this.letter + ' '
        } else {
            return '_ '
        }
    }
    this.checkGuess = function(guess) {
        if(guess === this.letter){
            this.guess = true
        }
    }
}

module.exports = Letter