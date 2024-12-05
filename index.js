const inputName = document.getElementById("userInput");
const inputNameText = inputName.value;
const resultName = document.getElementById("userName");
function update() {
  resultName.textContent = inputNameText;

}
inputName.addEventListener('input', (event) => {
    resultName.textContent = `hello ${event.target.value}`;
    console.log(`Input changed to: ${event.target.value}`);
});