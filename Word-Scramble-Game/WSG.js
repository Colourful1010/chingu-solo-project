const words = ["apple", "banana", "orange", "melon", "grape", "drink", "book", "learn", "calculator", "notebook", "mobile", "computer", "application", "communication"];
const word = words[Math.floor(Math.random() * words.length)];

function scramble(word) {
    let arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

document.getElementById('scrambledWord').textContent = scramble(word);

function check() {
    const input = document.getElementById('guessInput')
    const guess = input.value.toLowerCase().trim();
    const result = document.getElementById('result');

    if (guess === word){
        result.textContent = "Correct!";
        result.style.color = '#00ff00';
    }
    else{
        result.textContent = "Wrong!"
        result.style.color = '#ff0000';
    }
    
    document.getElementById('label').innerText = "Your Guess:";

    input.readOnly = true;
    input.style.boxShadow = 'none';
    input.style.border = '1px solid';

    button = document.getElementById('checkBtn');
    
    button.style.display = 'none';


    refresh = document.getElementById('refresh');

    refresh.innerText = "Refresh the page to play again.";
    refresh.style.color = '#413f3fff';
    refresh.style.fontSize = '1.2rem';
};
