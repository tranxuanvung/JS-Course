const array = [1, 1000, false, null, "evondev", "", undefined, "JS", [1,2,3], NaN];
console.log("--Bài 1--");
// Bài 1: Loại các giá trị falsy ra khỏi mảng và chỉ giữ những giá trị truthy
const filterFalsy = array.filter((value) => Boolean(value));
// Nó sẽ lọc những phần tử trong mảng thỏa mãn khi check với Boolean ra true
console.log(filterFalsy);


console.log("--Bài 2--");
// Bài 2 bỏ những cái mảng lồng trong mảng quy chung về 1 mảng
// key : flatten array
const complexArr = [[1,2,3, [false, null]], [1,5,6, ["JS"]], [888, 666, [90]]];
// Đưa về dạng mảng không chứa các mảng con bên trong
// Dùng một phương thức có sẵn trong mảng
console.log("--- Phương thức flat(number)");
console.log(complexArr.flat(1));
console.log(complexArr.flat(2)); // Kết quả mong muốn vì mảng trên có mảng lồng cấp 2 [ [[a,b]] ]


console.log("--Bài 3--");
// Bài 3: Đảo ngược 1 số nguyên 1234 -> 4321
// Một cách để check dấu của số là số dương hay số âm
// Math.sign(100) trả về 1
// Math.sign(-23) trả về -1
// Number không có những phương thức như string nhưng mà nó có phương thức để convert sang string
function reverseNumber (number){
    // Các bước làm bài này
    // Chuyển number sang String bằng phương thức toString()
    // Sau đó dùng phương thức split("") để chuyển nó thành mảng
    // Dùng phương thức reverse() của mảng để đảo ngược mảng
    // dùng phương thức join("") để chuyển mảng thành String\
    const result = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(result);
}
reverseNumber(-125556);
reverseNumber(234554);



console.log("--Bài 4--");
// Bài 4: Viết phương trình FizzBuzz đầu vào là 1 số nguyên và cho chạy từ 1 đến số nguyên đó
// rồi kiểm tra nếu số chia hết cho 2 thì in ra "Fizz"
// chia hết cho 3 thì in ra "Buzz"
// chia hết cho cả 2 và 3 thì in ra "FizzBuzz
function FizzBuzz(number){
    for(let i=1; i<=number; i++){
        if(i%2==0 && i%3==0) {
            console.log("FizzBuzz");
            continue;
        }
        if(i%2==0){
            console.log("Fizz");
            continue;
        }
        if(i%3==0){
            console.log("Buzz");
            continue;
        }
    }
}
FizzBuzz(10);


console.log("--Bài 5--");
// Bài 5: Viết chương trình đếm số lượng nguyên âm có trong chuỗi
// C1
function checkVowels1(str){
    let arr = str.toLowerCase().split("");
    arr.filter((a) => (a=='u' || a=='e' || a=='o' || a=='a' || a=='i'));
    return console.log(arr.length);
}
checkVowels1("ueoai");

//C2
function checkVowels2(str){
    const vowels = "ueoai";
    let count = 0;
    for (let c of str){
        if(vowels.includes(c)) count++;
    }
    return count;
}
console.log(checkVowels2("ueoai"));


console.log("--Bài 6--");
// Bài 6: Cho một mảng có các gía trị trùng lặp [1,2,2,3,3,3,3,4,5,5] viết hàm để tạo mảng gồm các phần tử duy nhất xuất hiện trong mảng đã cho, ví dụ với đầu ra của mảng trên là [1,2,3,4,5]
function unique(array){
    let result = [];
    for(let i=0; i<array.length; i++){
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    return console.log(result);
}
unique([1,2,2,3,3,3,3,4,5,5]);



console.log("--Bài 7--");
// Viết 1 hàm xử lý 1 mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào
// ví dụ : ([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
function splitArray(array, number){
    let result = [];
    // dùng slice ví dụ slice(0, 3) thì nó chỉ lấy các phần tử có index 0,1,2
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index, index + number));
        index = index + number;
    }
    return console.log(result);
}
splitArray([1,2,3,4,5,6,7], 2);