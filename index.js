  var express = require("express");
  var app = express();
  var server = require("http").createServer(app);
  var io = require("socket.io").listen(server);
  var fs = require("fs");
  server.listen(process.env.PORT || 3000);

  io.sockets.on('connection', function (socket) {
  
  console.log("Co nguoi connect ne");
  
  io.sockets.emit('serverguitinnhan', { noidung: "okbaby" });
  
  socket.on('laravel', function (data) {
  // emit toi tat ca moi nguoi
  console.log("laravel gui tin hieu");
  io.sockets.emit('sendandroid', { noidung: data });
  
  // emit tới máy nguoi vừa gửi
  socket.emit('sendandroid', { noidung: data });
  });
  socket.on('android', function (data) {
  // emit toi tat ca moi nguoi
  console.log("android gui tin hieu");
  io.sockets.emit('sendandroid', { noidung: data });
  
  // emit tới máy nguoi vừa gửi
  socket.emit('sendandroid', { noidung: data });
  });
});
  

