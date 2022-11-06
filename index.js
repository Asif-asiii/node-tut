//how to import a module in node js
const color = require('colors');
console.log("hello".red);
console.log("hello g".yellow);

//how to create a file in nodejs
const fs = require("fs");

fs.writeFileSync("welcome.txt","this is a detail of this file");

//if you want to read about package detail then open package-locl.json file
//if you need detail of code which you written in this editor, then open package.json file
//which is stored in nude-tut folder

//how to create a function in nodejs
//firstly import http module then create a server and display output on the browser
const http = require("http");
function datacontrol(req,res){
res.write("hello this is node tutorial");
res.end();
}
http.createServer(datacontrol).listen(3000);
//in the above line of code , listen(3000) is the port name 
//it is not necessary to give just this port we can give other also like 4500...and many more , can search from broweser about it

