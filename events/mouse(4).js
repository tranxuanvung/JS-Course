// const template = `
//     <button class="button">
//       <span>Button</span>
//     </button>
// `;
// document.body.insertAdjacentHTML("afterbegin", template);
// const button = document.querySelector(".button");

// sự kiện với mouse có các loại sau: mousemove, mouseover, mouseenter, mouseleave
// 1. mousemove : di chuyển chuột vào phần tử
// button.addEventListener("mousemove", function () {
//     console.log("mosemove");
// })
// active rất là nhiều


// 2. mouseover: khi di chuột vào phần tử hoặc con của phần tử đó
// button.addEventListener("mouseover", function () {
//     console.log("mouseover");
// })


// 3. mouseenter: chỉ khi di chuột vào phần tử được add sự kiện thì nó mới active, di chuột vào phần tử con thì không active
// button.addEventListener("mouseenter", function () {
//     console.log("mouseenter");
// })


//4. mouseleave: khi di chuyển chuột từ phần tử ra ngoài phần tử
// button.addEventListener("mouseleave", function () {
//     console.log("mouseleave");
// })


// 5. pageX, pageY, clientX, clientY
// page: tọa độ theo documeny
// client: tọa độ theo theo view port
// khi có scroll thì 2 cái trên sẽ khác nhau
// X: tọa độ theo chiều ngang
// Y: tọa độ theo chiều dọc
document.addEventListener("mousemove", function (event) {
  console.log(event.pageY);
  console.log(event.clientY);
})