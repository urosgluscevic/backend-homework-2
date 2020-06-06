const User = require("./models/user");
const Book = require("./models/book");

function findAllBooks(){
    return new Promise((resolve, reject) => {
        try{
            resolve(Book.find({}).lean().exec());
        } catch (err){
            reject(new Error(err))
        }
    })
}

function createBook(createdBook){
    return new Promise((resolve, reject) => {
        try {
            resolve(Book.create(createdBook))
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}

module.exports = {
    findAllBooks,
    createBook
}