// 1. Đảo ngược 1 chuỗi 
// Ví dụ : "Tôi là A" => "A là Tôi"
function reverseString(str){
    if(!str) return null;
    const newString = str.split(" ");
    newString.reverse();
    console.log(newString.join(" "));
}

reverseString("I am a human");

// 2. Đảo ngược chuỗi bao gồm cả ký tự nữa
function reverseString2(str){
    if(!str) return null;
    const newString = str.split("");
    newString.reverse();
    console.log(newString.join(""));
}
reverseString2("I am a human");

//3. In hoa chữ cái đầu trong 1 chuỗi
function capitalizeWord(word = ""){
    if(word.length == 0) return null;
    let newWord = word.toUpperCase().charAt(0);
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;

}
function capitalizeString(str){
    if(!str) return null;
    const newStr = str.split(" ");
    console.log(newStr.map((value) => capitalizeWord(value)).join(" "));
}

capitalizeString("I am a human");