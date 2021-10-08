// DOM elements
const input = document.getElementById("input");
const count = document.querySelector("#count span");

// variables
let words = 0;
let array = [];

const countWords = () => {
  array = input.value.split(/\s/);
  array[array.length - 1] === "" && array.pop();
  count.textContent = array.length;
};

input.addEventListener("input", countWords);
