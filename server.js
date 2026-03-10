const http = require("node:http");
const fs = require("node:fs");
const fsPromises= require('node:fs/promises')
const { pipeline } = require("node:stream/promises");
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact":
      path += "contactMe.html";
      break;
    case "/contact-me":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      res.end();
      return;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  try {
    //stream approach
    await pipeline(fs.createReadStream(path), res);
 
    //normal read approach
    // const file = await fsPromises.readFile(path)
    // res.end(file)
  } catch (err) {
    console.log(`you have a problem mate ${err}`);
  }
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
