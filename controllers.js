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


function findByName(name){
    return new Promise((resolve, reject) => {
        try {
            resolve(Book.find({"name":name}))
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}


function deleteByName(name){
    return new Promise((resolve, reject) => {
        try {
            console.log("testera");
            resolve(Book.deleteOne({"name":name}));
        } catch (e) {
            console.log(e);
            reject(false)
        }

    })
}

function findAllUsers(){ //lists all the users from the database
    return new Promise((resolve, reject) => {
        try{
            resolve(User.find({}).lean().exec());
        } catch (err){
            reject(new Error(err))
        }
    })
}

function addUser(data){ //adds a new user to the database
    return new Promise((reject, resolve) => {
        try{
           resolve(User.create(data))
        } catch(err){
            reject(new Error(err))
        }
    })
}

function deleteUser(username){
    return new Promise((reject, resolve) => {
        try{
            resolve(User.deleteOne({"username":username}))
        } catch(err){
            reject(new Error(err))
        }
    })
}

function findUser(username){
    return new Promise((reject, resolve) => {
        try{
            resolve(User.find({"username": username}));
        } catch(err){
            reject(new Error(err));
        }
    })
}

module.exports = {
    findAllBooks,
    createBook,
    findByName,
    deleteByName,
    findAllUsers,
    addUser,
    deleteUser
}