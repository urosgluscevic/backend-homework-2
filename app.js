const express = require('express');
const { json, urlencoded } = require('body-parser');


const connect = require("./helpers").connect;
const Books = require("./controllers.js");


const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/allBooks", async (req,res)=>{
    const allBooks = await Books.findAllBooks();
    res.status(200).json(allBooks);
})

