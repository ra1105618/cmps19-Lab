import React, {useState, useEffect} from 'react'
import BookList from './BookList'
import BookForm from './BookForm'
import {Route, Switch} from 'react-router-dom'
import BookDetails from './BookDetails'

function Books({history}) {

    const [books, setBooks] = useState([])

    /*useEffect(() => {
        getBooks().then(data => setBooks(data))
    }, [])*/

    async function getBooks() {
        try {
            let url = `http://localhost:8000/api/books`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            return data;
            setBooks(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function getBook(category) {

        try {

            let url = `http://localhost:8000/api/books?categories=${category}`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            return data;
            setBooks(data)

            data.filter(book => book.categories == category)


        } catch (e) {

            console.log(e)
        }

    }

    async function getBooks(author) {

        try {

            let url = `http://localhost:8000/api/books?authors=${author}`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            return data;
            setBooks(data)

            data.filter(book => book.authors == author)

        }



catch
    (e)
    {

        console.log(e)
    }
}

    async function getBooks(isbn) {

        try {

            let url = `http://localhost:8000/api/books?isbn=${isbn}`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            return data;
            setBooks(data)

            data.filter(book => book.isbn == isbn)

        }

        catch
            (e)
        {

            console.log(e)
        }
    }

    async function getBooks(pageCount) {

        try {

            let url = `http://localhost:8000/api/books?pageCount=${pageCount}`
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            return data;
            setBooks(data)

            data.filter(book => book.pageCount == pageCount)

        }

        catch
            (e)
        {

            console.log(e)
        }
    }

    async function handleCriteriaChange(e){

        const newBooks=getBooks(e.target.value)
        setBooks(newBooks)


    }




    async function handleDeleteBook(isbn) {
        try {
            const confirmed = confirm("Are you sure you want to delete this book?");
            if (confirmed) {
                const url = `http://localhost:8000/api/books/${isbn}`
                await fetch(url, {method: 'delete'});
                setBooks(books.filter(b => b.isbn != isbn));
            }
        } catch (e) {
            console.log(e);
        }



    }

    async function handleAddBook(book) {
        let url = 'http://localhost:8000/api/books';
        const response = await fetch(url,
            {
                method: 'Post',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(book)
            });

          book = await response.json();

        const newBooks = [...books, book];
        setBooks(newBooks);
        history.push("/books/list");
    }

    async function handleUpdateBook(book) {
        let url = `http://localhost:8000/api/accounts/${book.isbn}`;
        let httpVerb = 'Put';
        const response = await fetch(url,
            {
                method: httpVerb,
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(book)
            });

        const newBooks = [...books];
        const updatedBookIndex = newBooks.findIndex(b => b.isbn == book.isbn);
        newBooks[updatedBookIndex] = book;
        setBooks(newBooks);
        history.push("/books/list");
    }
    useEffect(() => {
        getBooks().then(data => setBooks(data))
    }, [])

    return (

        <div>

            <Switch>
                <Route exact path="/books/list"
                       render={() => <BookList
                           books={books}
                           onDeleteBook={handleDeleteBook}
                           onCriteriaChange={handleCriteriaChange}

                       />
                       }
                />





                <Route path="/books/add"
                       render={() => {
                           const book = {title: '', isbn: '',pageCount:'',publishedDate:'',status:'',thumbnailUrl:'',
                           shortDescription:'',longDescription:'',authors:''.split(','),category:''.split(',')};
                           return <BookForm
                             book={book}
                               onSubmit={handleAddBook}/>
                       }}
                />

                <Route path="/books/:isbn"
                       render={({match}) => {
                           const isbn = match.params.isbn;
                           console.log("match.params.isbn", match.params.isbn);
                           const book = books.find(b => b.isbn == isbn);
                           console.log("match.params.isbn", book);
                           return <BookForm
                               key={isbn}
                              book={book}
                               onSubmit={handleUpdateBook}/>
                       }}
                />

                <Route path="/books/details/:isbn"
                       render={({match})=>{

                           const isbn=match.params.isbn;
                           console.log(isbn)
                           const book=books.find(b=>b.isbn==isbn)
                           console.log("match.params.isbn",book)

                           return <BookDetails key={isbn} book={book}/>
                       }
                       }>

                </Route>


            </Switch>





        </div>





    )
}

export default Books