const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('this is my page');
});
server.listen(4000, ()=> console.log('server running at http://localhost:4000'));