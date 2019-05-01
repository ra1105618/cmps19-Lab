import React from 'react';
import {Link} from 'react-router-dom';

 function NavBar() {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/surahs/list">Home</Link>
                </li>

                <li><Link to="/hifz/list">Hifz List</Link></li>
                <li>
                    <Link to="/addHifz">Add Hifz</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default NavBar