const http = require("http");

var users = ["UserX","UserY","UserZ"];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter User</title></head>");
        res.write("<body>");
        res.write("<h1>HELLO!!!</h1>")
        res.write('<form action="/create-user" method="POST"><input type="text" name="userName"><button type="submit">Register</button></form>');
        res.write("</body>");

        return res.end();
    }

    if (url === '/users') {

        res.write("<html>");
        res.write("<head><title>User</title></head>");
        res.write("<body>");
        res.write("<h1>USERS!!!</h1>")
        res.write("<ul>");
        for (let index = 0; index < users.length; index++) {
            res.write(`<li>${users[index]}</li>`);
        }
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
            users.push(userName);
            return res.end();
        });
    }

});

server.listen(3000);