// const http = require('http');
// const fs = require('fs'); 
// const get = "GET";
// const post = "POST";

// const server =  http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/'){
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<html lang="en">');
//     res.write('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">');
//     res.write('<title>Hello From Node.js</title>');
//     res.write(' <style> div {  > p{   color: gray;   background: aquamarine; }   } </style></head>');
//     res.write(`<body><div><h1>Hello Title</h1></div><div><p>Hello subtitle</p> <form action="/message" method="POSt"><input type="text" name="message"> <button type="submit">Submit</button></form> </div></body>`)
//     res.write('</html>');
//    return res.end();
//     }
//     if (url === "/message"  && method === post){
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         })
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//             const message = parseBody.split('=')[1];
//              fs.writeFileSync('message2.txt', message);
//         })
//         res.writeHead('302', {
//             'location': '/'
//         })
//         return res.end();
//     }
// });

// server.listen(3200)