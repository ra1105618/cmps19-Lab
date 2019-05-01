import React from 'react'


function SurahsTable({surahs,onTypeChange}){

    return <>

            <br/><br/>
            <label htmlFor="surahType">
                Surah Type
            </label>
            <select name="surahType" onChange={(e) => onTypeChange(e.target.value)}>
                <option value="All">All</option>
                <option value="Madina">Madina</option>
                <option value="Mecca">Mecca</option>
            </select>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>englishName</th>
                    <th>ayaCount</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {surahs.map((surah, index) =>
                    <Account

                        key={index}
                        surah={surah}
                    />)
                }
                </tbody>
            </table>

        </>



}

export default SurahsTable