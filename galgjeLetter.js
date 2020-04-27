var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//Array van de buttons
var alphabetButtons = document.getElementsByClassName("letter");
var lifeCounter = document.getElementById("lifeCounter");
var guessesLeft = 10;


for (i = 0; i < alphabetButtons.length; i++) {
	alphabetButtons[i].addEventListener("click", functionGuess); /* for loop om elke button EventListener te geven. ook een andere manier? */
 }

function functionGuess(){
	var inputLetter = this.textContent;
	
	if(guessesLeft > 0){
		if(inputLetter === guessLetter) {
			this.style.background = "green"; /*alphabetButtons[i] -> this?*/
			this.setAttribute("disabled", true);
			alert("You won!");
		}
		else{
			this.style.background = "red";
			this.setAttribute("disabled", true);
			guessesLeft--;
			lifeCounter.innerHTML = guessesLeft;
			console.log(guessesLeft);
		}
	}
	else{
		lifeCounter.style.color = "red";
		alert("You lost!")
	}


} //close functionTest

//alphabet.forEach(functionTest()){}  om elke guessLetter te vergelijken met de inputLetter
//

var startButton = document.getElementById("startButton");
var restartButton = document.getElementById("restartButton");