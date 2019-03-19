const bookDonation=require('../Repo/BookRepo')


class bookService{

    constructor(){


    }

    async getBooks(req,res){

        try{



            const books=await bookDonation.getBooks()
            console.log(books)

            res.json(books)



        }catch(err){

            res.status(404).send(err)


        }
    }

    async getBook(req,res){



        try {


            const title = req.params.title;

            const book = await bookDonation.getBook(title)
            console.log(book)


            res.json(book);

        }
        catch (err) {
            res.status.send(err);
        }



    }

    async getPageCount(req,res){
        try {

            const pageCount=req.params.pageCount



            const book1 = await bookDonation.getBooksByPageCount(pageCount)
            console.log(book1)
            res.json(book1)
        }catch(err){

            res.status(404).send(err)
        }
    }

    async getBookbyAuthor(req,res){

        try{
            const author=req.params.authors


            const authors=await bookDonation.getBooksByAuthor(author)
            console.log(authors)
            res.json(authors)

        }catch(err){

            res.status(404).send(err)

        }
    }

    async  getBooksbyCategory(req,res){

        try{
            const getCategory=req.params.categories



            const category=await bookDonation.getBooksByCategory(getCategory)
            console.log(category)
            res.json(category)
        }catch(err){

            res.status(404).send(err)
        }


    }

    async getSummary(req,res){

        try{

            // const authorCount=req.params.authors
            const summary = await bookDonation.getBooksSummary()
            console.log((summary))
            res.send([...summary])//send(summary)//JSON.stringify(summary))
            res.status(200)

        }catch(err){

            res.status(404).send(err)

        }


    }

    async addBook(req, res) {


        try{
            await bookDonation.addBook(req.body)
            res.status(201).json(req.body)
        }catch(err){

            res.status(404).send(err)

        }
    }

    async updateBook(req,res){

        try{

            await bookDonation.updateBook(req.body)
            res.status(200).json(req.body)

        }catch(err){

            res.status(404).send(err)
        }
    }

    async deleteBook(req,res){




        try{
            const isbn=req.params.isbn
            await bookDonation.deleteBook(isbn)
            res.status(200).send('ok')

        }catch(err){

            res.status(404).send(err)
        }
    }



}

module.exports=new bookService()