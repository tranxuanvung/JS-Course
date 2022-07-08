// Phương thức trong mảng hay dùng
const student = ["ha", "hô", "hi", "hí", "há"];
console.log(student.length);

// reverse: đảo ngược giá trị trong mảng
// mảng gốc sau khi đảo ngược sẽ bị ảnh hưởng (nên clone trước khi đảo)
console.log(student.reverse());

// join : nối các phần tử trong mảng thành string
console.log(student.join()); // Nối các phần tử trong mảng thành chuỗi ngăn cách nhau bằng dấu phẩy
console.log(student.join(" ")); // Nối các phần tử trong mảng thành chuỗi ngăn cách nhau bằng dấu cách

// include: Kiểm tra mảng có chứa phần tử truyền vào hay không
console.log(student.includes("hi")); // trả về true or false

//indexOf: trả về index của phần tử truyền vào mà xuất hiện đầu tiên trong mảng
console.log(student.indexOf("hí"));

//lastIndexOf : trả về index cuối cùng của phần tử truyền vào so với phần tử trong mảng
console.log(student.lastIndexOf("hi"));

// push: thêm phần tử vào cuối mảng
console.log(student.push("hề"));// thêm phần tử và trả về độ dài mảng
console.log(student);

// unshift: thêm phần tử vào đầu mảng
console.log(student.unshift("híhí")); // thêm phần tử và trả về độ dài mảng
console.log(student);

//pop: xóa phần tử cuối cùng trong mảng
console.log(student.pop()); // trả về phần tử cuối cùng và xóa phần tử cuối cùng trong mảng
console.log(student);

//shift: xóa phần tử đầu trong mảng
console.log(student.shift()); // trả về phần tử đầu tiên và xóa phần tử đầu tiên trong mảng
console.log(student);