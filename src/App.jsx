/*
  example zippo object
    {
      "place name": "Murrieta",
      "longitude": "-117.2738",
      "post code": "92562",
      "latitude": "33.5631"
    }
*/

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'
import Zips from './components/Zips'

import { useState, useEffect } from 'react'

function App() {

  const [searchResults, setSearchResults] = useState(null)
  const [zips, setZips] = useState(null)
  const [pop, setPop] = useState(null)

  return (
    <>
      <Header />
      <Nav 
        setSearchResults={setSearchResults} 
        setZips={setZips} 
        setPop={setPop}
        />
      <main>
        {pop && <h2>Population: {pop}</h2>}
        <div id="search-results">
          {searchResults && <SearchResults results={searchResults} />}
          {zips && <Zips zips={zips} />}
        </div>
      </main>
      <Footer /> 
    </>
  )
}

export default App
