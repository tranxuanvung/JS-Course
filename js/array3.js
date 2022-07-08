// By value vs by referrences
console.log("----by value----");
// by value -> giá trị được lưư trong vùng bộ nhớ\
// ví dụ
const num1 = 2;
const num2 = 2;
console.log(num1 === num2); // true vì giá trị lưu trong vùng bộ nhớ là giống nhau và cùng bằng 1


console.log("----by references----");
// by referrences -> nói tới vùng bộ nhớ thôi
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // flase


// Cách so sánh 2 mảng
console.log("----JSON----")
// JSON : Javascript Object Notation -> dùng đưa dữ liệu vào database
// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON String

/* Cấu trúc của JSON
{
    "key" : value,
    "key" : value,
    "key" : value
}
 */

// So sánh JSON.stringify(value) với toString()
// [1,2,3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3]" -> nó sẽ lưu dạng này vào database
// Vậy muốn lấy từ database mà lấy ra đúng dạng mà ta mong muốn là [1,2,3] thì chúng ta sử dụng phương thức JSON.parse
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log("----JSON.stringify(value) JSON.parse(value)----");
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));

//Khi so sánh 2 mảng để tránh vấn đề by references thì chúng ta chuyển mảng thành dạng JSON String rồi so sánh 2 string đó\
const arrStr1 = JSON.stringify(arr1);
const arrStr2 = JSON.stringify(arr2);
console.log(arrStr1 === arrStr2);


// Cách để clone 1 mảng
// Vì sao lại cần ?
// Ví dụ khi chúng ta thao tác với một mảng sử dụng phương thức pop()
// Khi đó mảng sẽ bị xóa 1 phần tử cuối cùng, nhưng các thao tác tiếp theo mình muốn thao tác với mảng ban đầu thì sao
// Cần clone mảng ban đầu ra vào thao tác trên mảng clone đó
// C1 : sử dụng phương thức slice
const students = ["a", "b", "c"];
const sliceStudents = students.slice();
console.log(sliceStudents);

//C2: Dùng spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);


// Gộp mảng
console.log("-------Gộp mảng------------");
// Dùng concat
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8];
const mergeArr = array1.concat(array2, array3);
console.log(mergeArr);
// Dùng spread operator : clone nhiều mảng gộp thành 1
const mergeArr2 = [...array1, ...array2, ...array3];
console.log(mergeArr2);



console.log("---destructuring array---");
// Khi chúng ta muốn tạo 1 biến từ một phần tử trong mảng thì thường chúng ta sẽ làm như này
const toys = ["doll", "car", "ball", "teddy bear"];
const a = toys[0];
const b = toys[1];
const c = toys[2];
// để code chúng ta clean hơn chúng ta có thể tạo các biến như sau
const [x, y, z] = toys;
console.log(x, y, z);
console.log(a, b, c);
// Khi đó x, y, z cũng tương ứng với các biến a, b, c ở trên


console.log("--- rest parameter ---");
// Như trên ví dụ trên nếu ta dùng rest parameter nó sẽ như sau 
const [m, n, ...t] = toys;
// Khi đó t sẽ là mảng chứa các phần tử còn lại trong toys
console.log(t);
// Khi sử dụng với function
function demoRestParameter(a, ...b){
    console.log(a, b);
}
console.log(demoRestParameter(1,2,3,4,4));




