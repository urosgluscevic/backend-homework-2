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



connect('mongodb://localhost:27017/booksApiH')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))