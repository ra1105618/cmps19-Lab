import React from 'react'


function Hifz({hifz}){

    return (
        <tr>
            <td>{hifz.surah}</td>
            <td>{hifz.fromAya}</td>
            <td>{hifz.toAya}</td>
            <td>{hifz.masterLevel}</td>

        </tr>
    );


}
