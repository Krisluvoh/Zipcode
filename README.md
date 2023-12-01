**ZipUSA - US Zip Code Search Database**             https://zipusa.netlify.app/ 
Welcome to ZipUSA, a web application that allows users to search for and retrieve information about US zip codes. This README provides detailed instructions on setting up and running the project, as well as explanations for each component and commit in the codebase.

[Image Alt Text](https://drive.google.com/file/d/1zNOQk93slyUyK9OYu2wYvEFUVmoehBAS/view)       Wireframe Image Link












[Image Alt Text](https://drive.google.com/file/d/1zNOQk93slyUyK9OYu2wYvEFUVmoehBAS/view)   Wireframe Image Link


Table of Contents

1. Project Structure
2. Getting Started
3. Components Overview
    Footer.jsx
    Header.jsx
    Nav.jsx
    SearchResults.jsx
    VideoBackdrop.jsx
    Zips.jsx
    api.js
    App.jsx
    index.css
    main.jsx
    index.html
4. Features
5. Technologies Used
6. File Structure
7. Credits
8. Issues
9. Stretch Goals

**Project Structure**

The project is organized into different components, each serving a specific purpose. Below is an overview of the project structure:

***Footer.jsx***
The footer component displays attributions to data providers. Each <a> tag is currently pointing to a placeholder link (#). The application integrates multiple APIs to gather data, including: 
- Stands4 API
- Zippopotam API
- Data USA API
- Teleport API


export default function Footer() {
    return (
        <footer>
            <p>Data provided by <a href="#" target="_blank">Stands4 API</a></p>
            <p>Data provided by <a href="#" target="_blank">Zippopotam API</a></p>
            <p>Data provided by <a href="#" target="_blank">Data USA API</a></p>
            <p>Data provided by <a href="#" target="_blank">Teleport API</a></p>
        </footer>
    )
}


***Header.jsx***
The header component displays the title and a brief description of the web application.

export default function Header() {
    return (
        <header>
            <h1>ZipUSA</h1>
            <h4>US Zip Code Search Database</h4>
        </header>
    )
}


***Nav.jsx***
The navigation component (Nav) provides user interaction for searching zip codes, cities, and states.

import { useState, useEffect } from "react";
import { zipCodeSearch, getStates, stateSearch, getPop } from "../lib/api";

export default function Nav({ setSearchResults, setZips, setPop }) {
    // ... (component code)
}


***SearchResults.jsx***
The SearchResults component presents search results, including location, latitude, and longitude.

export default function SearchResults({results}) {
    // ... (component code)
}


***VideoBackdrop.jsx***
A component showcasing a video backdrop with a YouTube embed. Provides a visually engaging background for the application.

export default function VideoBackdrop() {
  return (
    <div id="video-backdrop">
        <div id="video">
            <iframe width="100vw" height="100vh" src="https://www.youtube.com/embed/sYYMBV68hmE?si=25e36obiTtgFG9Re&amp;controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div id="video-filter"></div>
    </div>
  )
}


***Zips.jsx***
The Zips component displays information about zip codes.

export default function Zips({zips}) {
    // ... (component code)
}


***api.js***
Contains functions for fetching data from various APIs, such as Stands4, Zippopotam, Data USA, and Teleport. Also includes utility functions for handling state codes.

// ... (api functions)


**App.jsx**
The main application component (App) integrates other components and manages state related to search results, zip codes, and population.

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



**index.css**
The stylesheet defining the application's visual style, including color schemes, fonts, and media queries for responsiveness.

/* ... (CSS styles) */


**main.jsx**
The entry point for React rendering, connecting the `App` component to the HTML root.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)



**index.html**
The HTML entry point for the application, embedding the root div, video backdrop, and script references.

The HTML file serves as the entry point for the React application.

<!doctype html>
<html lang="en">
  <head>
    <!-- ... (head content) -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <!-- ... (audio tag) -->
  </body>
</html>


import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import Zips from './components/Zips';

import { useState, useEffect } from 'react';

function App() {
    // ... (component code)
}


**Getting Started**
To run the project locally, follow these steps:

1.  Clone the repository `git clone [https://github.com/Krisluvoh/Zipcode.git]`
2.  Navigate to the project directory `cd [Zipcode]`
3.  Install dependencies (npm install)
4.  Start the development server (npm run dev)
5.  Open your browser and go to http://localhost:5173 to view the application.


**Components Overview**
*Footer.jsx*
The Footer component displays attributions to data providers. Each <a> tag is currently pointing to a placeholder link (#).

*Header.jsx*
The Header component displays the title and a brief description of the web application.

*Nav.jsx*
The Nav component provides navigation and search functionality. It includes sections for listing zip codes by city and state, as well as searching by zip code.

*SearchResults.jsx*
The SearchResults component presents search results, including location, latitude, and longitude.

*VideoBackdrop.jsx*
A component showcasing a video backdrop with a YouTube embed. 

*Zips.jsx*
The Zips component displays information about zip codes, including the zip code itself, latitude, longitude, and city.

*api.js*
The api.js file contains functions for fetching data from various APIs. The functions include zipCodeSearch, getStates, stateSearch, and getPop.

*App.jsx*
The App component integrates other components, such as Header, Nav, Footer, SearchResults, and Zips. It manages state related to search results, zip codes, and population. The useEffect hook attempts to play an audio file on component mount.

*index.css*
The index.css file contains styles for the application, including color variables, background images, and media queries for responsive design.

*main.jsx*
The entry point for React rendering, connecting the `App` component to the HTML root.

*index.html*
The index.html file serves as the entry point for the React application. It includes a placeholder audio tag that attempts to load an audio file.


***Features***

1. City and State Lookup:
List zip codes by specifying a city and state. ZipUSA retrieves and presents the information you seek in a user-friendly format.

2. Zip Code Search:
Retrieve details of a particular zip code by entering it into the search bar. ZipUSA returns comprehensive data, offering insights into the corresponding location.

3. Population Information:
ZipUSA provides population details, enhancing your understanding of the demographics associated with a zip code.

4. Visual Appeal with Background Video:
Immerse yourself in the visual charm of ZipUSA with a captivating background video showcasing aerial drone footage of cities across the United States. It's not just about data; it's an experience!


***Technologies Used***
React: Powering the interactive user interface.
YouTube API: Enabling the incorporation of background videos for a visually engaging experience.


***File Structure***
/src/components: Contains React components for different sections of the app.
/src/lib: Houses API calls and data-fetching functions.


***Credits***
Data provided by Stands4 API for zip code information.
Data provided by Zippopotam API for state and city details.
Data provided by Data USA API for population statistics.
Data provided by Teleport API for additional city information.


***Issues***
1. Unsuccessfully attempted to add music upon opening the website.
2. Unsuccessfully attempted to add a water effect to background photo.

***Stretch Goals***
1. Have city specific background drone videos populate for every city search result.
2. Have more city specific results populate for example: facts about the city like information on restaurants, entertainment, history, etc...
3. Expand beyond US search and have International city capabilities.