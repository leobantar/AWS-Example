const http = require('http');
const server = http.createServer((req,res)=> {
    res.end(<h1> Otra vez el primer codigo...</h1>)
} )

server.listen(3000);
console.log('server on port 3000')
