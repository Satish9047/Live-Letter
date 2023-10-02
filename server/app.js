const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const {router} = require("./src/router/router");
require("dotenv").config();

const PORT = process.env.PORT;
const mongoURL = process.env.MONGODB_URL

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"))
app.use(express.json());
app.use(compression())
app.use(express.urlencoded({extended: true}));

mongoose.connect(mongoURL)
    .then(()=>{console.log("MongoDB is connected successfully")})
    .catch((error)=>console.log("error while connecting to MongoDB: ", error))

app.use("/", router);

server.listen(PORT, ()=>{
    console.log(`The server is running in port: http://localhost:${PORT}`)
})
