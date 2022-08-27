// 1. insertAdjacentText : chèn 1 textNodes
// syntax: selector.insertAdjacentText("position", "text");
// text: chuỗi ta chuyền vào
// position: beforebegin, afterbegin, beforeend, afterend
// ví dụ:
/**
 * <body>
 *      -beforebegin-
 *      <h3>
 *          -afterbegin-
 *          <span></span>
 *          -beforeend-
 *      </h3>
 *      -afterend-
 * </body>
 */
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "beforebegin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");
// Dùng chèn text vào những vị trí xác định chứ không mặc đinhj giữa 2 tag như textContent


// 2. selector.insertAdjacentElement("position", element);
// dùng để chèn một element theo vị trí xác định dựa trên selector đang xét
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("afterend", strong);


// 3. selector.insertAdjacentHTML("position", string HTML);
// khá giống innerHTML nhưng nó mở rộng hơn là sẽ chèn vào vị trí xác định theo selector đang xét
const template = `
<ul class="menu">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
`;
document.body.insertAdjacentHTML("beforeend", template);


