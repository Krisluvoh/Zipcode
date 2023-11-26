const ROOT = "https://www.stands4.com/services/v2/zip.php"
const USER_ID = "12210"
const TOKEN = "hxfobVXCT4sWGOU4"
const PARAMS = `?uid=${USER_ID}&tokenid=${TOKEN}&format=json`

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

export {
    zipCodeSearch,
    getStates
}