const bookService = require('./services/BookService'),
    router = require('express').Router();

//router.route('/categories').get(bookService.getCategories);
router.route('/authors')
    .get(bookService.getAuthors)
    .post(bookService.addAuthors)


router.route('/books')
    .get(bookService.getBooks)
    .post(bookService.addBook);

router.get('/books/summary', bookService.getBooksSummary);
router.get('/books/top3borrower',bookService.getTop3Borrower)
router.get('/books/top3borrowed',bookService.getTop3BorrowedBooks)
router.get('/books/borrowingSummary',bookService.getBorrowingsSummary)

router.route('/books/:isbn')
    .put(bookService.updateBook)
    .delete(bookService.deleteBook);

module.exports = router;











