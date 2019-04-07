const Book = require('../models/Books');
const Author=require('../models/Authors')
const Borrowing=require('../models/Borrowings')
const Borrower=require('../models/Borrowers')

const uuid=require('uuid')

class BookRepository {
    constructor() {

        // this.booksFilePath = path.resolve(__dirname, '../data/catalog-books.json');
    }


    async getAuthors(){

        return await Author.find({})
    }

    async getBookByAuthor(author){

        if(!author)
            return await Book.find({author});
        return await Book.find();
    }








  async addAuthor(author){

      return await new Author(author).save()
  }



    async getBooksByCategory(categories) {

       return await Book.find({categories: {$in: [categories]}});
    }

    async getBooksCount() {
        return await Book.count({});
    }



    async getBookByISBN(isbn) {
        //I do not want to return the reviews and the __v (which is added automatically by MongoDB)
        return await Book.findOne({isbn: isbn})
    }

    async getBooksByPageCount(pageCount){

        return Book.find({pageCount:pageCount})
    }

    async  getBooksByName(title){

        return await Book.find({title:title})
    }

    async addBook(newBook) {

        //console.log(newBook)

        //newBook.Id=uuid.v4()
        return await new Book(newBook).save()
    }

    async addBorrower(newBorrower) {

        //console.log(newBook)

        //newBook.Id=uuid.v4()
        return await new Borrower(newBorrower).save()
    }


   async getAuthor(author) {

        return await Book.find({});




    }

    async updateBook(isbn,updatedBook) {
        console.log('updateBook.updatedBook', updatedBook);
        const bookIsbn = updatedBook.isbn;
        delete updatedBook.isbn; //Delete the _id if exists
        return await Book.update({isbn: bookIsbn}, updatedBook);

    }




    async deleteBook(isbn) {

        return await Book.findOneAndDelete({isbn})

    }

    async getTop3BookBorrowed(){



      return await Borrower.aggregate([
            {$group : { _id: "$borrowerBook" , count : { $sum: 1}}
            },
            {$match : { count : { $gt : 1 } }}
            ])
    }





    async getBooksSummary() {
        return await Book.aggregate([

            { "$match": { "pageCount": {$gte : 488} } },
            { $group: {
                    _id : "$categories",
                    pages: { $avg: "$pageCount"  },
                    count: { $sum: 1 }
                }
            },
            // Sorting by pages descending
            { "$sort": { "pages": -1 } },
            // limit results to top 5 categories with longest books
            { "$limit": 2 }
        ]);
    }

    async emptyDB() { //in case needed during testing
        await Book.remove({});

    }

    async initDb() {
        try {
            //Uncomment to empty the database
            await this.emptyDB();
            //If the db is empty then init the db with data in json files
            const booksCount = await this.getBooksCount();
            console.log(`Books Count: ${booksCount}. Comment out emptyDB() to stop re-initializing the database`);
            if (booksCount == 0) {
                await this.loadDataFromJsonFiles();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async loadDataFromJsonFiles() {
        const fs = require('fs-extra');

        //const store = {name: 'Jarir Bookstore', city: 'Doha'};
        // const store1 = await this.addStore({name: 'Jarir Bookstore', city: 'Doha'});
        //const store2 = await this.addStore({name: 'Jarir Bookstore', city: 'Istanbul'});

        const books = await fs.readJson('data/books.json');
       //const books = JSON.stringify(data)

        console.log('Retrieved books from json file and added to MongoDB books Collection: ' + books.length);

        for (const book of books) {
            //Assign store1 to even and store2 to odd ISBNs

            await this.addBook(book);

        }

        const authors=await fs.readJson('data/author.json')
        console.log('Retrieved authors from json file and added to MongoDB authors Collection: ' + authors.length);

        for(const author of authors){

            await this.addAuthor(author)
        }

        const borrowers=await fs.readJson('data/borrower.json')
        console.log('Retrieved borrowers from json file and added to MongoDB authors Collection: ' + authors.length);

        for(const borrower of borrowers){

            await this.addBorrower(borrower)
        }


    }

    async getTop3Borrowers(){

        try {
            return await Book.aggregate([
                {
                    $group: {
                        _id: "$Id",

                    }
                },


                {
                    $limit: 3


                }


            ])

        } catch (err) {
            throw err;
        }
    }

    async getborrowingSummary(){

        return await Borrowing.aggregate([

            { "$match": { "pageCount": {$gte : 488} } },
            { $group: {
                    _id : "$categories",
                    pages: { $avg: "$pageCount"  },
                    count: { $sum: 1 }
                }
            },
            // Sorting by pages descending
            { "$sort": { "pages": -1 } },
            // limit results to top 5 categories with longest books
            { "$limit": 2 }
        ]);
    }

  


}

module.exports = new BookRepository();