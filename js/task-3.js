const greetings = document.querySelector("#name-input");
const changeOutput = document.querySelector("#name-output");

greetings.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue) changeOutput.textContent = inputValue
    else changeOutput.textContent = "Anonymous"
});