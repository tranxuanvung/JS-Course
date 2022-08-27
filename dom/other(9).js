// 1. document.title : truy xuất đến nội dung của thẻ <title>
console.log(document.title);
// chúng ta cũng có thể thay đổi title bằng JS
document.title = "Welcome to my website";
console.log(document.title);


// 2. document.head : truy xuất đến thẻ head
// mục đích: dùng khi mà chúng ta không được can thiệp vào file HTML, nhưng task yêu cầu phải sửa một số thứ trong thẻ head
// có một cách nữa để truy cập đến thẻ head là dùng: document.getElementByTagName("head")
// chú ý là getElementByTagName trả về một HTMLCollection nên nhớ thao tác thêm việc truy xuất đến phần tử đầu tiên của HTMLCollection


// 3. Node1.insertBefore(Node2, Node3);
// Ý nghĩa: ta sẽ chèn Node2 vào ngay trước Node3, trong đó Node3 là Node con của Node 1
const template = `
<p>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
<h3>Xin chao moi nguoi</h3>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
`;
document.body.insertAdjacentHTML("afterbegin", template);

// Nếu thêm một Node mới chưa xuất hiện trong DOM thì không có vấn đề gì
const div = document.createElement("div");
document.body.insertBefore(div, document.querySelector("h3"));

// Nếu Node2 là 1 Node đã tồn tại trong DOM thì nó sẽ chuyển Node đó lên vị trí chúng ta muốn chèn
document.body.insertBefore(document.querySelector("ul"), document.querySelector("h3"));
// Điều đó cũng xảy ra với các phương thức insertAdjacent -> CẦN CHÚ Ý
document.body.insertAdjacentElement("afterbegin", document.querySelector("ul"));



// 4. node.replaceChild(newnode, oldnode);
const h1 = document.createElement("h1");
h1.textContent = "Hello";
document.body.replaceChild(h1, div);


// Thực hành convert HTMLCollection or NodeList ra mảng
const hc = document.getElementsByTagName("li");
console.log(Array.from(hc));
console.log([...hc]);
[...hc].forEach(i => {
    console.log(i);
})


// Truy vấn đến những thẻ html duy nhất
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title