import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import SocketIO from 'socket.io';
let apiHandlers = require('./apis');
let app = express();
let server = http.Server(app);
let io = new SocketIO(server);

let port = process.env.PORT || 8080;

// view engine setup
app.use(cors());
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiHandlers);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


io.on('connection', (socket) => {
  socket.on('subscribe', function (room) {
    console.log('joining room', room);
    socket.join(room);
  });

  socket.on('connect doctor', function (data) {
    socket.broadcast.to(data.room).emit('connection', {
      patient: data.patient
    });
  });
  socket.on('cancel connection', function (data) {
    socket.broadcast.to(data.room).emit('connection', {
      patient: data.patient
    });
  });
});

server.listen(port, function () {
  console.log('listening on *:' + port);
});
module.exports = { app: app, server: server };
