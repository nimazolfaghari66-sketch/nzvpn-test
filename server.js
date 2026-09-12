'use strict';
const http = require('http');
const port = Number(process.env.PORT || 3000);
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('ok from deplexo port test\n');
  })
  .listen(port, '0.0.0.0', () => {
    console.log('PORT_TEST listening on 0.0.0.0:' + port);
  });