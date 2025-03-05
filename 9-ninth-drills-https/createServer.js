const http = require("http");
const crypto = require("crypto");

let server = http.createServer((req, res) => {
  const url = req.url;

  const statusNumber = url.match(/^\/status\/(\d+)$/);
  const delayNumber = url.match(/^\/delay\/(\d+)$/);
  if (req.method == "GET") {
    switch (true) {
      case url === "/html":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlCode());
        break;

      case url === "/json":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.on("finish", () => console.log("Data sent successfully"));
        res.end(jsonData());
        break;

      case url === "/uuid":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(uuId());
        break;

      case statusNumber !== null:
        const statusCode = parseInt(statusNumber[1], 10);
        if (statusCode < 699) {
          res.writeHead(statusCode, { "Content-Type": "text/plain" });
          res.end(`Your status code is: ${statusCode}`);
        }
        break;

      case delayNumber !== null:
        delaySecondRoute(delayNumber[1], res);
        res.on("finish", () => {
          console.log("after delay it reached now");
        });
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found Method only Get allowed");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));

function jsonData() {
  return JSON.stringify(
    {
      slideshow: {
        author: "Yours Truly",
        date: "date of publication",
        slides: [
          { title: "Wake up to WonderWidgets!", type: "all" },
          {
            items: [
              "Why <em>WonderWidgets</em> are great",
              "Who <em>buys</em> WonderWidgets",
            ],
            title: "Overview",
            type: "all",
          },
        ],
        title: "Sample Slide Show",
      },
    },
    null,
    2
  );
}

function htmlCode() {
  return `
  <!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>
  `;
}

function uuId() {
  return JSON.stringify({ uuid: crypto.randomUUID() }, null, 2);
}
function delaySecondRoute(delayTime, res) {
  const delaySeconds = parseInt(delayTime, 10) * 1000;
  console.log(`Delaying for: ${delayTime} seconds`);
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`After delay of ${delayTime} sec`);
  }, delaySeconds);
}
