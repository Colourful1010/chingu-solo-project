const label = document.getElementById("label");
const input = document.getElementById("number-input");
const randomNumber = Math.floor(Math.random() * (50-50+1)+5);
var output = document.getElementById("output");
var  refresh = document.getElementById("refresh");
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
    input.style.width = '1.55rem';
    input.style.paddingLeft = '1rem';
    button.style.display = 'none';
    refresh.innerText = "Refresh the page to play again.";
    refresh.style.color = '#413f3fff';
    refresh.style.fontSize = '1.2rem';
}