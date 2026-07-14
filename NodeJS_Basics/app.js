const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(5002);

setTimeout(() => {
  server.close(() => {
    console.log("Server closing!!");
  });
}, 10000);
