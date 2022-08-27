function createNotification(title = "Welcome to my website") {
  const template = `
    <div class="noti">
        <img src="https://source.unsplash.com/random" alt="" class="noti-img">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ab</p>
        </div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
const titles = ["Hello buddy", "Have a good day!", "Good morning"];
let lastTitle;
// Sau 5 giây nó bắt đầu chạy vào đoạn code bên trong
// và mỗi lần chạy đoạn code bên trong sẽ tương ứng với 5s
// và cứ thế lặp lại
const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const index = Math.random() * titles.length;
  console.log(index);
  const title = titles[Math.floor(index)];
  if(title !== lastTitle){
      createNotification(title);
  }
  lastTitle = title;
}, 5000);
