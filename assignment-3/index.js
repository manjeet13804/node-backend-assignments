fs=require("fs");
const http = require("http");
fs.writeFile("index.html", `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1> Hello World </h1>
<p> This is Manjeet... </p>
</body>
</html>
`, (err)=>{
	console.log(err);
 });
const server = http.createServer((req, res) => {
res.end("ok")
});

server.listen(5000, () => console.log("The server is up at port 5000"));