var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url=="/"){
      res.end("welcome to home page")
  }
  else if(req.url=="/welcome"){
      res.writeHead(200,{"content-type":"text/plain"})
      res.end("welcome to dominos page")
  }
  else if(req.url=="/contact"){
      res.setHeader("content-type","application/json");
      res.end(JSON.stringify({
          phone:"18602100000",
          email:"guest@dominos.com"
      }))
      }
  else{
    res.writeHead(400,{"content-type":"text/plain"})
    res.end(`    404
    page not found`)

  }
}
httpServer.listen(8081,()=>{console.log("The server is up at 8081")})
module.exports = httpServer;
