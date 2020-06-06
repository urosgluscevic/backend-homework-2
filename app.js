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
            break;
        case "update":
            const data = req.body;
            const updatedBook = await Books.updateBook(name, data);
            res.status(201).json(updatedBook);
    }
    
})

app.get("/users", async (req, res) => { //returns a list of all the users from the database
  const users = await Books.findAllUsers();
  res.status(200).json(users)
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

app.post("/createUser", async (req, res) => { //creates a new user
  const userData = req.body;
  try{
    const newUser = await Books.addUser(userData);
    res.status(201).json(newUser)
  } catch(err){
    res.json(err)
  }
})

app.get("/user/:username/:action", async(req, res) => {
  const username = req.params.username;
  const action = req.params.action;

  if(action === "delete"){
    const deletedUser = await Books.deleteUser(username);
  } else if(action === "find"){
    const searchedUser = await Books.findUser(username);
    res.status(201).json(searchedUser);
  }
})


app.post("/user/:username/update", async(req,res)=>{
  const username = req.params.username;
  const newData = req.body;
    const updatedUser = await Books.updateUser(username, newData);
    res.status(201).json(updatedUser);

})


connect('mongodb://localhost:27017/booksApiH')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))