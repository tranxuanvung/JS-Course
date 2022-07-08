// Bai 1

// const yourBirthday = prompt("Nhap vao nam sinh cua ban");
// function getAge(year){
//     const now = new Date();
//     return now.getFullYear() - year;
// }
// alert(`tuoi cua ban la ${getAge(yourBirthday)}`);

// Bai 2

function countdown (minutes = 30){
    let counter = 0;
    const timer = setInterval(() =>{
        counter += 1;
        console.log(counter);
        if(counter == minutes*60){
            clearInterval(timer);
            alert("Ban da het thoi gian lam bai rui nha, nop bai di nhanh len");
        }
    }, 1000);
}

// countdown(0.2);


// Bai 3
function timeSince(date){
    const timePoint =  new Date(date);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - timePoint.getTime()) / 1000);
    console.log(seconds);
    let timer = seconds / 31536000;
    if(timer > 1){
        console.log(`${Math.floor(timer)} nam truoc`);
        return;
    }
    timer = seconds / 2678400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} thang truoc`);
        return;
    }
    timer = seconds / 604800;
    if(timer > 1){
        console.log(`${Math.floor(timer)} tuan truoc`);
        return;
    }
    timer = seconds / 86400;
    if(timer > 1){
        console.log(`${Math.floor(timer)} ngay truoc`);
        return;
    }
    timer = seconds / 3600;
    if(timer > 1){
        console.log(`${Math.floor(timer)} gio truoc`);
        return;
    }
    timer = seconds / 60;
    if(timer >= 1){
        console.log(`${Math.floor(timer)} phut truoc`);
    }else{
        console.log(`${Math.floor(timer*60)} giay truoc`);
    }
    return;
}
timeSince("Wed Oct 27 2021 16:00:21 GMT+0700 (Indochina Time)");
 // 1 nam = 31536000
 // 1 thang = 2678400
 // 1 tuan = 604800
 // 1 ngay = 86400
 // 1 gio = 3600
