const http = require('http');
const fs = require('fs');
// one way how to start a server
// function rqListener(req, res) {
    
// }

// http.createServer(rqListener);

// second way 
// http.createServer(function(req, res){

// })
// third way using arrow function
// http.createServer((req, res) => {
//     console.log(req)
// })

// how to create a server this servers is not stops
// const server = http.createServer((req, res) => {
//     console.log("hello Andrii")
// })

// server.listen(3000) 

// how to create a server this servers is stops
// const server = http.createServer((req, res) => {
//     console.log(req)
//     process.exit()
// })

// server.listen(3000) 

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    // process.exit()
    const url = req.url;
    const method = req.method
    if(url === '/'){
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>Empty Route</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Sumbit form</button></form></body>');
    res.write('</html>');
    return res.end();
    }
     if (url === '/message' && method === 'POST'){
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk)
            console.log(chunk); 
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // блокує виконання коду після виконання даного методу до поки метод не виконається 
             fs.writeFile('message.txt', message, err => {
                console.log(err);
                 res.statusCode = 302;
             res.setHeader('Location', '/');
            return res.end();
             });
            
        });
          
    }
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>Empty Route</title></head>');
    res.write('<body>On Message page</body>');
    res.write('</html>');
    return res.end();
})



// server.listen(3000);