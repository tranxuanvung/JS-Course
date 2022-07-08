// 1. textContent : nội dung nằm giữa tag (selector) -> nếu có các tag con trong tag ta đang đề cập thì nó sẽ lấy nội dung của tag con đấy luôn chứ không lấy tag con
// nó lấy cả khoảng trắng giữa tag luôn nha
const container = document.querySelector(".container");
// dùng để thay đổi lại nội dung giữa tag được luôn
// container.textContent = "Thay đổi rồi nè";
console.log(container.textContent);



// 2. innerText : cũng tương tự như textContent nhưng nó sẽ khác ở những điểm sau
// + textContent sẽ lấy được cả nội dung của tag con kể cả khi nó có display: none còn innerText không làm được như vậy
// + textContent lấy nội dung theo format của html (khoảng trắng đầu dòng) còn innerText sẽ bỏ qua những thứ đó
// textContent ĐƯỢC SỬ DỤNG NHIỀU NHẤT
console.log(container.innerText);



// 3. innerHTML : lấy nội dung của selector bao gồm cả HTML
// xử lý vấn đề nếu ta muốn thêm nội dung vào giữa selector mà chứa cả HTML
console.log(container.innerHTML);
container.innerHTML = `<div style="color: blue;">Nhìn thấy không hả</div>`;
// Xử lý chỉ có mỗi text thì sử dụng textContent, còn có thêm HTML thì sử dụng innerHTML


