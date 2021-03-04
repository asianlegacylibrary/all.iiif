import React from 'react'
import logo from './assets/img/logo512.png'
import './assets/css/App.css'

let rootURL = `http://localhost:3000`
let m = `manifest.json`

if (process.env.NODE_ENV === 'production') {
    rootURL = process.env.REACT_APP_PRODUCTION
    m = `manifest_prod.json`
}

const manifestURL = `${rootURL}/manifests/${m}`

const viewerURL = `${rootURL}/uv.html?manifest=${manifestURL}`

const manifestLink = (
    <a
        className="manifest-link"
        target="_blank"
        rel="noopener noreferrer"
        href={viewerURL}
    >
        :: ACIP hosted IIIF ::
    </a>
)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {manifestLink}
            </header>
        </div>
    )
}

export default App
