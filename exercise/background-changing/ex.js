const button = document.querySelector(".button");
const colors = ["#ffa400", "#00aefd", "#07a787", "#2979ff"];
let color;
function changeColor(){
    let value;
    while(1){
        value = colors[Math.floor(Math.random() * colors.length)];
        if(value != color){
            document.body.style.backgroundColor = value;
            break;
        }
    }
    color = value;
}
button.addEventListener("click", changeColor);