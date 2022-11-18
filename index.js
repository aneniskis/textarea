function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const message = document.getElementById("message");

const lineHeight = +window
  .getComputedStyle(message)
  .getPropertyValue("line-height")
  .slice(0, -2);

const setMinRow = 3;
const maxRow = 10;
const setRows = message.setAttribute("rows", `${setMinRow}`);
const minRow = +message.attributes.rows.value;
const initialHeight = message.scrollHeight;
const maxHeight = initialHeight + (maxRow - minRow) * lineHeight;

message.addEventListener("input", (e) => {
  message.style.height = "auto";
  const inputValue = message.value;
  const dublicateValue = inputValue
    .split("")
    .map((elem) => {
      return typeof elem === Number ? elem : rand(0, 9);
    })
    .join("");
  message.value = dublicateValue;

  if (message.scrollHeight <= maxHeight) {
    message.style.height = `${message.scrollHeight}px`;
    message.classList.add("hidden");
  } else {
    message.style.height = `${maxHeight}px`;
    message.classList.remove("hidden");
  }
});
