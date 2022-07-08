// Ex1. Sao chép mảng dùng vòng lặp for
const numbers = [1,2,3,4,5,6,7,8,9];
let copyArr = [];
for(let i=0; i<numbers.length; i++){
    copyArr.push(numbers[i]);
}
console.log(copyArr);


// Ex2. Đảo ngược từ
let str = "i love you";
let reserveStr = "";
for(let i=str.length-1; i>=0; i--){
    reserveStr += str[i];
}
console.log(reserveStr);


console.log("--- for of ---");
// Chỉ dùng  cho mảng
for(let a of numbers){
    a+=10;
    console.log(a);
}
// Dùng với string
"Hú a ha hà hạ"
for(let a of "Hú a ha hà hạ"){
    console.log(a);
}