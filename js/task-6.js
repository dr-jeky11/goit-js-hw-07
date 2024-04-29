function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input[type]");
const createBtn = document.querySelector('button[data-create');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesArea = document.querySelector("#boxes")

createBtn.addEventListener("click", () => {
  const qty = userInput.value;
  if (qty <= 100 && qty >= 1) {
    createBoxes(qty);
    userInput.value = "";
  } else {
    alert("Between 1 and 100");
  }
});

function createBoxes(qty) {
  boxes.innerHTML = "";
  const boxesArray = [];
  let boxSize = 30;
  for (let i = 0; i < qty; i++) {
    boxesArray.push(
      `<div style='background-color: ${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px; margin-right:44px'></div>`
    );
    boxSize += 10;
  }
  boxes.innerHTML = boxesArray.join("");
}

destroyBtn.addEventListener("click", () => boxes.innerHTML = "");