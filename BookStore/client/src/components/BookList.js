import React,{useState} from 'react'
import Book from "./Book"


function BookList({books,onDeleteBook,onCriteriaChange,onShowBooks}){


    return <>

        <form>
            <h4>Select Search Criteria</h4>
            <div id="search-options" onChange={e=>onCriteriaChange(e)}>
                <div>
                    <input type="radio" id="category"
                           name="search"
                           value="category" />

                        <label htmlFor="category">Category</label>
                </div>
                <div>
                    <input type="radio" id="name"
                           name="search"
                           value="name" />
                        <label htmlFor="name">Book Name</label>
                </div>
                <div>
                    <input type="radio" id="author"
                           name="search"
                           value="author" />
                        <label htmlFor="author">Author Name</label>
                </div>
                <div>
                    <input type="radio" id="isbn"
                           name="search"
                           value="isbn" />
                        <label htmlFor="isbn">ISBN</label>
                </div>
                <div>
                    <input type="radio" id="pageCount"
                           name="search"
                           value="pageCount" />
                        <label htmlFor="pageCount">Page Count</label>
                </div>
            </div>

            <div id="search-param">
                <input name="searchParam"
                       placeholder="Search parameter"
                       id="searchParam"/>
                    <input type="button"
                           value="Search"
                           id="search-btn" onClick={onShowBooks}/>
            </div>
        </form>

        <div id="contentDiv"></div>





        <ul id="book-cards" className="cards">
            {books.map((book, index) =>
                <Book
                    onDeleteBook={() => onDeleteBook(book.isbn)}
                    key={index}
                    book={book}
                />)
            }
        </ul>
    </>
}

export default BookList