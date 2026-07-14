const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.end();
  server.close();
});

server.listen(5002);
