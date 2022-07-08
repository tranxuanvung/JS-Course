// 1. selector.getAttribute("attribute") -> lấy ra giá trị của attribute
// selector ở đây là 1 node chứ không phải 1 node list
// - Attribute (thuộc tính) là tất cả những thứ trong 1 tag (href, src, id, class, style, ...)
const link = document.querySelector(".link");
if(link){
    console.log(link.getAttribute("href"));
}
// Xử lý attribute trên 1 node list
const item = document.querySelectorAll(".item");
if(item){
    item.forEach(i => {
        console.log(i.getAttribute("class"));
    })
}



// 2. selector.setAttribute("attribute", value) -> dùng để set giá trị cho 1 attribute của 1 selector
// (*) 1 ví dụ thực tế của việc sử dụng phương thức này: trong 1 dự án thực tế chúng ta không được can thiệp vào file html nhưng chúng ta được giao phải xử lý vấn đề: khi nhấn vào link thì phải chuyển sang tab mới (trong thẻ a target = "_blank")
const linkLists = document.querySelectorAll("a.link");
linkLists.forEach(i => {
    i.setAttribute("target", "_blank");
})



// 3. selector.removeAttribute("attribute") -> dùng để xóa hẳn 1 attribute của 1 node
const p = document.getElementById("spinner");
p.removeAttribute("style");
// Nếu mà remove 1 thuộc tính không tồn tại thì chương trình cũng không bị ảnh hưởng gì.



// 4. selector.hasAttribute("attribute") -> kiểm tra selector có chứa attribute hay không? (true/ false)
