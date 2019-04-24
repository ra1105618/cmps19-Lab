import React,{useState} from 'react'


function BookForm({onSubmit}) {
    const [book, setBook] = useState({});

    async function handleAddBook(e) {
        e.preventDefault();
        onSubmit(book);
    }

    function handleInputChange(e) {
        let newBook = {...book};
        newBook[e.target.name] = e.target.value;
        setBook(newBook);
    }

    return <>

            <h3>{book.isbn ? `Edit Book (Bk #${book.isbn})` : "Add Book"}</h3>
            <form className="simple-form" onSubmit={handleAddBook}>
                <label htmlFor="title">Title</label>
                <input type="text"
                       name="title" id="title"
                       placeholder="title" value={book.title} onChange={handleInputChange}/>

                <label htmlFor="isbn">ISBN </label>
                <input type="number"
                       name="isbn" id="isbn"
                       placeholder="isbn" value={book.isbn} onChange={handleInputChange}/>

                <label htmlFor="pageCount">Page Count</label>
                <input type="number"
                       name="pageCount" id="pageCount"
                       placeholder="page count" value={book.pageCount} onChange={handleInputChange}/>

                <label htmlFor="publishedDate">Published Date</label>
                <input type="date"
                       name="publishedDate" id="publishedDate" value={book.publishedDate} onChange={handleInputChange}/>

                <label htmlFor="thumbnailUrl">Thumbnail Url</label>
                <input type="url"
                       name="thumbnailUrl" id="thumbnailUrl" value={book.thumbnailUrl} onClick={handleInputChange}/>

                <label htmlFor="shortDescription">Short Description </label>
                <textarea name="shortDescription" id="shortDescription" value={book.shortDescription}
                          onChange={handleInputChange}/>

                <label htmlFor="longDescription">Long Description</label>
                <textarea name="longDescription"
                          id="longDescription" value={book.longDescription} onChange={handleInputChange}/>

                <label htmlFor="status">Book Status</label>
                <select name="status" id="status" value={book.status} onChange={handleInputChange}>
                    <option>REVIEW</option>
                    <option>PUBLISH</option>
                </select>

                <label htmlFor="authors">Authors</label>
                <textarea type="text"
                          name="authors" id="authors"
                          placeholder="Separate them by Comma"/>

                <label htmlFor="category">Category</label>
                <textarea type="text"
                          name="category" id="category"
                          placeholder="Separate them by Comma"/>

                <input type="submit"/>
            </form>


       </>
}

export default BookForm




