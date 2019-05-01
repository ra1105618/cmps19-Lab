import Surahs from "./components/Surahs";
import HifzForm from "./components/HifzForm";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
    return (
        <Router>

            <Switch>
                <Route exact path="/accts/:action" component={Surahs}/>
                <Route path="/addHifz" component={HifzForm}/>
            </Switch>
        </Router>


    )
}