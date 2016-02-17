
window.onload = function()
{
    
var words = ["space", "astronomy", "comet", "planet", "earth", "saturn", "star","telescope", "uranus", "spaceship", "astronaut","meteorite"];
var x =Math.floor(Math.random() * words.length);
		console.log	(words[x]);
var dashes= " _ ";
	for (var i = 0; i < words[x].length; i++) {
		console.log(dashes);
};

var guessesLeft=5;
	console.log(guessesLeft);

document.onkeyup = function(event) {
	console.log(guessesLeft--);

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		search();
			function search() {
				
				for (var j = 0; j < words[x].length; j++) {

				if (userGuess == words[x].charAt(j)){
					alert("works");
					guessesLeft=guessesLeft+1;
					
				}else{
						
				}
		

};
	
};

};
document.getElementById("word").innerHTML= dashes;
document.getElementById("guess").innerHTML= guessesLeft;
};

// var substring= words[x].substring();
		// alert(substring);

// if (userGuess === substring.charAt()){
	// function replace(){
		// var wordLoc = userGuess.substring.charAt();
		// var correct = dashes.charAt(wordLoc);
		// correct = 
	// }


