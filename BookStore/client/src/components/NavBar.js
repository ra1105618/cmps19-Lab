import React from 'react'
import {Link} from 'react-router-dom';


export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>Book Store</li>
                <li>
                    <Link to="/books/list">Books</Link>
                </li>
                <li>
                    <Link to="/books/add">Add Books</Link>
                </li>

            </ul>
        </nav>
    )
}