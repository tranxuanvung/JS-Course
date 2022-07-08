// slice()
const animals = ["hổ", "gà", "voi", "khỉ"];


// C1: slice()
console.log("-----------------------slice---------------------");
const animals2 = animals.slice();
console.log(animals2);
console.log(animals);

// C2: slice(start) trong đó start là vị trí mình muốn lấy từ index có giá trị start đến phần tử cuối cùng trong mảng
console.log("-----------------------slice(start)---------------------");
const animals3 = animals.slice(2);
console.log(animals3);
console.log(animals);

console.log("---------------------slice(start, end)-------------------");
// C3: slice(start, end): tạo 1 mảng mới với những phần tử có index từ start tới end-1 của 1 mảng khác
const animals4 = animals.slice(1,3); // lấy phần tử 1 và 2
console.log(animals4);
console.log(animals);

// Tổng kết: Tạo mảng mới bằng cách sử dụng slice từ 1 mảng khác thì mảng đó không bị ảnh hưởng 


// splice
const pets = ["mèo", "chó", "hamster", "thằn lằn"];

// splice(start) : giống hệt slice("start")
console.log("-----------------------splice(start)---------------------");
const pets1 = pets.splice(1);
console.log(pets1);
console.log(pets); // Chỗ này do mảng pets1 đã lấy 3 phần tử cuối nên mảng pets chỉ còn lại mỗi "mèo"

// splice(start, Count) : Count là số lượng phần tử muốn lấy bắt đầu từ vị trí index = start
console.log("-----------------splice(start, Count)-----------------");
const pets2 = ["mèo", "chó", "hamster", "thằn lằn"];
const pets3 = pets2.splice(0, 3); // Mảng pets3 sẽ chứa những phần tử đã lấy
console.log(pets3);
console.log(pets2); // Mảng pets2 sẽ chứa những phần tử còn lại

// splice(start, Count, item1, item2, ...)
console.log("-----------splice(start, Count, item1, item2, ...)----------");
const pets4 = ["mèo", "chó", "hamster", "thằn lằn"];
const pets5 = pets4.splice(0, 1, "chim gáy", "khủng long"); // mảng pets5 sẽ chứa một phần tử lấy từ vị trí index bằng 0, sau phần tử đã bị lấy ở mảng gốc sẽ được thay thế bởi 2 phần tử "chim gáy" và "thằn lằn"
console.log(pets4); // Chứa phần tử còn lại không bị ảnh hưởng và phần tử mới được thay thế
console.log(pets5); // chứa phần tử bị xóa


/*Sort*/
console.log("-----------Sort----------");
const random = [1, 9999, 10, 5, 09]; 
console.log(random.sort()); //[1, 10, 5, 9, 9999]
// Vì sao lại ra kết quả như trên ? Vì hàm sort sắp xếp theo chuẩn unicode-16 thì nó sẽ so sánh chữ cái đầu tiên của các phần tử nếu bằng nhau thì nó sẽ so sánh tiếp chữ thứ 2
// ví dụ 10 và 5 thì nó sẽ lấy 1 so sánh với 5 theo chuẩn unicode-16
// và đương nhiên theo chuẩn 1 sẽ đứng trước 5 vì vậy nó sẽ cho 10 đứng trước 5
// Khi chúng ta muốn sắp xếp mảng số thì sẽ khắc phục bằng cách viết function callback trong sort
const random1 = random.sort(function(a,b){ // sắp xếp theo chiều tăng dần
    if(a > b) return 1; // Trả về 1 thì thực hiện đổi vị trí a,b cho nhau
    if(a < b) return -1; // giữ nguyên vị trí a, b không thay đổi
});
console.log(random1);

// Viết callback rút gọn hơn
const random2 = random.sort((a,b) => a>b ? 1 : -1);
console.log(random2);


/*Find*/
console.log("-----------Find----------");
const numbers = [1, 9999, 10, 5, 09];
const yourNumber = numbers.find((element) => element > 10);
console.log(yourNumber); // Số đầu tiên trong mảng numbers lớn hơn 10
// Nếu không tìm thấy phần tử nào thỏa mãn điều kiện thì nó sẽ trả ra kết quả là undefine
// Find sẽ trả về kiểu dữ liệu của phần tử tìm được


/*Findindex - giống find nhưng thay vì trả về giá trị thì nó trả về index*/
console.log("-----------FindIndex----------");
const yourIndex = numbers.findIndex((element) => element > 10);
console.log(yourIndex);


/*Map: duyệt mảng trả ra một mảng mới mà không thay đổi mảng ban đầu */
console.log("-----------Map----------");
const listNumber = [1,2,3,4,5];
// Dùng map để tạo ra mảng mới từ mảng listNumber trong đó mỗi phần tử trong listNumber tăng lên x2
const listNumberDouble = listNumber.map((value, index) => value*2);
console.log(listNumberDouble);
// Dùng map để tạo ra mảng mới từ mảng listNumber trong đó mỗi phần tử có index chẵn trong listNumber tăng lên x2
const listNumberDouble1 = listNumber.map((value, index, array) => index%2 == 0 ? value*2 : value); // array ở đâu chính là listNumber
console.log(listNumberDouble1);

// Sự khác nhau giữa map và forEach
// 1: map có return và forEach thì không
// 2: map trả về mảng mới dựa trên mảng ban đầu và forEach cũng không nốt
// 3: forEach không có return nên nó không thể dừng

console.log("-----------filter----------");
/*Tìm hiểu phương thức filter (Lọc các phần tử trong mảng thỏa một điều kiện gì đó)*/
// Tạo mảng từ mảng listNumber mà chứa những phần tử lớn hơn 3 trong mảng đó
const greaterThanThree = listNumber.filter((value, index, array) => value > 3);
console.log(greaterThanThree);
// Filter trả về 1 mảng



/*Some và every */
// đều trả về falsy và truly
console.log("--array some--");
// Trả về true khi thỏa mãn một điều kiện và ngược lại
const someNumber = listNumber.some((value) => value > 3); // check xem mảng đang xét có giá trị lớn hơn 3 hay không
console.log(someNumber);

console.log("--array every--");
// Mọi phần tử đều phải thỏa điều kiện, chỉ cần có 1 cái sai là trả  về false
const everyNumber = listNumber.every((value) => value>3);
console.log(everyNumber);


console.log("--Phương thức reduce--");
// Gom các phần tử trong mảng về 1 giá trị
// Ví dụ tính tổng các phần tử trong mảng
const totalNumber = listNumber.reduce((a, b) => a+b, 0); // 0 là giá trị khởi tạo ban đầu
console.log(totalNumber);