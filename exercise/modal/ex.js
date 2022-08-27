const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});

// Chúng ta có thể thêm sự kiện và body và dùng event.target để query đến những element sinh ra sau
document.body.addEventListener("click", function(e){
  if(e.target.matches(".modal-close")){
    const modal = e.target.parentElement.parentElement;
    modal.parentElement.removeChild(modal);
  } else if(e.target.matches(".modal")){
    e.target.parentElement.removeChild(e.target);
  }
})
