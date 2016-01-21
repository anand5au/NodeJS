/*var http = require("http");

http.createServer(function(req, resp) {
	resp.writeHead(200,{'Content-type' : 'text/plain'});
	resp.end("Hello world");
}).listen(8081);

console.log("server started at http://localhost:8081");*/

/*var fs = require("fs");

fs.readFile("inpuqt.txt", function(error,data){
	if(error)
		return console.error(error);
	console.log(data.toString());
});
console.log("end"); */

var events = require("events");
var emitter = new events.EventEmitter;
var connectHandler = function connected(arg)
{
	console.log("connected to " + arg);
	emitter.emit("data received");
}

emitter.on("connection",connectHandler);
emitter.on("data received", function() {
	console.log("data received successfully");
});

emitter.emit("connection", "localhost");

var buffer1 = new Buffer('TutorialsPoint');
//slicing a buffer
var buffer2 = buffer1.slice();
console.log("buffer2 content: " + buffer2.toString());

var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'));
  
  console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});

console.log("my name: "+__filename);
console.log("my house name: "+__dirname);