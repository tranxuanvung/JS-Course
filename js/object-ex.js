// Bài 1: Viết 1 function đầu vào có phải là object hay không ?
//!!! Chú ý
// TRẢ VỀ CỦA typeof LÀ DẠNG STRING NHA
// Như chúng ta đã học thì khi dùng typeof thì những kiểu dữ liệu sau đây sẽ đều trả về kiểu dữ liệu object
// - array
// - object
// - null
// => Điều kiện sẽ chặt hơn nữa là thêm điều kiện nó không phải là mảng và khác null là xong
function isObject(value){
    if(typeof(value) === "object" && !Array.isArray(value) && value != null){
        return true;
    }
    return false;
}

console.log(isObject({a: 10,}));


// Bài 2: Viết 1 function trả về một mảng chứa các nested array, mỗi nested array tương ứng với một cặp key và value
//{a: 1, b: 2} -> [["a",1], ["b", 2]]
function objectToArray(object){
    if(!isObject(object)) return;
    // // C1: sử dụng phương thức có sẳn của object : Object.entries(a)
    // return Object.entries(object);

    // //C2: Sử dụng phương thức của object : Object.keys(a) -> Trả về một mảng các keys của object a
    // return Object.keys(object).map(key => [key, object[key]]);

    // C3: Dùng vòng lặp xét qua object
    let result = [];
    for(let key in object){
        // hasOwnProperty(key) : dùng để kiểm tra object có chứa key này hay không ? Nếu chứa thì trả về true và ngược lại
        if(object.hasOwnProperty(key)){
            result.push([key, object[key]]);
        }
    }
    return result;

}
console.log(objectToArray({ten: "Vung", tuoi: 21}));



// Bài 3: ({a: 1, b: 2}, 'a') -> {b: 1}
function without(object, ...key){
    // key sẽ là một mảng các tham số
    const newObj = {...object}; // Chúng ta clone object truyền vào để thao tác trên object clone này để đỡ ảnh hưởng đến object truyền vào => clone mảng sẽ là [...a] (a-tên mảng)
    key.forEach(element => {
        delete newObj[element]; // lệnh delete này sẽ xóa cặp giá trị key-value của object ứng với key tương ứng và thay đổi object luôn
    });
    return newObj;
}

console.log(without({a: 1, b: 2, c: 3}, "a", "b"));


//Bài 4: Viết function kiểm tra xem 2 object truyền vào có bằng nhau hay không
function isEqualObject(object1, object2){
    // check keys length of two objects
    const a = Object.keys(object1);
    const b = Object.keys(object2);
    if(a.length !== b.length) return false;
    // equal values of two objects
    const result = a.every(item => object1[item] === object2[item]);
    return result;
}
console.log(isEqualObject({d: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}));




/*---------------------------------------------------
++++++++++++++++++++ SUMMARY ++++++++++++++++++++++++
----------------------------------------------------*/
/*
1. Kiểu trả về của typeof() là một chuỗi
2. typeof(a) = "object" thì a có thể là: Object, Array và null
3. Viết được hàm kiểm tra xem dữ liệu đầu vào có phải là object dạng {key: value} hay không
4. Biết được những cách chuyển 1 object thành nested array
5. rest parameter: mảng chứa các tham số đầu vào
6. spread operator trong clone mảng và object
8. map thì sẽ duyệt mảng và trả về mảng mới còn foreach chỉ duyệt qua mảng chứ không trả về 1 mảng mới
9. Duyệt mảng bằng every nó sẽ trả về true nếu tất cả điều kiện đều thỏa mãn
*/