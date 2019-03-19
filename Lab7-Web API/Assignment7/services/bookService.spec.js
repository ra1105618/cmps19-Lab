const chai=require('chai')
const chaiHttp=require('chai-http')
const app=require('../app')
const bookService=require('./bookService')

const bookRepo=require('../Repo/BookRepo')







chai.use(chaiHttp)




describe('/GET book', async () => {
    it('it should GET books by title',  (done) => {
        chai.request(app)
            .get('api/books/:title')
            .end((err, res) => {



                done();
            });
    });

});


describe('/GET book', async ()=>{

    it('it should GET books by pageCount', (done)=>{

        chai.request(app)
            .get('api/books/:pageCount')
            .end((err,res)=>{

                done();
            });
    });
});

describe('/GET book', async ()=>{

    it('it should GET books by category', (done)=>{

        chai.request(app)
            .get('api/books/:categories')
            .end((err,res)=>{

                done();
            });
    });
});


describe('/GET book', async ()=>{

    it('it should GET books by author', (done)=>{

        chai.request(app)
            .get('api/books/:authors')
            .end((err,res)=>{

                done();
            });
    });
});




describe('/GET summary book', async ()=>{

    it('it should GET books summary', (done)=>{

        chai.request(app)
            .get('api/books/summary')
            .end((err,res)=>{

                done();
            });
    });
});


describe('/POST book', async() => {
    it('it should not POST a book isbn', (done) => {
        let book = {

            "_id": 5000,
            "title": "Graphics File Formats2",
            "isbn": "133034054",
            "pageCount": 484,
            "publishedDate": {
            "$date": "1995-06-01T00:00:00.000-0700"
        },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
            "longDescription": "Graphics File Formats is a comprehensive guide to the file formats used in computer graphics and related areas. It discusses implementation and design of file formats in a readable style focusing on the basic issues important for the evaluation or development of file formats, including  data types  design goals  color  data organization  data encoding  data compression  classification  and conversion  The second part of the book provides summaries of over 50 graphics file formats in commercial use, such as CGM, DDES, FITS, MPEG, PICT, PostScript, TIFF, QuickTime, RIB, SunRaster, and X bitmap. Following a uniform organization, these summaries are handy reference sources for those needing basic information on these formats.    Written by two computer experts, this book is intended for graphics professionals, programmers and all those in commercial, engineering and scientific applications areas who need to make decisions related to file formats from graphical data.",
            "status": "PUBLISH",
            "authors": [
            "C. Wayne Brown",
            "Barry J. Shepherd"
        ],
            "categories": [
            "Computer Graphics"
        ]

        }
        chai.request(app)
            .post('api/books')
            .send(book)
            .end((err, res) => {

                done();
            });
    });

});



describe('/PUT book', async() => {
    it('it should not POST a book isbn', (done) => {
        let book = {

            "_id": 5000,
            "title": "Graphics File Formats2",
            "isbn": "133034054",
            "pageCount": 484,
            "publishedDate": {
                "$date": "1995-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
            "longDescription": "Graphics File Formats is a comprehensive guide to the file formats used in computer graphics and related areas. It discusses implementation and design of file formats in a readable style focusing on the basic issues important for the evaluation or development of file formats, including  data types  design goals  color  data organization  data encoding  data compression  classification  and conversion  The second part of the book provides summaries of over 50 graphics file formats in commercial use, such as CGM, DDES, FITS, MPEG, PICT, PostScript, TIFF, QuickTime, RIB, SunRaster, and X bitmap. Following a uniform organization, these summaries are handy reference sources for those needing basic information on these formats.    Written by two computer experts, this book is intended for graphics professionals, programmers and all those in commercial, engineering and scientific applications areas who need to make decisions related to file formats from graphical data.",
            "status": "PENDING",
            "authors": [
                "C. Wayne Brown",
                "Barry J. Shepherd"
            ],
            "categories": [
                "Computer Graphics"
            ]

        }
        chai.request(app)
            .post('api/books')
            .send(book)
            .end((err, res) => {

                done();
            });
    });

});






describe('/DELETE/:isbn book', () => {
    it('it should DELETE a book given the isbn', (done) => {

        let book = {

            "_id": 5000,
            "title": "Graphics File Formats2",
            "isbn": "133034054",
            "pageCount": 484,
            "publishedDate": {
                "$date": "1995-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
            "longDescription": "Graphics File Formats is a comprehensive guide to the file formats used in computer graphics and related areas. It discusses implementation and design of file formats in a readable style focusing on the basic issues important for the evaluation or development of file formats, including  data types  design goals  color  data organization  data encoding  data compression  classification  and conversion  The second part of the book provides summaries of over 50 graphics file formats in commercial use, such as CGM, DDES, FITS, MPEG, PICT, PostScript, TIFF, QuickTime, RIB, SunRaster, and X bitmap. Following a uniform organization, these summaries are handy reference sources for those needing basic information on these formats.    Written by two computer experts, this book is intended for graphics professionals, programmers and all those in commercial, engineering and scientific applications areas who need to make decisions related to file formats from graphical data.",
            "status": "PENDING",
            "authors": [
                "C. Wayne Brown",
                "Barry J. Shepherd"
            ],
            "categories": [
                "Computer Graphics"
            ]

        }

            chai.request(app)
                .delete('api/books/:isbn' + book.isbn)
                .end((err, res) => {

                    done();
                });
        });
    });




