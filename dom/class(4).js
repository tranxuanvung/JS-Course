// 1. selector.classList.add("abc") : thêm 1 class vào 1 selector (chỉ một class)
const container = document.querySelector(".container");
container.classList.add("is-active");


// 2. selector.classList.remove("abc") : xóa class abc khỏi 1 selector (chỉ 1 class)
container.classList.remove("is-active");
// xóa 1 class không tồn tại cũng không ảnh hưởng đến chương trình


// 3. selector.classList.contains("abc") : kiểm tra selector có chứa class abc hay không (true/ false)


// 4. selector.classList.toggle("abc") : nếu selector chứa class abc rồi thì xóa nó đi còn nếu chưa có thì thêm nó vào

// 5. selector.className -> trả ra chuỗi các class của selector
// cũng có thể sử dụng selector.className = "..." để sửa class của selector ta đang xét
const title = document.querySelector(".title");
console.log(title.className);
title.className = "huhu hihi";
console.log(title.className);


