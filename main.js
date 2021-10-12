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
// filter trả về 1 mảng, có thể rỗng []
// nếu giá trị sau return là true, push value vào mảng mới

const result2 = numbers2.filter((value, index) => {
  return value > 5;
});
// lần chạy 1: value  =2, false
console.log(result2);

// .reduce

const numbers3 = [1, 2, 3, 4];
// TH1: k có giá trị initialvalue, lc1- acc = arr[0], val= arr[1] giá trị sau return sẽ đc tích trữ vào biến acc
// --> giá trị sau cùng của acc là 1 giá trị trả về của reduce
// TH2: có giá trị initialvalue value, lc1 acc = initialvalue, val = arr[0] giá trị sau return sẽ đc tích trữ vào biến acc

const sum = numbers3.reduce((acc, val, index) => {
  return acc + val;
});
console.log(sum);

const users = [
  {
    id: 1,
    balance: 10,
    salary: 1000,
    age: 18,
  },
  {
    id: 2,
    balance: 30,
    salary: 2000,
    age: 18,
  },
  {
    id: 3,
    balance: 40,
    salary: 3000,
    age: 18,
  },
];

// tổng balance của các users = 80

const totalBalance = users.reduce((acc, val) => {
  return acc + val.balance;
}, 0);
console.log(totalBalance);
//Nếu k có initialvalue thì acc là 1 object + val.balance(10)

// indexOf - tìm vị trí xuất hiện đầu tiên
const courses = [1, 3, 4, 1, 100];
console.log(courses.indexOf(1, 1));

// findIndex nhận vào 1 function
console.log(
  courses.findIndex((val) => {
    return val === 3;
  })
);

const person = [
  { id: 1, age: 18, name: "mary" },
  {
    id: 2,
    age: 19,
    name: "jenny",
  },
];
// tìm person age = 19
const idx = person.findIndex((val, idx) => val.age === 19);
if (idx !== -1) {
  console.log(person[idx].name);
} else {
  console.log("không có nguoi nao");
}
// tìm luôn object đó
const persons = person.find((val, i) => val.age === 18);
console.log(persons);

// tính tổng salary các user có giá trị age >=18
const totalSalary = users.reduce((acc, val) => {
  //   if (val.age === 18) {
  //     return acc + val.salary;
  //   }
  var sala = val.age === 18 ? acc + val.salary : "";
  return sala;
}, 0);

console.log("salary", totalSalary);

const people = {
  name: "ti", // key : value
  age: 10,
};
console.log(people["name"]);
console.log(people.name);

// kiểm tra key có trong object hay không
console.log("name" in people);

// lấy mảng các keys

console.log(Object.keys(people));
console.log(Object.values(people));

// setTimeout
//đợi 2s rồi mới chạy ra hello
setTimeout(() => {
  console.log("hello");
}, 2000);

// setInterval cứ 2s chạy hello 1 lần
let time = 1;
const interval = setInterval(() => {
  if (time === 10) {
    clearInterval(interval);
  } else {
    console.log("time:", time);
    time++;
  }
}, 2000);

// chuyển từ string sang number
const a = "5";
console.log(+a);
const b = 5;
console.log(a + "");

// spread operator ...

//reference type
const add = (a, b, c) => {
  console.log(a + b + c);
};
const arr1 = [1, 2, 3];
add(...arr1);

// destructuring  cấu trúc lại
const user = {
  name: "ti",
  age: 20,
};
const { name, age } = user;
console.log(name);
console.log(age);
