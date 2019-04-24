import React from 'react';
import NavBar from './components/NavBar'
import Books from './components/Books';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {


    return(
        <Router>
            <NavBar/>
            <Route path="/books/:action" component={Books}/>

        </Router>
    )
}

export default App;