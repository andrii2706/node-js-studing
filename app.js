const http = require('http');
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
    console.log(req.url, req.method, req.headers)
    process.exit()
})

server.listen(3000) 