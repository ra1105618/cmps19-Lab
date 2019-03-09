class BookDonationAsync {

    constructor() {

        this.fse = require('fs-extra');
        this.filePath = './data/catalog-books1.json'

    }

    async readFileAsync(filePath) {
        let data = await this.fse.readFile(filePath);
        let parsedData = await JSON.parse(data);

        return parsedData;

        //console.log(parsedData);

    }


    async getBook(bookName) {


        let books = await this.readFileAsync(this.filePath)

        let book = books.filter(b => b.title == bookName)


        if (typeof (book == 'object')) {

            book.forEach(b => console.log(b))
        } else if (typeof (book == null)) {

            console.log(null)
        }


    }


    async getBooksWIthPageCountMoreThanX(pageCount) {

        let books = await this.readFileAsync(this.filePath)
        let manyBook = books.filter(b => b.pageCount > pageCount)

        manyBook.forEach(b => console.log(b))

    }

    async getAuthorBooks(author) {

        let books = await this.readFileAsync(this.filePath)
        let BookAuthor = books.filter(b => b.authors == author)

        BookAuthor.forEach(b=>console.log(b))

        for(let i of BookAuthor){

            let book=BookAuthor.filter(b=>b.authors==i)

            book.forEach(b=>console.log(b))
        }



    }

   /* async getAuthorsBookCount() {
        let books = await this.readFileAsync(this.filePath)
        let book = books.map(b => b.authors)
        //console.log(book)


        var hp = new Map();
        console.log(book.sort());
        var freq = 0;
        for (var i of book) {
        }
        for (var j = 1; j < i.length; j++) {
// console.log(arr[i-1]+" "+arr[i]);
            if (book[j] == book[j - 1]) {
                freq++;

            } else {
                hp.set(book[j - 1], freq + 1);
                freq = 0;
            }
        }

        console.log(hp);







    }*/


    async getBookCategory(category){

        let books= await this.readFileAsync(this.filePath)
        let BookAuthor=books.filter(b=>b.categories==category)

       BookAuthor.forEach(b=>console.log(b));


    }


}

module.exports = new BookDonationAsync();


let bookDonationAsync=new BookDonationAsync()
//bookDonationAsync.getBook("Unlocking Android");

//bookDonationAsync.getBooksWIthPageCountMoreThanX(1000)


bookDonationAsync.getAuthorBooks( "Robi Sen")
//bookDonationAsync.getAuthorsBookCount()


//bookDonationAsync.getAuthors()



//bookDonationAsync.readFileAsync(bookDonationAsync.filePath).then(result=> console.log(result));


//bookDonationAsync.getBookCategory("Java")



console.log('This message will only be displayed after you read the file');



