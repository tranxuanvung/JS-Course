const template = `
    <a href="https://youtube.com" class="link">Bấm vào đây</a>
    <button class="button">
      <span>Button</span>
    </button>
`;
document.body.insertAdjacentHTML("afterbegin", template);

const button = document.querySelector(".button");
// C1: viết trực tiếp function vào handler
// button.addEventListener("click", function(){
//     console.log("You clicked");
// })
// C2: truyền function vào handler
function handleClick() {
  console.log("Click button");
}
// Khi truyền function chỉ truyền tên function, nếu truyền function() như này nó sẽ thực hiện function trước khi sự kiện được kích hoạt
// button.addEventListener("click", handleClick()); -> như này là sai
// button.addEventListener("click", handleClick); // như này mới đúng
// button.addEventListener("click", handleClick, { capture: true });



// 2. Vấn đề bubbling
// ví dụ về sự kiện click: khi đối tượng ta click có sự kiện click mà những đối tượng cha bao ngoài nó cũng có sự kiện click thì nó sẽ chạy sự kiện click từ con đến cha
const span = document.querySelector(".button span");
// span.addEventListener("click", function(){
//     console.log("click span");
// })

// ở đây thì khi nhấn click vào chữ button thì nó sẽ chạy sự kiện click của thẻ span rồi nó tiếp tục chạy sự kiện click của thẻ button bao ngoài
// để ngăn chặn chúng ta làm như sau

// span.addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("click span");
// })

// nếu có thêm một sự kiện click nữa như này thì stopPropagation không chặn được

// span.addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("click span 2");
// })

// để chặn được 1 element có nhiều sự kiện thì ta phải dùng stopImmediatePropagation và phải đặt ở sự kiện trên cùng của element
// span.addEventListener("click", function(e){
//     e.stopImmediatePropagation();
//     console.log("click span");
// })
// span.addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("click span 2");
// })

// lúc này khi click vào span thì nó chỉ chạy sự kiện có phương thức stopImmediatePropagation



// 3. Vấn đề capturing: nó ngược lại với bubbling thay vì từ con đến cha thì nó sẽ từ cha cấp cao nhất đến con
// để kích hoạt thì tham số thứ 3 trong phương thức addEventListener ta điền như sau và tất cả các sự kiện của các element đều phải bật capture thì mới được
// ví dụ:
span.addEventListener(
  "click",
  function () {
    console.log("click span");
  },
  {
    capture: true,
  }
);
// các phương thức stopPropagation và stopImmediatePropagation vẫn áp dụng giống bubbling



// 4. target vs currentTarget
button.addEventListener("click", function (event) {
  console.log(`event.target: ${event.target}`);
  console.log(`event.currentTarget: ${event.currentTarget}`);
  // trong button có chứa thẻ span
  // nếu mình click vào vùng button thì : target và currentTarget đều trả về element button
  // nhưng khi mình click vào vùng span thì: target trả về element span còn currentTarget trả về element Button
  // chúng ta có thể kết luận: target sẽ trả về đối tượng chính xác mà mình click tới, còn currentTarget luôn trả về đối tượng gọi ra sự kiện này
});



// 5. event.preventDefault() & style object

const link = document.querySelector(".link");
// link.addEventListener("click", function(){
//     console.log("Click link");
// })

// Mặc định thẻ a đã có sự kiện khi click nó sẽ dẫn đến trang web với đường link trong href rồi
// Vậy khi ta code như trên nó vẫn chạy code trong function nhưng ngay sau đó nó sẽ chạy đến trang web có đường link trong href
// để tắt sự kiện mặc định đi chúng ta dùng preventDefault() như sau

link.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.style.color = "red";
  // style là một object trong đó chứa các thuộc tính css
  // thay vì thuộc tính nhiều hơn 1 chữ được nối với nhau bởi dấu "-" thì sẽ chuyển thành viết dưới dạng camelCase
  // ví dụ: backgroundColor
});



// 6. custom attribute
// là attribute mà chúng ta tự thêm vào
// cú pháp data-...
// ví dụ sau
const template1 = `
  <a href="https://youtube.com" class="custom1" data-name="hihi">custom 1</a>
  <a href="https://youtube.com" class="custom2" data-name-abc-efg="hoho">custom 2</a>`;
document.body.insertAdjacentHTML("beforeend", template1);
const custom1 = document.querySelector(".custom1");
const custom2 = document.querySelector(".custom2");
// các cách truy xuất custom attribute
// C1: dùng chung
console.log(custom1.getAttribute("data-name"));
console.log(custom2.getAttribute("data-name-abc-efg"));
// C2: dành riêng cho custom attribute
console.log(custom1.dataset.name);
console.log(custom2.dataset.nameAbcEfg);
// chú ý tên custom attribute mà dài khi truy xuất qua dataset phải chuyển sang dạng camelCase