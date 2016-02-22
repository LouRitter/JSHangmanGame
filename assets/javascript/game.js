  
var words = ["space", "astronomy", "comet", "planet", "earth", "saturn", "star","telescope", "uranus", "spaceship", "astronaut","meteorite"];
var chosenWord = "";
var lettersInWord
var numBlanks=0
var blanksAndSuccess =[];
var wrongs=[];
//reset
var lettersGuessed=[];
// Create an array that holds every single letter in the solution
var guessesLeft=10;
var win=0;
var loss=0;


function start () {
	// body...
	guessesLeft= 10;
	chosenWord = words[Math.floor(Math.random() * words.length)]; // solution is chosen randomly from wordList
	lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters
	numBlanks = lettersInChosenWord.length;
	var blanksAndSuccess =[];
	var wrongs=[];

	// Fill up the blanksAndSuccesses list with appropriate number of blanks. This is based on number of letters in solution
	for (var i=0; i <numBlanks; i++){
		blanksAndSuccess.push("_");

}
document.getElementById("guess").innerHTML = guessesLeft;
	
	// Prints the blanks at the beginning of each round in the HTML
	document.getElementById("word").innerHTML= blanksAndSuccess.join(" ");

	// Clears the wrong guesses from the previous round
	document.getElementById('lettersGuessed').innerHTML = wrongs.join(" ");
};
function checkLetters(letter) {

	var letterInWord = false; // this boolean will be toggled based on whether or not a user letter is found anywhere in the word

	// Check if a leter exists inside the array at all.
	for (var i=0; i<numBlanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
 		}
	}

	// If the letter exists somewhere in the word, then figure out exactly where (which indices)
	if(letterInWord){
	
		// loop through the word 
		for (var i=0; i<numBlanks; i++){

			// Populate the blanksAndSuccesses with every instance of the letter.
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
			}
		}
		console.log(blanksAndSuccesses); // logging for testing
	}
	// If the letter doesn't exist at all...
	else {
		wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
		numGuesses--; // and we subtract one of the guesses
	}
}
start();
// Starts the Game by running the startGame() function