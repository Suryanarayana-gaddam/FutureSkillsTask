const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const uri = process.env.URI;
console.log(uri)
const port = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());

mongoose.connect(uri)
.then(console.log("Mongo DB connected successfully!"))
.catch(error => console.log("Error connecting MongoDB :" ,error));

const cardRouter = require("./api/routers/cardRouter");

app.use("/card",cardRouter);
app.use("/",cardRouter);

app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.listen(port,() => {
    console.log(`App listening on the port :${port}`)
})

module.exports = app;