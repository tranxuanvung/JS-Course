const now = new Date();
console.log(new Date(0));
console.log(now.getTime());
console.log(now);

// Khoi tao Date Object
console.log(new Date());
console.log(new Date(1635242436370));
console.log(new Date("Tue Oct 26 2021 17:00:36 GMT+0700 (Indochina Time)"));
console.log(new Date(2021, 6, 1, 23, 23, 23, 23));

// Cac ham get
const birthday = new Date(2000, 5, 22);
console.log(birthday.getFullYear());
console.log(birthday.getMonth()); // 0-11
console.log(birthday.getDate()); // in ra ngay cua thang 1-31
console.log(birthday.getDay()); // in ra thu trong tuan 0-6 -> 0 la chu nhat, 1 la thu 2
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getMilliseconds());
console.log(birthday.getTime()) // tinh timestamp cua birthday

// Cac ham set
console.log(`My birthday is ${birthday}`);
birthday.setFullYear(2001);
birthday.setMonth(4);
birthday.setDate(21);
// Khong co set thu vi co ngay thang se tu suy ra thu
birthday.setHours(21);
birthday.setMinutes(21);
birthday.setSeconds(21);
birthday.setMilliseconds(21);
console.log(`My birthday after update is ${birthday}`);


// UTC trong Date : thoi gian theo quoc te, cac ham giong get nhung them UTC
console.log(birthday.getUTCFullYear());

// Cac ham khac trong Date
console.log(now.toDateString()); // no tra ra doan nhu nay : Wed Oct 27 2021
console.log(now.toTimeString()); //nhu nay: 15:18:09 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()) // nhu nay : 10/27/2021
console.log(now.toLocaleDateString("vi-VI")); // nhu nay: 27/10/2021
console.log(now.toISOString()) // theo chuan ISO vi du : 2021-10-27T08:20:29.243Z


// Bai tap Date don gian
const today = new Date("Wed Oct 5 2021 15:28:09 GMT+0700 (Indochina Time)");
console.log(today); // ket qua la 5/10/20121
// Minh muon kq la 05/10/2021 thi phai lam nhu sau
const day = today.getDate();
const month = today.getMonth()+1;
const year =  today.getFullYear();
const prefixMonth = month < 10 ? "0" : "";
const prefixDay = day < 10 ? "0" : "";
console.log(`${prefixDay}${day}/${prefixMonth}${month}/${year}`);


// setTimeout vs setInterval
const timer1 = setTimeout(() => {
    alert("Ban da vao web duoc 3s rui hihi");
}, 3000); // 1s = 1000 mili second
clearTimeout(timer1); // k chay time out nua
const timer = setInterval(() => "call me", 1000);
// clearInterval(timer);