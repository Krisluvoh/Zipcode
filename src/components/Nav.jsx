import { useState, useEffect } from "react"
import { zipCodeSearch, getStates } from "../lib/api"

export default function Nav({ setSearchResults }) {

    const [states, setStates] = useState(null)

    const [zipQuery, setZipQuery] = useState("")
    const [cityQuery, setCityQuery] = useState("")
    const [stateQuery, setStateQuery] = useState("Alabama")

    useEffect(()=>{
        getStates().then(data=>{
            setStates(data.data)
        })
    },[])

    async function handleZipSearch() {
        let results = await zipCodeSearch(zipQuery)
        if (results.location === 'Unknown location') {

        }
        setSearchResults(results)
    }

    async function handleCitySearch() {
        console.log(cityQuery, stateQuery)
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
                <h2>Search by Zip</h2>
                <div>
                    <input type="text" placeholder="Enter a ZIP code"
                    onChange={e=>{setZipQuery(e.target.value)}}/>
                    <button onClick={handleZipSearch}>Search</button>
                </div>
            </div>

        </nav>
    )
}