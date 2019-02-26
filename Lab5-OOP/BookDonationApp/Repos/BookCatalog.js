class BookCatalog {


    constructor() {

        this.Books = [];



    }


    addBook(book) {

        this.Books.push(book);
    }

    displayBook() {

        this.Books.forEach(b => console.log(b));
    }




    getBook() {

        return this.Books
    }

    deleteBook(bookId) {

        let index = this.Books.findIndex(a => a.bookId == bookId);
        this.Books.splice(index, 1);


    }

    getDonorBook(donorId) {

        return this.getBook().filter(b =>
            b.Donor.donorId == donorId
        );
    }

    getPendingBooks() {

        return this.getBook().filter(b => b.status == "pending");
    }

    updateBook(book) {

        this.getBook().filter(b => {
            b.bookId == book.bookId;
            b.status = "available"
        })
    }

    getTopDonor(countDonor){

        return this.getBook().filter(b=>b.Donor === countDonor

        );


    }






}


module.exports = new BookCatalog;