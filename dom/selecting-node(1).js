// 1. DOM là gì ?
// - Viết tắt: Document object model
// - DOM Node: Mọi thành phần tạo nên Dom Tree đều được gọi là 1 node (các thẻ html, textNodes, commentNodes, ...)
// - DOM attribute: thuộc tính của các thẻ html

// 2. Selecting node: truy vấn các node tương ứng với các selectors
// --2.1. document.querySelector("selector") -> nó sẽ trả về 1 node nếu tồn tại và ngược lại nó sẽ trả về null
// - selectors trong css là những cái như: .container, p, #spinner, html, body
// - nếu có nhiều selectors giống nhau thì nó sẽ trả về cái đầu tiên nó tìm được thôi
const singleNode1 = document.querySelector("h2");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".haha");
console.log(singleNode1);
console.log(singleNode2);
console.log(singleNode3);
console.log(singleNode4);

//--2.1 document.querySelectorAll("selector") -> Trả về 1 NodeList (là 1 mảng nhưng không phải mảng) chứa danh sách các node nếu tồn tại, ngược lại nó sẽ trả về empty (NodeList rỗng) (Tìm hiểu thêm về NodeList ở phần traversing)
//- NodeList giống mảng ở chỗ là nó có thể loop qua mảng được(chỉ forEach và vòng lặp thôi nha) còn khác ở chỗ là không dùng được những phương thức của mảng như pop, push, map, filter, ...
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
//- ứng dụng: dùng để duyệt các selectors :)))

//--2.3 document.getElementsByClassName("className") (className không có dấu chấm như selector nha)
//- Kết quả nó trả về là một HTMLCollection (giống các đặc điểm của NodeList bên trên, sự khác nhau chúng ta sẽ bàn đền sau) chứa danh sách các element
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);
//- Người ta hay sử dùng 2 cái trên hơn là cái này hí hí

//--2.4 document.getElementsByTagName("tagName") -> tagName: a, p, ul, li, ...
//- dạng trả về là HTMLCollections
const tagNodes = document.getElementsByTagName("li");
console.log(tagNodes);

//--2.5 document.getElementsById("id") -> ví dụ id là spinner chứ không phải là #spinner đâu nha -> trả về 1 node thôi đúng theo tính chất của id trong html
const idNode = document.getElementById("spinner");
console.log(idNode);

/*---------------------------------------------------
++++++++++++++++++++ SUMMARY1 +++++++++++++++++++++++
----------------------------------------------------*/
// Hay dùng document.querySelector() và document.querySelectorAll() vì nhìn qua chúng ta có thể thấy nó bao gồm 3 cái kia luôn á
// Vì những phương thức này nếu không tồn tại node sẽ trả về null nên chúng ta luôn luôn phải check điều kiện nếu có tồn tại node chúng ta mới tiếp tục xử lý



