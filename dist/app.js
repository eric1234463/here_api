'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiHandlers = require('./apis');
var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var io = new _socket2.default(server);

var port = process.env.PORT || 8080;

// view engine setup
app.use((0, _cors2.default)());
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

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

io.on('connection', function (socket) {
  socket.on('subscribe', function (room) {
    console.log('joining room', room);
    socket.join(room);
  });

  socket.on('connect doctor', function (data) {
    socket.broadcast.to(data.room).emit('connect doctor', {
      patient: data.patient
    });
  });
  socket.on('cancel connection', function (data) {
    console.log('cancel connection', data);
    socket.broadcast.to(data.room).emit('cancel doctor', {
      patient: data.patient
    });
  });
});

server.listen(port, function () {
  console.log('listening on *:' + port);
});
module.exports = { app: app, server: server };
//# sourceMappingURL=app.js.map