/* tham so la function */
function add(a, b) 
{
    return a + b; 
}

const sum = add;

function avarage(a, b, fn) {
    const total = fn(a, b);
    return total/2;
}

console.log(avarage(100, 200, sum));

// Anonymous function
let showName = function (){
    console.log("Vung ne !!!");
};

showName();

//IIFE : immediately involked function execution

(function() {
    console.log("Ham nay that dang so !");
})();


// Closure
function sayHello(message){
    return function(name){
        console.log(`${message} ${name}`);
    }
}

let show = sayHello("Minh ten la ");
show("Vung"); // Ket qua se hien ra chuoi "Minh ten la Vung"

// Van de closure lien quan den block scope
function saysomething(){
    let sayHi = "Hello";
    function say(){
        console.log(sayHi);
    }
    return say;
}

let sayNow = saysomething();
sayNow(); // neu theo block scope thi bien sayHi se bi mat khi ham ket thuc nhung do closure nen no van duoc goi tiep