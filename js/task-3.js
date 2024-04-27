const greetings = document.querySelector("#name-input");
const changeOutput = document.querySelector("span#name-output");

greetings.addEventListener("input", handleInput);

function handleInput(event) {
    changeOutput.textContent = event.target.value.trim();
    if (!event.target.value) changeOutput.textContent = "Anonymous"
    // else if (event.target.value === ) changeOutput.textContent = "Anonymous"
}