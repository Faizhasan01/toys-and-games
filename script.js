const words = ["farmer","blue","pen","table","school","clown", "cone", "cookie", "rango", "rikshaw", "car", "apple", "fool"];
let selectedWord = words[Math.floor(Math.random() * words.length)]; 
let guessedWord = Array(selectedWord.length).fill('_');
let incorrectGuesses = []; 
let remainingAttempts = 5;

const wordContainer = document.getElementById('wordContainer');
const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');
const messageDisplay = document.getElementById('message');
const remarkImage = document.getElementById("remark");

function winImage(){
    remarkImage.style.backgroundImage ="url('image/win.gif')";
}
function looseImage(){
    remarkImage.style.backgroundImage = "url('image/loose.webp')";
}

function hintImage(){
    remarkImage.style.backgroundImage = `url('image/${selectedWord}.jpeg')`;
}

function disp(){
    messageDisplay.style.display = "inline-block";
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
        disp();
        return;
    }

    if (selectedWord.includes(input)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === input) {
                guessedWord[i] = input;
            }
        }
        displayWord();

        if (!guessedWord.includes('_')) {
            messageDisplay.textContent = 'Congratulations! You won!';
            disp();
            winImage();
        }
    } 
    else {
        if (!incorrectGuesses.includes(input)) {
            incorrectGuesses.push(input);
            remainingAttempts--;

            displayIncorrectGuesses();

            if (remainingAttempts === 0) {
                messageDisplay.textContent = `Game Over! The word was "${selectedWord}"`;
                disp();
                looseImage();
            }
        } 
        else {
            messageDisplay.textContent = 'You already guessed that letter!';
            disp();
        }
    }

    document.getElementById('guessInput').value = '';
}

displayWord();
displayIncorrectGuesses();
hintImage();
