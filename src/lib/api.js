import { getStateCodeByStateName } from "us-state-codes"

const ROOT = "https://www.stands4.com/services/v2/zip.php"
const USER_ID = "12210"
const TOKEN = "hxfobVXCT4sWGOU4"
const PARAMS = `?uid=${USER_ID}&tokenid=${TOKEN}&format=json`

const ZIPPO_ROOT = "https://api.zippopotam.us/us/"

async function zipCodeFetch(params) {
    const res = await fetch(ROOT + PARAMS + params)
    if (!res.ok) {
        // handle failed requests here
        console.log(res)
        return
    }
    const data = await res.json()
    return data
}

async function zipCodeSearch(zipCode) {
    const data = await zipCodeFetch('&zip='+zipCode)
    return data
}

async function getStates() {
    const res = await fetch("https://datausa.io/api/data?drilldowns=State&measures=Population&year=2015")
    const data = await res.json()
    return data
}

async function stateSearch(city, state) {
    state = getStateCodeByStateName(state)
    const url = ZIPPO_ROOT + state + "/" + city
    const res = await fetch(url)
    const data = await res.json()
    return data
}

async function getPop(city, state) {
    try {
        const res = await fetch(`https://api.teleport.org/api/cities/?search=${city}, ${state}`)
        const data = await res.json()
        let href = data._embedded['city:search-results'][0]._links['city:item'].href
        // console.log(data, href)
        const res2 = await fetch(href)
        const data2 = await res2.json()
        return data2.population
    } catch (error) {
        console.log(error)
    }
}

export {
    zipCodeSearch,
    getStates,
    stateSearch,
    getPop
}