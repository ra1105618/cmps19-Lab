import React from 'react'

import React, {useState, useEffect, useRef} from 'react'

function HifzForm({history}) {
    const [surahs, setSurahs] = useState([]);
    const [hifz, setHifz] = useState({});

    const getSurahs = async () => {
        const url = 'http://localhost:8090/surahs';
        const response = await fetch(url);
        const data = await response.json();
        setSurahs(data);
    }

    useEffect(() => {
        getSurahs();
    }, []);

    function handleInputChange(e) {
        const newHifz = {...hifz};
        newHifz[e.target.name] = e.target.value
        setHifz(newHifz);

    }

    async function handleAddHifz(e) {
        e.preventDefault();
        const url = `http://localhost:8090/hifz`;
        await fetch(url,
            {
                method: "Post",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(transaction)
            });

        history.push('/hifz/list');
    }

    return <>
        <div>
            <h3>Add Hifz</h3>
            <form onSubmit={handleAddHifz}>
                <label htmlFor="surah">Surah</label>
                <select
                    onChange={handleInputChange}
                    name="surahId" id="surahId" required>
                    <option></option>
                    {
                        surahs.map((surah, index) =>
                            <option key={index} value={surah._id}>
                                {surah._id} &nbsp;
                                ({surah.name})
                            </option>)
                    }
                </select>



                <label htmlFor="fromAya">from Aya</label>
                <input
                    onChange={handleInputChange}
                    type="number" id="fromAya" name="fromAya" required/>

                <label htmlFor="toAya">to Aya</label>
                <input
                    onChange={handleInputChange}
                    type="number" id="toAya" name="toAya" required/>

                <label htmlFor="level">master level</label>
                <select
                    onChange={handleInputChange}
                    name="masterLevel" id="masterLevel" required>
                    <option></option>
                    {
                        hifz.map((hifz, index) =>
                            <option key={index} value={hifz._id}>
                                {hifz._id} &nbsp;
                                ({hifz.masterLevel})
                            </option>)
                    }
                </select>

                <button type="Submit">Submit</button>
            </form>
        </div>
    </>
}

export default HifzForm;