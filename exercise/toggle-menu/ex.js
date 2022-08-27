const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", handlerClick);

function handlerClick(event) {
  // event.stopPropagation();
  menuToggle.classList.toggle("fa-times");
  menuToggle.classList.toggle("fa-bars");
  menu.classList.toggle("menu-is-show");
}

document.addEventListener("click", clickOutOfMenu);
function clickOutOfMenu(event) {
  if(!menu.contains(event.target) && !event.target.matches(".menu-toggle")){
  // Nếu như event.target không phải là một element trong menu và không phải là selector menu-toggle thì thực hiện như sau
  // hoặc là bên trên mình dùng stopPropagation thì không cần check điều kiện của menu-toggle
    menu.classList.remove("menu-is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
}

/*=================================================
TỔNG KẾT
node.contains(node): kiểm tra một node có chứa node khác cần xét hay không
node.matches("selector"): kiểm tra node có trùng với selector cần xét hay không
=================================================*/