//commonjs, es module
//named
// const { math, addNumber, user } = require("./math");
// console.log(addNumber(10, 100));
// console.log(user.name);
// console.log(math);

//http
// https
// fs  làm việc với file
// os làm việc với hệ thống

// // đang sử dụng packet http
// const http = require("http");

// //1 fuction co 2 tham so request va response
// const server = http.createServer((req, res) => {
//   // console.log("req", req);
//   const { url } = req;
//   //product/123
//   const productId = url.split("/product/")[1];
//   // console.log(productId);
//   res.write(`<h2>my product ${productId}</h2>`);
//   res.end();
// });

// server.listen(3000);

// tạo server express

const express = require("express"); // cài express
const { PORT } = require("./config"); // tạo file port

const app = express();

//phương thức get
//route

app.get("/", (req, res) => {
  res.send("hello");
});

// route/user
app.get("/user", (req, res) => {
  res.send("user");
});

//route/user/123/delete
app.get("/user/:id/:action", (req, res) => {
  const { id, action } = req.params;
  res.send(`${action} user: ${id}`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// endpoints - /user/123/update
