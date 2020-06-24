//const http = require('http');
//const path = require('path');
//const fs = require('fs');
//const url = require('url');
//
//const server = http.createServer(function(req, res) {
//  routePath(req, res);
//});
//
//server.listen(9090);
//
//function routePath(req, res) {
//  const pathObj = url.parse(req.url, true);
//
//  switch (pathObj.pathname) {
//    case '/getWeather':
//      let ret;
//      if (pathObj.query.city == 'beijing') {
//        ret = {
//          'city': 'beijing',
//          'weather': 'sunny',
//        };
//      } else {
//        ret = {
//          'city': pathObj.query.city,
//          'weather': 'Unknow',
//        };
//      }
//      res.end(JSON.stringify(ret));
//      break;
//    default:
//      staticRoot(req, res);
//  }
//
//}
//
//function staticRoot(req, res) {
//  const pathObj = url.parse(req.url, true);
//
//  let filePath = path.join(__dirname, pathObj.pathname);
//
//  if (fs.existsSync(filePath)) {
//    const pathnameDir = fs.lstatSync(filePath);
//    if (pathnameDir.isDirectory()) {
//      filePath = path.join(filePath, 'index.html');
//    }
//  }
//
//  fs.readFile(filePath, 'binary', function(error, fileContent) {
//    if (error) {
//      res.writeHead(404, 'not found');
//      res.write('<h1>404 Not Found</h1>');
//      res.end();
//    } else {
//      res.writeHead(200, 'OK');
//      res.write(fileContent, 'binary');
//      res.end();
//    }
//  });
//}
