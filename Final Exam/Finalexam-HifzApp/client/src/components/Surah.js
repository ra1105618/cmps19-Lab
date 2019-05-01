import React from 'react'


function Surah({surah}){

    return (
        <tr>
            <td>{surah.name}</td>
            <td>{surah.englishName}</td>
            <td>{surah.ayaCount}</td>
            <td>{surah.type}</td>

        </tr>
    );


}

export default Surah