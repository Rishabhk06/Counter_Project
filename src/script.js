import "./styles.css";

let count = 0;

const value = document.getElementById("value");

//Decrease Functionality
const decreaseButton = document.getElementById("decrease");

decreaseButton.addEventListener("click", decreaseCounter);

function decreaseCounter() {
  console.log("decreaseCounter");
  count--;
  colorChange(count);
  value.innerHTML = count;
}

//Reset
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetCounter);

function resetCounter() {
  console.log("resetCounter");
  count = 0;
  colorChange(count);
  value.innerHTML = count;
}

//Increase
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener("click", increaseCounter);

function increaseCounter() {
  console.log("increaseCounter");
  count++;
  colorChange(count);
  value.innerHTML = count;
}

function colorChange() {
  if (count > 0) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "black";
  } else {
    value.style.color = "red";
  }
}
