import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'

import { useState, useEffect } from 'react'

function App() {

  const [searchResults, setSearchResults] = useState(null)

  return (
    <>
      <Header />
      <Nav setSearchResults={setSearchResults}/>
      <main>
        <div id="search-results">
          {searchResults && <SearchResults results={searchResults} />}
        </div>
      </main>
      <Footer /> 
    </>
  )
}

export default App
