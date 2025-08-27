const label = document.getElementById("label");
const input = document.getElementById("number-input");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let output = document.getElementById("output");
let  refresh = document.getElementById("refresh");
const button = document.getElementById("button");

function check(){
    if (parseInt(input.value) === randomNumber){
        output.innerHTML = `<h1>Correct Guess!</h1>`;
    }
    else{
        output.innerHTML = `<h1>Wrong!</h1>
        <h2>The number is ${randomNumber}</h2>`;
    }
    label.innerText = "Your answer:";
    input.readOnly = true;
    input.style.width = 'min-content';
    input.style.paddingLeft = '1rem';
    button.style.display = 'none';
    refresh.innerText = "Refresh the page to play again.";
    refresh.style.color = '#413f3fff';
    refresh.style.fontSize = '1.2rem';
}