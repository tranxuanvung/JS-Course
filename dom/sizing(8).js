// 1. offsetWidth, offsetHeight, offsetLeft, offsetTop, offsetParent
const boxed = document.querySelector(".boxed");

console.log(boxed.offsetWidth); // lấy ra độ rộng của phần tử
console.log(boxed.offsetHeight); // lấy ra chiều cao của phần tử
console.log(boxed.offsetLeft); // lấy ra khoảng cách của phần tử so với viền màn hình bên trái
console.log(boxed.offsetTop); // lấy ra khoảng cách của phần tử so với viền màn hình phía trên

console.log(boxed.offsetParent); // lấy ra phần tử cha để lấy những giá trị của phần tử cha


// 2. clientWidth, clientHeight, clientLeft, clientTop
console.log(boxed.clientWidth); // lấy ra độ rộng của phần tử nhưng không tính border
console.log(boxed.clientHeight); // lấy ra độ cao của phần tử những không tính border
console.log(boxed.clientLeft); // lấy ra khoảng cách của phần tử so với viền border-left (như kiểu lấy ra giá trị của border-left z á)
console.log(boxed.clientTop); // lấy ra khoảng cách của phần tử so với viền border-top (như kiểu lấy ra giá trị của border-top z á)


// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
console.log(window.innerWidth); // độ rộng hiển thị của website trên trình duyệt
console.log(window.outerWidth); // độ rộng hiển thị của trình duyệt
console.log(window.innerHeight); // chiều cao hiển thị của website trên trình duyệt
console.log(window.outerHeight); // chiều cao hiển thị của trình duyệt


// 4. selector.getBoundingClientRect() : dùng để lấy ra tọa độ, kích thước của phần tử
// kết quả trả về là một object chứa các thông tin sau
// left, x: vị trí của phần tử so với viền màn hình bên trái
// top: vị trí của khối so với viền màn hình phía trên
// bottom: chiều cao của phần tử cộng với giá trị của top
// right: độ rộng của khối + giá trị của left
// width, height: độ rộng, chiều cao của khối
console.log(boxed.getBoundingClientRect());
// ví dụ về chức năng của phần này: có thể làm cái khi chúng ta rê chuột đến đâu trên thanh menu thì phần note sẽ hiện ra tương ứng -> phải dùng cái này để tính toán



