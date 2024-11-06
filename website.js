const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h1>This is Swaraj</h1> <p>Hey this the way to rock the world!</p>"
    );
  }
  else if(req.url == '/about') {
    res.statusCode = 200;
    res.end('<h1>About Swaraj</h1> <p> Hey this is about Swaraj</p>');
  }
  else{
    res.statusCode = 404;
    res.end('<h1>Not Found</h1> <p> Hey this page was not found on the server</p>');
  }
});
 
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
