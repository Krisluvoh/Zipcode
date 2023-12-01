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

function resizeIframe(iframe) {
  let w = window.innerWidth
  let h = window.innerHeight
  let s = Math.max(w, h)
  iframe.width = s
  iframe.height = s
  iframe.style.transform = `translateY(-33%)`
  // console.log(iframe)
}

function App() {

  useEffect(()=>{
    let iframe = document.querySelector('iframe')
    resizeIframe(iframe)
    window.addEventListener('resize', ()=>{resizeIframe(iframe)})
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
        {pop && <h2 className='zip'>Population: {pop}</h2>}
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
