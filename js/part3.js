// Number(value)
console.log(Number(5.5)); //5
console.log(Number(5)); //5
console.log(Number(NaN)); //NaN
console.log(Number("abcdef")); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0 vi null la gia tri falsy
console.log(Number(false)); //0 vi false la gia tri falsy
console.log(Number(true)); //0 vi true la gia tri truthy
console.log(Number("")); //0 vi "" la gia tri falsy


// String(value) don gian la chuyen het qua String


//Boolean(value) => true or false tuong ung gia tri truthy va falsy


// type coersion
console.log(5 >= 1);
