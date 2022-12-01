var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('O usuario se desconectou:' + socket.id);
  });

  socket.on('msg', (data) => {
    socket.broadcast.emit();
    io.emit('showmsg', data);
    console.log(data);
  });
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

http.listen(8080, () => {
  console.log('APP RODANDO !');
});
