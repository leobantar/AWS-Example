const http = require('http');
const server = http.createServer((req,res)=> {
    res.end('<h1> Se debe que esperar para poder verlo</h1>')
} )

server.listen(3000);
console.log('server on port 3000')
