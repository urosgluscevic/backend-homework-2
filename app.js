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

app.get("/item/:name/:action", async(req,res)=>{
    const name = req.params.name;
    const action = req.params.action;
    console.log(name);
    switch(action){
        case "find":
            const book = await Books.findByName(name);
            res.status(201).json(book);
            break;
        case "delete":
            const book2 = await Books.deleteByName(name);
            console.log(book2);
    }
    
})



app.post("/createBook", async (req,res)=>{
    const createdBook = req.body;
    console.log(createdBook);
    try {
        const book = await Books.createBook(createdBook);
        res.status(201).json(book);
      } catch (error) {
        console.log(error);
        res.json(error)
      }
})



connect('mongodb://localhost:27017/booksApiH')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))