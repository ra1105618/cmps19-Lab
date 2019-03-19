const express=require('express')
const router=express.Router();
const bookDonation=require('./Repo/BookRepo')
const bookService=require('./services/bookService')







//router.get('/books/:categories',bookService.getBooksbyCategory)

//router.get('/books/:authors',bookService.getBookbyAuthor)

//router.get('/books/:pageCount',bookService.getPageCount)

//router.get('/books/:title',bookService.getBook)

//router.post('/books',bookService.addBook)

//router.put('/books/:isbn',bookService.updateBook)

router.delete('/books/:isbn',bookService.deleteBook)

router.get('/books/summary',bookService.getSummary)









module.exports=router