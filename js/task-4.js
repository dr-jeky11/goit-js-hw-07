const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    if (!(elements.email.value) || !(elements.password.value)) alert("All form fields must be filled in");
    const info = {
        email: elements.email.value,
        password: elements.password.value
    }
    console.log(info);
    event.currentTarget.reset();
}
