var Letter = require("./Letter.js");

var Word = function(word){
    this.lettersArr = [];

    for (var i = 0; i < word.length; i++){
        if (word.charAt(i) === " "){
            this.lettersArr.push(" ");
        }else{
            this.lettersArr.push(new Letter (word.charAt(i)));
        };
    };

    this.createString = function(){
        var wordString = "";

        this.lettersArr.forEach(function(element){
            if (elemnt === " "){
                wordString += "  ";
            }else{
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }

    this.checkGuessWord = function (letterGuess){
        this.lettersArr.forEach(function(element){
            if (element.letter !== undefined){
                element.checkGuess(letterGuess);
            }
        });
    };
};

module.exports = Word;