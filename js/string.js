const name = "Vung";
const job = "designer";
const about = `My name is ${name} and I am a ${job}`;
console.log(about);

const myStr = "Frontend Developer";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("e"));
console.log(myStr.split("/"));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Fronte"));
console.log(myStr.endsWith("per"));
console.log(myStr.includes("e"));
console.log(myStr.indexOf("e"));
console.log(myStr.lastIndexOf("e"));
console.log(myStr.replace("e", "E")); // chi thay doi cai dau tien no tim duoc
console.log(myStr.repeat(2));
console.log(myStr.slice(0,8));
console.log(myStr.slice(0));
console.log(myStr.slice(-5));

const a = "  hha   ";
console.log(a.trim());

console.log(myStr.substr(1,5));
console.log(myStr.substring(1,5));

console.log(
    `result : ${
        a.trim().replace("hha", "ahihi do ngoc").toUpperCase()
    }`
);