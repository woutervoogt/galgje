var word = ['novice', 'argentijnse', 'zegel', 'armoede', 'partij', 'schuilplaats', 'gong', 'wetenschap', 'symfonie', 'werk', 'voorspelling', 'rups', 'slapeloosheid', 'kussen', 'gevangenis', 'anatomie', 'robot', 'mierenhoop', 'stroomversnelling', 'zeven', 'chimpansee', 'netwerk', 'dingen', 'afgrond', 'ezel', 'lieveheersbeestje'];

var wordGenerator = document.getElementById("wordGenerator");
//Array van de buttons
var alphabetButtons = document.getElementsByClassName("letter");

var lifeCounter = document.getElementById("lifeCounter");
var letterCounter =  document.getElementById("letterCounter");
var theWord = document.getElementById("theWord");
//var theWordSpan = [theWord];
var guessesLeft = 10;

//var guessWord = prompt("Type the word");
var guessWord = "";
var lettersGuessedCounter = 0;
var guessWordArray = "";

//createSpan
var createSpan = document.createElement("span");
createSpan.innerHTML = ".";
createSpan.style.borderBottom = "solid 3px white";
createSpan.style.margin = "2px";
createSpan.style.fontSize = "2.5em";

for (i = 0; i < alphabetButtons.length; i++) {
	alphabetButtons[i].addEventListener("click", functionGuess);
 }

function functionGuess(){
	var inputLetter = this.textContent;
	console.log(inputLetter);

	if(guessWordArray.includes(inputLetter) === false){
				guessesLeft--;
				lifeCounter.innerHTML = guessesLeft;
				console.log(guessesLeft);
				this.style.background = "red";
				this.disabled = true;
				
				if(guessesLeft === 0){
					lifeCounter.style.color = "red";
					disableKeyboard();
					alert("You lost!");
				}
	}
	else {
		this.style.background = "green";
		this.disabled = true;
	}

	for (i = 0; i<guessWordArray.length; i++){
		if(inputLetter === guessWordArray[i]) {
			lettersGuessedCounter--;
			theWord.children[i].innerHTML = inputLetter;
			if(lettersGuessedCounter === 0){
				disableKeyboard();

				alert("You Won!");
			}
		}			
	}
}

function disableKeyboard() {
	for (i = 0; i < alphabetButtons.length; i++) {
		alphabetButtons[i].disabled=true;
 	}
}

function enableKeyboard() {
	for (i = 0; i < alphabetButtons.length; i++) {
		alphabetButtons[i].disabled=false;
 	}
}

var startButton = document.getElementById("startButton");
var restartButton = document.getElementById("restartButton");

startButton.addEventListener("click", functionStartGame);
restartButton.addEventListener("click", functionRestartGame);
wordGenerator.addEventListener("click", functionRandomWord);

function functionStartGame(){
	var wordInput = document.getElementById("wordInput").value;
	if(wordInput === ""){
		alert("Please enter a word");
	}
	else{
		enableKeyboard();
		guessWord = wordInput;
		guessWordArray = Array.from(guessWord);
		lettersGuessedCounter = guessWordArray.length;
		for (i = guessWordArray.length; i > 0; i--){
			theWord.appendChild(createSpan.cloneNode(true));
			
			console.log(i)}
			console.log(guessWord);
	}
}

function functionRestartGame(){
	disableKeyboard();
	guessesLeft = 10;
	lifeCounter.innerHTML = guessesLeft;
	theWord.innerHTML = "";
	for (i = 0; i < alphabetButtons.length; i++) {
		alphabetButtons[i].style.background= "#5e5e5e";
 	}
}
function functionRandomWord(){
	var randomWord = word[Math.floor(Math.random() * word.length)];
	wordInput.value = randomWord;
}
