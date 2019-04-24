import React from 'react'



async function BookDetails({book}) {



    return <>



        <img src={book.thumbnailUrl}/>
            <p>ISBN: {book.isbn}</p>
            <p>Title: {book.title}</p>
            <p>Description: {book.shortDescription}</p>
            <p>Long Description: {book.longDescription}</p>
            <p>Authors: {book.authors}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Published Date: {book.publishedDate}</p>
            <p>Status: {book.status}</p>
            <p>Category: {book.categories}</p>


        </>



}

    export default BookDetails




