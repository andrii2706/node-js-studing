const http = required('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('Hello world')
}).listen(8080);