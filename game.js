
window.onload = function()
{
  
var words = ["space", "astronomy", "comet", "planet", "earth", "saturn", "star","telescope", "uranus", "spaceship", "astronaut","meteorite"];
var win=0
var loss=0;

//reset
var lettersGuessed=[];
var x =Math.floor(Math.random() * words.length);
		console.log	(words[x]);
var guessesLeft=10;
	console.log(guessesLeft);
var dashLength="";
var dashes= " _ ";
	for (var i = 0; i < words[x].length; i++) {
		dashLength = dashLength + dashes;
		console.log(dashLength);

};
document.getElementById("word").innerHTML = dashLength;
 //reset
function reset () {
	// body...
}
 var lettersGuessed=[];
var x =Math.floor(Math.random() * words.length);
		console.log	(words[x]);
var guessesLeft=10;
	
var dashLength="";
var dashes= " _ ";
	for (var i = 0; i < words[x].length; i++) {
		dashLength = dashLength + dashes;
		console.log(dashLength);

};
document.getElementById("word").innerHTML = dashLength;	



document.onkeyup = function(event) {
	
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		search();
		lettersGuessed.push(userGuess);
			function search() {
				
				for (var j = 0; j < words[j].length; j++) {

				if (userGuess == words[j].charAt(j)){
					alert("works");
					userGuess.charAt(words[j])=dashLength(userGuess);
					
				}else{
						guessesleft=guessesLeft-1;
						}
							if (guessesLeft == 0){
							reset();
							loss++
							};
					
							

};
document.getElementById("guess").innerHTML = guessesLeft;
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
document.getElementById("loses").innerHTML = loss;
};
};
};

// var substring= words[x].substring();
		// alert(substring);

// if (userGuess === substring.charAt()){
	// function replace(){
		// var wordLoc = userGuess.substring.charAt();
		// var correct = dashes.charAt(wordLoc);
		// correct = 
	// }


