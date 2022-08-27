const minus = document.querySelector(".counter-decrease");
const plus = document.querySelector(".counter-increase");
const h1 = document.querySelector("h1");
let number;
if (h1) {
  number = parseInt(h1.textContent);
}
if (minus) {
  minus.addEventListener("click", function () {
    if (number > 0) {
      number--;
    }
    h1.textContent = number; // tự convert thành string để gán vào textContent
  });
}
if (plus) {
  plus.addEventListener("click", function () {
    number++;
    h1.textContent = number;
  });
}
