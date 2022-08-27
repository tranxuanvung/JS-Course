// Sự kiện keydown: xảy ra khi chúng ta nhấn xuống một phím bất kỳ trên bàn phím
const input = document.querySelector(".input");
input.addEventListener("keydown", function (event) {
    console.log(event.key); // in ra tên nút mà ta nhấn trên bàn phím
    
})
