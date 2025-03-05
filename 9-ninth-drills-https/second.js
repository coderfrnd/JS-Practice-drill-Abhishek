const http = require("http");
let server = http.createServer((req, res) => {
  console.log(req.url);
  // console.log(req.method);

  res.end(`
    <!DOCTYPE html>
        <html>
          <head></head>
          <body>
              <h1>Good programmers write code that humans can understand.</h1>
              <p> - Martin Fowler</p>
          </body>
        </html>`);
  // console.log(req.url);
});

server.listen(3000, () => {
  console.log("done");
});
