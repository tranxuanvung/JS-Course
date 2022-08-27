// 1. document.addEventListener("DOMContentLoaded");
// thứ tự load khi mở 1 trang web html -> css -> js
// sau khi html chạy xong thì nó sẽ chạy câu lệnh trên
document.addEventListener("DOMContentLoaded", function () {
    console.log("html loaded");
    // luôn luôn chạy trước cái thứ 2
});

// 2. window.addEventListener("load");
// web fully loaded
window.addEventListener("load", function(){
    console.log("web loaded");
    // thường mình sẽ viết các chức năng trong đây để chắc chắn web load xong rồi thì mình mới thao tác được
})

