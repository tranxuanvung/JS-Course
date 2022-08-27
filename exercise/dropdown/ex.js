const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownText = document.querySelector(".dropdown__selected");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdown = document.querySelector(".dropdown");
const iconCaret = document.querySelector(".dropdown__caret");

dropdownSelect.addEventListener("click", function () {
  if (dropdownList) {
    dropdownList.classList.toggle("show");
    iconCaret.classList.toggle("fa-caret-up");
  }
});

dropdownItem.forEach((item) =>
  item.addEventListener("click", function (event) {
    const text = event.target.querySelector(".dropdown__text").textContent;
    if(text){
      dropdownText.textContent = text;
      dropdownList.classList.remove("show");
      iconCaret.classList.remove("fa-caret-up");
    }
  })
);

document.addEventListener("click", function(e) {
  if(!dropdown.contains(e.target)){
    dropdownList.classList.remove("show");
    iconCaret.classList.remove("fa-caret-up");
  }
})