// import express from './node_modules/express/index'

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
// create the server through our variable
var server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h2>express works</h>');
});

app.get('/tasks', (req, res) => {
    // res.send('<h2>tasks works</h>');
    fs.readFile('./db.json', (err, data) => {
        if(err) throw err;

        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })
});

server.listen('3000', () => {
    console.log("listening in port 3000");
});


// // Import the variable 
// var http = require('http');
// // import http from 'http';

// // require events on our var eventEmitter
// var events = require('events');


// var eventEmitter = new events.EventEmitter();


// // Create the server from http import
// var server = http.createServer((req, res) => { 
//     eventEmitter.emit('someone requested'); // event trigger

//     res.end('server works');
// });

// eventEmitter.on('someone requested', () => {
//     console.log('a request have been done to the server')
// });  // Event listener

// server.listen(3000, 'localhost', () => {
//     console.log('server runs in 3000 port')
// });


// var first_name = "Christian";

// console.log(first_name);


// var fs = require('fs');

// fs.writeFile('hello.txt', 'how are you?', (err) => {
//     if(!err){
//         console.log("no error in writting");
//     }   
// });

// // const data = new Uint8Array(Buffer.from('Hello Node.js'));
// // fs.writeFile('hello.txt', 'how are you?', (err) => {
// //   if (err) throw err;
// //   console.log('The file has been saved!');
// // });

// fs.readFile('./hello.txt', function(err, data){
//     if(!err){
//         console.log(data.toString());
//     }
// });