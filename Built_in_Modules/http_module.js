const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("This is our main page");
  } else if (request.url === "/shop") {
    response.end("This is our Shop page");
  } else if (request.url === "/about") {
    response.end("Here is our short about us page");
  }
  response.end("Invalid url end point.");
});

server.listen(5000);
