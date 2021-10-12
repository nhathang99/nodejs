//kiểu dữ liệu động
// string, number, boolean, array, object

//falsy: 0, '', undefined, null, false, NaN
// truthy: còn lại

if (null) {
  console.log(1);
} else {
  console.log(2);
}
//in ra số 2 vì false là 1 falsy mà falsy là in ra else

//cộng chuỗi trong javacript: template literal
const age = 10;
const name = "jenny";
console.log(`my age is ${age} my name is ${name}`);
//string method
//.Length - độ dài string
//.toUppercase() - in hoa
//.toLowercase() - in thường
//.repeat(n) - lặp n lần
//.slice - cắt string
//.substring - lấy chuỗi con
//.substr - lấy chuỗi con
//.trim() - xóa khoảng trắng đầu cuối
//.includes
const str = `hello `;
console.log(str.trim().length);
console.log(str.toLocaleUpperCase());
console.log(str.repeat(5));
//áp dụng repeat
const password = "jenny";
console.log("*".repeat(password.length));

const hello = "hello world";
// lấy 3 kí tự đầu của string
console.log(hello.slice(0, 3));
//.slice(a,b) => lấy chuỗi con từ vị trí index a đến b và không lấy b
//.slice(a) => lấy chuooixx con từ vị trí a đến cuối chuỗi
//lấy 2 kí tự cuối cùng của chuỗi
// giá trị âm thì đánh index từ cuối chuỗi trở về trước
console.log(hello.slice(-2)); // lấy từ vị trí -2 đến cuối chuỗi

// không nhận giá trị âm
console.log(hello.substring(0, 8));
console.log(hello.substring(8, 0));

// .substr từ vị trí số 0 lấy 5 kí tự
console.log(hello.substr(0, 5));

//array

//.push - thêm cuối mảng
// .unshift - add phần từ ở đầu mảng
//.pop - lấy phần tử cuối
// .shift - lấy phần tử đầu
// .slice
// .splice
// .map
// .filter
// .reduce
// .indexOf - vị trí index đầu tiền
// .findIndex
// .find
const arr = [1, 2, 3, 4, 5];
arr.push(100, 200);
console.log(arr.push(100, 200)); // số lượng phần tử
console.log(arr);
arr.unshift(100);
console.log(arr);
console.log(arr.pop()); // trả về giá trị lấy ra
// .splice(start,deleteCount,element)
console.log(arr.splice(0, 2, "hello"));
console.log("new arr", arr);

console.log(arr.indexOf(4));

// function trong js

//function declaration

function getNumber(number) {
  return number;
}
console.log(getNumber(100));

// function expression
//  1 biến làm function -> anonymous function
const print = function (message) {
  console.log(message);
};

//arrow function - es6 - 2015
const addNumber = (a, b) => {
  return a + b;
};
console.log(addNumber(5, 10));
//map: chạy qua từng phần tử của mảng
//map trả về mảng mới có số lượng phần tử bằng mảng cũ
//- giá trị sau return sẽ đc push vào mảng mới
const numbers = [2, 3, 4, 5, 6, 7];
const result = numbers.map((value, index) => {
  return value > 2;
});

console.log(result);
//filter
const numbers2 = [1, 2, 5, 7, 4, 7, 8];
// filter trả về 1 mạng, có thể rỗng []
// nếu giá trị sau return là true thì trả về value

const result2 = numbers2.filter((value, index) => {
  return value > 5;
});
console.log(result2);
