const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router");
require("dotenv").config();

const PORT = process.env.PORT;
const mongoURL = process.env.MONGODB_URL

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(mongoURL)
    .then(()=>{console.log("MongoDB is connected successfully")})
    .catch((error)=>console.log("error while connecting to MongoDB: ", error))

app.use("/", router);

server.listen(PORT, ()=>{
    console.log(`The server is running in port: http://localhost:${PORT}`)
})
