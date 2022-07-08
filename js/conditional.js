// alert("You!!!");
// const yourName = prompt("Ten nguoi yeu cua ban la: ", "Vung");
// console.log(yourName);
// const answer = confirm("Ban yeu toi dung khong");
// console.log(answer);


// tenary operator
const yourAge = 12;
let message = "";

// message = yourAge >= 18 ? "You are adult" : "You are still child";
// console.log(message);

message = yourAge >= 18 ? "You are adult" : yourAge<=10 ? "You are still child" : "You are teenager";
console.log(message);