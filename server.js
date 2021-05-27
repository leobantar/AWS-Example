const http = require('http');
const server = http.createServer((req,res)=> {
    res.end('Otra vez el primer codigo...')
} )

server.listen(8080);
console.log('server on port 8080')