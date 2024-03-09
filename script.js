const words = ["farmer","blue","pen","table","school","clown", "cone", "cookie", "rango", "rikshaw", "car", "apple", "fool"];
let selectedWord = words[Math.floor(Math.random() * words.length)]; 
let guessedWord = Array(selectedWord.length).fill('_');
let incorrectGuesses = []; 
let remainingAttempts = 5;

const wordContainer = document.getElementById('wordContainer');
const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');
const messageDisplay = document.getElementById('message');
const remarkImage = document.getElementById("remark");
const displaydiv = document.getElementById('text-input');
const displayrestart = document.getElementById("divRestart");

function dispRestart(){
    displayrestart.style.display = 'block';
}

function dispInput(){
    displaydiv.style.display = 'none';
}

function winImage(){
    remarkImage.style.backgroundImage ="url('image/win.gif')";
}
function looseImage(){
    remarkImage.style.backgroundImage = "url('image/loose.gif')";
}

function hintImage(){
    remarkImage.style.backgroundImage = `url('image/${selectedWord}.jpeg')`;
}

function displayWord() {
    wordContainer.textContent = guessedWord.join(' ');
}

function displayIncorrectGuesses() {
    incorrectGuessesDisplay.textContent = incorrectGuesses.join(', ');
}

function checkGuess() {
    const input = document.getElementById('guessInput').value.toLowerCase();

    if (input.length !== 1 || !input.match(/[a-z]/)) {
        messageDisplay.textContent = 'Please enter a valid single letter!';
    }

    else if(selectedWord.includes(input)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === input) {
                if(guessedWord[i] === input){
                    messageDisplay.textContent = 'You have already guessed that letter!';
                }
                else{
                    guessedWord[i] = input;
                    messageDisplay.textContent = 'Correct guess! Enter another letter';
                }
            }
        }
        displayWord();

        if (!guessedWord.includes('_')) {
            messageDisplay.textContent = 'Congratulations! You won!';
            dispInput();
            dispRestart();
            winImage();
        }
    } 
    else {
        if (!incorrectGuesses.includes(input)) {
            incorrectGuesses.push(input);
            remainingAttempts--;
            messageDisplay.textContent = 'Incorrect guess!! Try another letter!';
            displayIncorrectGuesses();

            if (remainingAttempts === 0) {
                messageDisplay.textContent = `Game Over! The word was "${selectedWord}"`;
                dispInput();
                dispRestart();
                looseImage();
            }
        } 
        else {
            messageDisplay.textContent = 'You have already guessed that letter!';
        }
    }
    document.getElementById('guessInput').value = '';
}

function restart(){
    // location.reload();
    selectedWord = words[Math.floor(Math.random() * words.length)]; 
    guessedWord = Array(selectedWord.length).fill('_');
    incorrectGuesses = []; 
    remainingAttempts = 5;
    displaydiv.style.display = 'block';
    displayrestart.style.display = 'none';
    displayWord();
    displayIncorrectGuesses();
    hintImage();
}

displayWord();
displayIncorrectGuesses();
hintImage();
