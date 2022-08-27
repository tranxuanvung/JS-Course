/*============================================
Phân biệt Node và Element
- Node: đề cập đến mỗi phần tử tạo nên cây DOM. Node được chia thành nhiều loại như Document, Element, Document Fragment, tương ứng với từng loại sẽ có các cách xử lý khác nhau. Các thành phần khác cấu tạo nên DOM như: document type, comment, text nodes, xuống hàng, dấu cách cũng được coi là Node
- Element: là một Node được viết bằng cách sử dụng các tag trong HTML Document (hiểu nôm na chính là các thẻ HTML)
============================================== */

/*===============================================
PHÂN BIỆT NODELIST VÀ HTMLCOLLECTION
document.querySelectorAll() -> trả về NodeList
document.getElementByTagName() -> trả về HTMLCollection
+ Giống nhau: giống mảng nhưng không phải mảng
    - có thể truy cập qua index
    - truy cập được phương thức length để lấy độ dài
    - dùng vòng for duyệt qua các phần tử
    - nhưng không dùng được các phương thức của mảng như: map, filter, pop, shift, push
+ Khác nhau:
    - NodeList: có thể dùng forEach để duyệt và thao tác với các phần tử
    - HTMLCollection: không dùng được như trên
+ Mở rộng: Trong 1 số các trình duyệt thì việc NodeList dùng được forEach không được khả thi
=> Chúng ta cũng có thể convert HTMLCollection và NodeList thành Array bằng 2 cách sau đây
    - C1: Array.from(HTMLCollection or Nodelist)
    - C2: [...HTMLCollection] or [...NodeList]
=================================================*/

/*===============================================================================
node.contains(node): kiểm tra một node có chứa node khác cần xét hay không
node.matches("selector"): kiểm tra node có trùng với selector cần xét hay không
================================================================================*/

//  Traversing: Liên quan đến việc truy xuất trong DOM, dựa trên 1 selector truy xuất đến phần tử trước nó, sau nó, phần tử cha, phần tử con
// 1. parentNode & parentElement
// syntax: selector.parentNode & selector.parentElement
// giống nhau: lấy ra phần tử cha gần nhất của selector đang xét
// sự khác nhau: parentElement có thể null, ví dụ ở trường hợp
// - document.documentElement -> lấy ra thẻ html
// - khi đó document.documentElement.parentElement sẽ trả về null vì html là element bậc cao nhất rồi
// - còn document.documentElement.parentNode sẽ trả về #document vì html chưa hẳn là node bậc cao nhất
const span = document.querySelector(".span");
console.log(span.parentNode);
console.log(span.parentElement);
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);


// 2. nextElementSibling & previousElementSibling
// selector.nextElementSibling: truy xuất đến elemet ngay sau cùng cấp với selector đang xét
// selector.previousElementSibling: truy xuất đến element ngay trước cùng cấp với selector đang xét
// nếu không có nó sẽ trả về null
console.log(span.nextElementSibling);
console.log(span.nextElementSibling.nextElementSibling);
console.log(span.previousElementSibling);


// 3. nextSibling & previousSibling
// khác với phương thức bên trên ở chỗ phương thức này trả về node
// selector.nextSibling: truy xuất đến node ngay sau selector đang xét
// selector.previousSibling: truy đến node ngay trước selector đang xét
console.log(span.nextSibling);
console.log(span.previousSibling);


// 4. childNodes & children
// selector.childNodes: trả về 1 NodeList bao gồm các node bên trong, kể cả textNodes (khoảng trắng cũng được coi là textNodes)
/*
<span>
    <strong>haha</strong>
</span>
-> ở ví dụ này NodeList trả về gồm 2 textNodes là khoảng trắng giữa tag mở của thẻ span với tag mở của thẻ strong và khoảng trắng giữa tag đóng của thẻ strong với tag đóng của thẻ span và node strong
 */
// selector.children: trả về HTMLCollection (chỉ bao gồm những thẻ HTML bên trong selector)
console.log(span.childNodes);
console.log(span.children);


// 5. firstChild & firstElementChild
// selector.firstChild: lấy ra node con đầu tiên (node con bao gồm cả textNodes, textNodes cũng có thể là khoảng trắng nữa)
// selector.firstElementChild: lấy ra element con đầu tiên
console.log(span.firstChild);
console.log(span.firstElementChild);


// 6. lastChild & lastElementChild
// selector.lastChild: lấy node con cuối cùng
// selector.lastElementChild: lấy element con cuối cùng
console.log(span.lastChild);
console.log(span.lastElementChild);