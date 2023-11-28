import { useState, useEffect } from "react"
import { zipCodeSearch, getStates, stateSearch, getPop } from "../lib/api"

export default function Nav({ setSearchResults, setZips, setPop }) {

    const [states, setStates] = useState(null)

    const [zipQuery, setZipQuery] = useState("")
    const [cityQuery, setCityQuery] = useState("")
    const [stateQuery, setStateQuery] = useState("Alabama")

    useEffect(()=>{
        getStates().then(data=>{
             console.log(data)
            setStates(data.data)
        })
    },[])

    async function handleZipSearch() {
        let results = await zipCodeSearch(zipQuery)
        if (results.location === 'Unknown location') {

        }
        setZips(null)
        setSearchResults(results)
    }

    async function handleCitySearch() {
        let results = await stateSearch(cityQuery, stateQuery)
        setSearchResults(null)
        setZips(results.places)
        let population = await getPop(cityQuery, stateQuery)
        setPop(population)
    }

    return (
        <nav>

            <div>
                <h2>List Zip Codes by City and State</h2>
                <div>
                    {states ? (
                        <>
                            <input type="text" placeholder="Enter a city" 
                            onChange={e=>{setCityQuery(e.target.value)}}/>
                            <select onChange={e=>{setStateQuery(e.target.value)}}>
                                {states.map(state=>(
                                    <option key={state.State} value={state.State}>{state.State}</option>
                                ))}
                            </select>
                            <button onClick={handleCitySearch}>Search</button>
                        </>
                    ):(
                        <>Loading states...</>
                    )}
                </div>
            </div>

            <div>
                <h2>Search by Zip Code</h2>
                <div>
                    <input type="text" placeholder="Enter a ZIP code"
                    onChange={e=>{setZipQuery(e.target.value)}}/>
                    <button onClick={handleZipSearch}>Search</button>
                </div>
            </div>

        </nav>
    )
}