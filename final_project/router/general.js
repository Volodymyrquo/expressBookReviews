const express = require('express');
let books = require("./booksdb.js");
const e = require('express');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(300).json({books});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbnBook = books[req.params.isbn]
  return res.status(300).json(isbnBook);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
const booksbyauthor = Object.keys(books).filter(book=>books[book]["author"]===req.params.author).map(el=>{
    delete books[el].author; 
    return {isbn:el,...books[el]}})
  return res.status(300).json({booksbyauthor});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const booksbytitle = Object.keys(books).filter(book=>books[book]["title"]===req.params.title).map(el=>{
        delete books[el].title; 
        return {isbn:el,...books[el]}})
      return res.status(300).json({booksbytitle});
      });

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbnReview = books[req.params.isbn].reviews
  return res.status(300).json(isbnReview);
});

module.exports.general = public_users;
