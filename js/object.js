// Khai báo object
// C1: Object literal => được sử dụng nhiều nhất
const objectLiteral = {};
// C2: Object contructor
const objectConstructor = new Object();


// Ví dụ về object
// key: value
const students = {
    name: "Vung",
    "last-name": "tran", // nêys key được đặt tên có chữa ký tự đặc biệt thì chúng ta phải đặt vào trong dấu nháy kép
    age: 21,
    male: true,
    hi: () => console.log("Chào các bạn")
};


// Truy xuất các phần tử trong object
// Cách 1: Dùng dot notation (dùng dấu chấm)
console.log(students.name);
// Cách 2: Dùng bracket notation ["key"]
console.log(students["name"]);
// Tại sao làm ra 2 cách này như nếu dùng cách 1 với key dạng như "last-name" thì không được nên ta phải sử dụng cách 2



// Thay đổi giá trị của object => trước tiên cần biết key
students.age = 20;
console.log(students);


// Thêm 1 cặp key: value vào trong object
students.isDeverloper = true;
students["con-điên"] = false;
console.log(students);


// Xóa 1 cặp key: value
delete students.name;
delete students["con-điên"];
console.log(students);


//Duyệt qua Object
// for in
for(let key in students){
    // console.log(key); // truy cập key
    // console.log(students[key]); // truy cập value
    console.log(`${key} : ${students[key]}`);
}


console.log("---Các phương thức của Object---")
// Object.key(object) -> Trả về một mảng chứa các key của Object
const keys = Object.keys(students);
console.log(keys);
// Dùng để lấy danh sách các key để xử lý 1 việc gì đó

// Object.values(object) -> trả về một mảng chứa các value của Object
const values = Object.values(students);
console.log(values);

// Objects.entries(object) -> trả về một mảng nested chứa key và value
const entries = Object.entries(students);
console.log(entries); 

// Object.assign(object1, object2, ...) -> gộp nhiều object vào thành một
const a = {
    name: "Vững"
};
const b = {
    age: 21
};
const c = Object.assign(a, b);
console.log(c);
const d = {...a, ...b}; // Dùng spread operator như mảng
console.log(d);

// Object.freeze(object) -> đóng băng object k cho chỉnh sửa key và value trong object
const car = {
    brand: "BMW"
};
const newCar = Object.freeze(car);  // Khi đó newCar đã sao chép nội dung của car nhưng nội dung trong newCar đã bị đóng băng và k sửa được
newCar.brand ="dởm";
console.log(newCar); // brand vẫn là BMW

// Object.seal(object) -> cũng sao chép Object không được thêm nhưng có thể sửa
const user = {
    userName : "Vững"
};
const newUser = Object.seal(user);
newUser.userName = "Tồ"; // đã sửa
newUser.lastName = "Trần Xuân"; // Nhưng k được thêm cặp giá trị key value vào
console.log(newUser);



// Cách sao chép 1 Object
console.log("---Cách sao chép 1 object---");
// Nếu sao chép theo kiểu reference thì khi thay đổi object sao chép thì object gốc cũng thay đổi luôn
const animals = {
    first: "Vịt"
};
const newAnimals = animals;
animals.first = "Gà";
console.log(animals);
console.log(newAnimals); // Cả 2 object đều thay đổi giống nhau

// Clone bằng cách dùng spread operator
const newAnimals1 = {...animals};
animals.first = "Chó";
console.log(animals);
console.log(newAnimals1);

// Dùng Object.assign
const newAnimals2 = Object.assign({}, newAnimals1);
console.log(newAnimals2);

// Với nested Object thì 2 cách trên nó vẫn sao chép được nhưng chỉ dừng ở mức sao chép nếu ta thay đổi giá trị value ở nested object thì tất cả đều thay đổi đồng thời -> vii phạm clone
const user1 = {
    name : "Vung",
    school : {
        name: "THPT",
        address: {
            tinh: "Nam Dinh",
            huyen: "My Loc"
        }
    }
};
const newUser1 = JSON.parse(JSON.stringify(user1)); // đầu tiên biến Object thành chuỗi JSON xong lại  biến đổi ngược lại thành Object
// console.log(JSON.stringify(user1));
newUser1.school.name = "THPT My Loc";
console.log(user1);
console.log(newUser1);


// this key word
console.log("--- this ----");
// this đề cập tới object gần nhất
const students2 = {
    ten : "Vung",
    truong: "THPT", 
    tinh: "Nam Dinh",
    huyen: "My Loc",
    hi: () => {
        console.log(this);
    },
    fullname: {
        name: "Tran Xuan Vung"
    },
};
students2.hi();


/*---------------------------------------------------
+++++++++++++++ OPTIONAL CHAINING +++++++++++++++++++
----------------------------------------------------*/
// Mục đích: Khi chúng ta truy xuất key trong một object mà chúng ta không rõ object có key đó hay không thì ngoài việc sử dụng câu lệnh if để check thì chúng ta có thể dùng optional chaining để check. Cú pháp thể hiện dưới đây:
// => Dùng để check xem object của chúng ta có key chúng ta đang quan tâm hay không ?
console.log(students2?.fullname.name);
// Câu lệnh ở đây có nghĩa là trong object students2 có chứa key fullname hay không, nếu có thì truy xuất key name trong key fullname (cũng là 1 object) của object students2. Mở rộng hơn có thể hiểu code dưới đây:
console.log(students2?.fullname?.name?.ho);


/*---------------------------------------------------
+++++++++++++++ DESTRUCTURING OBJECT ++++++++++++++++
----------------------------------------------------*/
// Định nghĩa: Cho các cặp key-value trong thành các cặp biến-giá trị biến (biến~key; giá trị biến~value)
const vung = {
    ten: "Vung",
    tinh: "Nam Dinh",
    gioitinh: "Nam",
    tuoi: 21,
};
const {ten, tinh, ...rest} = vung;
// Tương tự với code
//const ten = vung.ten;
//const tinh = vung.tinh;
//--rest chính là 1 đối tượng chứa các key và value còn lại và mặc định tên là rest chứ không được đặt tên khác đâu nhá
//--Tình huống áp dụng trong thực tế, ví dụ ta có 1 function :
// function whatIsYourIf(name, age, gender){...}
// Sau này khi chúng ta dùng lại function này chúng ta có nhớ là có 3 tham số truyền vào là name, age và gender nhưng chúng ta không nhớ thứ tự để truyền vào cho nhớ, thông thường chúng ta sẽ tìm lại đúng hơm nhưng nếu vaò 1 dự án lớp nó đến 1 đống code tìm lại rất mất thời gian thì giúp chúng ta giải quyết việc này nhanh gọn như sau:

// CÁCH 1: truyền tham số là object
const person = {
    name: "Vung",
    age: 21,
    gender: "male",
};
function showIf(object){
    console.log(object.name, object.age, object.gender);
}
showIf(person);

// CÁCH 2: truyền tham số là destructuring của 1 object luôn
function showIf2({name, gender, age}){
    console.log(name, age, gender);
}
showIf2(person);





