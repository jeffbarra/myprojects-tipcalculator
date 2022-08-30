const button = document.querySelector("button"); // This is a TYPE in HTML (no .)
const output = document.querySelector(".output"); // This is a CLASS in HTML (.)
const cost = document.querySelector("input");

button.addEventListener("click", function () {
  let tip = (cost.value * 0.2).toFixed(2);
  let temp = `<h1>The tip on $${cost.value} is $${tip}</h1>`; // Making this h1 header so it is big and bold
  output.innerHTML = temp;
});
