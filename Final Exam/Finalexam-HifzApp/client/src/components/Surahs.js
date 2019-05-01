import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'

import SurahsTable from './SurahsTable'


function Surahs({history}){

    const[surahs,setSurahs]=useState

    async function getSurahs(surahType){

        let url=`http://localhost:8090/surahs`

        if(surahType){

            url=`${url}?type=${surahType}`
        }

        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setSurahs(data);


    }

    useEffect(() => {
        getSurahs();
    }, []);


    return <>
        <div>
            <Switch>
                <Route exact path="/surahs/list"
                       render={() => <SurahsTable
                           surahs={surahs}
                           onTypeChange={getSurahs}
                            />
                       }
                />

            </Switch>
        </div>
    </>
}


export default Surahs
