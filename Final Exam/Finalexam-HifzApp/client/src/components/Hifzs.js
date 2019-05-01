import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import HifzList from './HifzList'

import SurahsTable from './SurahsTable'


function Hifzs({history}) {

    const [hifzs, setHifzs] = useState

    async function getSurahs() {

        let url = `http://localhost:8090/hifz`


        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setHifzs(data);


    }

    async function handleAddHifz(hifz) {
        let url = 'http://localhost:8090/hifz';
        const response = await fetch(url,
            {
                method: 'Post',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(hifz)
            });

        hifz = await response.json();

        const newHifz = [...hifzs, hifz];
        setHifzs(newHifz);
        history.push("/hifz/list");


    }

    useEffect(() => {
        getHifzs();
    }, []);

    return (

        <div>
            <Switch>
                <Route exact path="/hifz/list"
                       render={() => <HifzList
                           hifzs={hifzs}

                       />
                       }
                />

            </Switch>
        </div>
    )
}

export default Hifzs