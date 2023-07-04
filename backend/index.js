var os = require("os");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use(cookieParser());
const connectDB = require("./config/db.js");

connectDB();

server.listen(process.env.PORT || 5000, () => console.log("server is running"));
