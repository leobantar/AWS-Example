const http = require('http');
const server = http.createServer((req,res)=> {
    res.end('<h1> Habrá que esperar un poco mas</h1>')
} )

server.listen(3000);
console.log('server on port 3000')
