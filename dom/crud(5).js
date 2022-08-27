// Thêm, xóa, sửa node trong javascript

// 1. Tạo element trong JS: document.createElement("tag html");
const div = document.createElement("div");

// 2. selector.appendChild
// Lấy node body có 2 cách
// C1: document.body
// C2: document.querySelector("body");
const body = document.body;
body.appendChild(div);
// Giờ div đã trong body nên tùy chỉnh gì nó cũng sẽ tự cập nhật
div.classList.add("container");
div.className = "container abc";
div.textContent = "kjsdfbsdfdjfhdsjfhdsfdsfhsdfhdsfsdfsdkj";
div.innerHTML = `<div class="content"><h3>abc</h3></div>`;


// Bài tập thêm
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
cardImage.classList.add("card-image");
cardImage.setAttribute("src", "https://source.unsplash.com/random");
card.appendChild(cardImage);
body.appendChild(card);


// 3. document.createTextNode("...") : mục đích của nó đơn giản là tạo ra text thôi, nhưng bản thân cái text đó cũng được coi là 1 node
const text = document.createTextNode("Xin chao ca nha yeu cua kem");
const h1 = document.createElement("h1");
h1.appendChild(text);
body.appendChild(h1);


// 4. selector.cloneNode(truthy/flasy); 
// truthy: copy cả nội dung bên trong selector
// falsy thì không copy nội dung bên trong, nội dung trong cloneNode là rỗng
const h1Clone = h1.cloneNode(1);
body.appendChild(h1Clone); 


// 5. selector.hasChildNodes(): kiểm tra xem selector có chứa node con hay không
console.log(h1.hasChildNodes());


// 6. selector.parentNode.removeChild(selector)
// đầu tiên phải trỏ đến phần tử cha của phần tử ta muốn xóa, sau đó mới dùng removeChild được
h1.parentNode.removeChild(h1);
// cũng có thể dùng selector.remove() để xóa selector đang xét luôn nhưng không được nhiều trình duyệt hỗ trợ -> cách trên được sử dụng phổ biến hơn
