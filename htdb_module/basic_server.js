import http from "http";

const server = http.createServer((req, res) => {
    console.log("hello world");
    res.statusCode = 200;
    res.end("welcome from server");

});

server.listen(3000,"127.0.0.1", () => {
    console.log("server is running on port 3000");
});