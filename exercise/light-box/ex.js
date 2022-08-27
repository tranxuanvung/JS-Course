/*
<div class="lightbox">
      <div class="lightbox-content">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
          alt=""
          class="lightbox-image"
        />
      </div>
</div>
 */

const images = document.querySelectorAll(".image");
[...images].forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
  const imageSrc = event.target.getAttribute("src");
  const template = `
  <div class="lightbox">
    <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-previous"></i>
        <img
          src="${imageSrc}"
          alt=""
          class="lightbox-image"
        />
        <i class="fa fa-angle-right lightbox-next"></i>
      </div>
  </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", template);
}

let index = 0;
document.body.addEventListener("click", function (event) {
  const lightImage = document.querySelector(".lightbox-image");
  // Nếu light box chưa được show ra thì return
  if(!lightImage) return;
  // Nếu show ra rồi thì lấy ra index của ảnh đang hiện ra trong light box
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightImage.getAttribute("src")
  );
  if (event.target.matches(".lightbox")) {
    event.target.parentNode.removeChild(event.target);
  } else if (event.target.matches(".lightbox-next")) {
    if (index === [...images].length - 1) {
      index = 0;
    } else {
      index++;
    }
    // set lại thuộc tính src cho ảnh của light box
    lightImage.setAttribute("src", [...images][index].getAttribute("src"));
  } else if (event.target.matches(".lightbox-previous")) {
    if (index === 0) {
      index = [...images].length - 1;
    } else {
      index--;
    }
    // set lại thuộc tính src cho ảnh của light box
    lightImage.setAttribute("src", [...images][index].getAttribute("src"));
  }
});
