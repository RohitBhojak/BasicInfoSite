const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    try {
      let file;
      let status = 200;
      switch (url.pathname) {
        case "/":
          file = await fs.readFile("./index.html");
          break;
        case "/about":
          file = await fs.readFile("./about.html");
          break;
        case "/contact-me":
          file = await fs.readFile("./contact-me.html");
          break;
        default:
          status = 404;
          file = await fs.readFile("./404.html");
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(file);
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("Internal Server Error");
    }
  })
  .listen(8080);
