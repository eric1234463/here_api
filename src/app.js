import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import SocketIO from "socket.io";
let apiHandlers = require("./apis");
let app = express();
let server = http.Server(app);
let io = new SocketIO(server);

let port = process.env.PORT || 8080;

// view engine setup
app.use(cors());
app.set("view engine", "html");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.options("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.send(200);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.send(200);
  } else {
    //move on
    next();
  }
});

app.use("/api", apiHandlers);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

io.on("connection", socket => {
  socket.on("subscribe", function(room) {
    console.log("joining room", room);
    socket.join(room);
  });

  socket.on("connect doctor", function(data) {
    socket.broadcast.to(data.room).emit("connect doctor", {
      patient: data.patient
    });
  });
  socket.on("cancel connection", function(data) {
    console.log("cancel connection", data);
    socket.broadcast.to(data.room).emit("cancel doctor", {
      patient: data.patient
    });
  });
});

server.listen(port, function() {
  console.log("listening on *:" + port);
});
module.exports = { app: app, server: server };
