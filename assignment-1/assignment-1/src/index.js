const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
//  fs.writeFile("hello.js","Hello from Hello.js file",)
 fs.writeFile("File.txt", "Hello", (err)=>{
	// console.log(err);
 });
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
//   fs.readFile("hello.js")
fs.readFile("./File.txt","utf-8", (err, data)=>{
	// console.log(err);
	console.log(data);
});
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// fs.appendFile("hello.js","This is appended file")
	fs.appendFile("./File.txt"," World", (err)=>{
		// console.log(err);
		
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	// fs.unlink("hello.js")
	fs.unlink("./File.txt", (err)=>{
		// console.log(err)
	});
}
// console.log(myFileWriter)



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }