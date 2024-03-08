<noscript><h3>Sorry , your browser doesn't support javascript :(</h3></noscript>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="width=device-width, intial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Hangman Game</title>
  <style>
    h1{text-align: center;}
    h3{text-align: center;}
    p{text-align: center;} 
    button{text-align: center;}     
  </style>
</head>
<body>
  <div calss="me">
  <h1
  style="color: rgb(224, 32, 250)">Hangman Game</h1>
  <hr> 
  <h3>There are total 5 chance for incorrect guesses</h3></div>
  <div id="wordContainer"></div>
  <p>Incorrect Guesses: <span style="color:red" id="incorrectGuesses"></span></p>
  <p id="message"></p>
  <input style="color:rgb(12, 12, 11)" type="text" id="guessInput">
  <button type="button" class="button" onclick="checkGuess()">Guess</button> 
  <script>
    const words = ["clan", "future", "cookie", "code", "random", "rikshaw", "car", "honor", "fool", "franco"];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let guessedWord = Array(selectedWord.length).fill('_');
    let incorrectGuesses = [];
    let remainingAttempts = 5;

    const wordContainer = document.getElementById('wordContainer');
    const incorrectGuessesDisplay = document.getElementById('incorrectGuesses');
    const messageDisplay = document.getElementById('message');

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
        }
      } else {
        if (!incorrectGuesses.includes(input)) {
          incorrectGuesses.push(input);
          remainingAttempts--;
          displayIncorrectGuesses();
          if (remainingAttempts === 0) {
            messageDisplay.textContent = `Game Over! The word was "${selectedWord}"`;
          }
        } else {
          messageDisplay.textContent = 'You already guessed that letter!';
        }
      }

      document.getElementById('guessInput').value = '';
    }

    displayWord();
    displayIncorrectGuesses();
  </script>
</body>
</html>
