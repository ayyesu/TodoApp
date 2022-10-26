const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express();
dotenv.config({ path: '../.env'});


app.get("/", (req, res) => {
    res.send("Welcome to our todos api")
})

const connection_string = process.env.MONGODB_URL

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}..`)
})

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log("Connected to Mongodb"))
        .catch((error) => console.error("Mongodb connection failed:", error.message));