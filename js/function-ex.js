// ex1
function compare(a = 0, b = 0) {
    if(typeof a !== Number || typeof b !== Number) return 0;
    return Math.max(a, b);
}

console.log(compare("haha"));


// ex2
function toUpperFirstChar(word = ""){
    if(word.length === 0) return null;
    let firstChar = word.toLowerCase().charAt(0).toUpperCase();
    let otherChars = word.toLowerCase().slice(1);
    console.log(firstChar + otherChars);
}

toUpperFirstChar("VUNG");

// ex3

// arrow function
const sum = (a, b) => {
    return a + b;
}
console.log(sum(1, 2));

// rut gon hon nua
const sum2 = (a, b) => a + b;
console.log(sum2(1, 2));