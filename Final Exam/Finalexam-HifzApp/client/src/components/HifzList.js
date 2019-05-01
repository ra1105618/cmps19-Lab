import React from 'react';
import Hifz from './Hifz'
import {Link} from "react-router-dom";

export default function HifzList({hifzs}) {
    return (
        <>


            <table>
                <thead>
                <tr>
                    <th>Surah</th>
                    <th>from Aya</th>
                    <th>to Aya</th>
                    <th>master Level</th>
                </tr>
                </thead>
                <tbody>
                {hifzs.map((hifz, index) =>
                    <Hifz

                        key={index}
                        hifz={hifz}
                    />)
                }
                </tbody>
            </table>

        </>
    )
}

export default HifzList