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

  useEffect(()=>{
    // This might not work without user input first
    try {
      const mp3 = "./assets/C:\Users\Kristie Cook\Downloads\hotel-cafe-yeti-music-main-version-28200-01-41 (1).mp3"
      let audio = new Audio(mp3)
      audio.play()
    } catch (error) {
      console.warn("mp3 failed to load")
    }
  })

  const [searchResults, setSearchResults] = useState(null)
  const [zips, setZips] = useState(null)
  const [pop, setPop] = useState(null)

  return (
    <>
      <section id="header-nav">
        <Header />
        <Nav
          setSearchResults={setSearchResults}
          setZips={setZips}
          setPop={setPop}
          />
      </section>
      <main className="container">
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
