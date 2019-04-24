import React from 'react'
import {Link} from 'react-router-dom'

function Book({book, history,onDeleteBook,onUpdateBook,onBookDetails}) {

    const {title, shortDescription, thumbnailUrl, isbn} = {...book};

   async function handleBookDetails() {


       try{

           let url=`http://localhost:8000/api/books?isbn=${isbn}`
           const book = await fetch(url)
           const data = await book.json();
           console.log(data);
           return data;

       }catch(e) {

           console.log(e)
       }
    }



    return <li className="cards__item" key={isbn}>
        <div className="card">
            <img className="card__image" src={thumbnailUrl} alt=""/>
            <div className="card__content">
                <div id="book-title" className="card__title">{title}</div>
                <p id="book-desc" className="card__text">{shortDescription.substring(0, 150) + '...'}</p>
                <div className="btn--options">
                    <button onClick={onBookDetails} className="btn btn--details">Details</button>
                    <Link to={`/books/${book.isbn}`}>
                        <button onClick={onUpdateBook} className="btn btn--update">Update</button>

                    </Link>

                    <button onClick={onDeleteBook} className="btn btn--delete">Delete</button>
                </div>
            </div>
        </div>
    </li>

}

export default Book;