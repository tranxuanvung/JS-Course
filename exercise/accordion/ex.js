/*==============================================
TIPS
- khi một node có những node con bên trong khi áp dụng sự kiện click cho node cha muốn event.target dù click vào node con thì vẫn target vào node cha thì ta áp dụng thuộc tính css sau cho các node con:
pointer-events: none;
- từ node cha có thể dùng querySelector để truy xuất đến node con -> dùng tron trường hợp có những node có node con giống nhau
===============================================*/
const accordions = document.querySelectorAll(".accordion");
[...accordions].forEach(item => item.addEventListener("click", handlerAccordion));
function handlerAccordion(e){
    const content = e.target.nextElementSibling;

    // Phải set chiều cao trước rồi mới active thì nó mới áp dụng transition
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle("is-active");
    if(!content.classList.contains("is-active")){
        content.style.height = "0px";
    }

    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}