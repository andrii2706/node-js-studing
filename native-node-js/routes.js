const fs = require('fs');

function requestHandler(req, res) {
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
             fs.writeFile('message-with-routes.txt', message, err => {
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

}

const requestHandlerArrowFunction = (req,res) => {
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

}

// first way of module exports
// module.exports = {
//     handler: requestHandlerArrowFunction, 
//     someText: 'Some Text'
// };

// second way of module exports
// module.exports.handler = requestHandlerArrowFunction; 
// module.exports.someText = "Some Text"; 

// third way of module exports 
exports.handler = requestHandlerArrowFunction; 
exports.someText = "Some Text";