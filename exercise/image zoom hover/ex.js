window.addEventListener("load", function () {

  const imageCover = document.querySelector(".image-cover");
  // Gán sự kiện vào imageCover
  imageCover.addEventListener("mousemove", handleHoverImage);
  imageCover.addEventListener("mouseleave", handleLeaveImage);

  const imageWrapper = document.querySelector(".image-wrapper");

  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;

  const image = document.querySelector(".image");

  function handleHoverImage(e) {
    const {top, left} = e.target.getBoundingClientRect();
    // convert giá trị pageX và pageY chạy từ 0
    const pX = e.pageX - left;
    const pY = e.pageY - top;
    
    // đưa kích thước image về kích thuớc thực tế
    image.style = "width: auto; height: auto; max-height: unset;";

    // Lấy kích thước thực tế của ảnh
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    
    // Tính toán tỷ lệ phóng to hình theo tọa độ đã được viết trong ghi chú
    let x = pX * (imageWidth - imageWrapperWidth) / imageWrapperWidth;
    let y = pY * (imageHeight - imageWrapperHeight) / imageWrapperHeight;

    // Nếu css lúc đầu có transform thì nên tắt đi, set tọa độ theo ảnh kích thước 
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
  }

  function handleLeaveImage(e){
    image.style = ``;
  }
});
