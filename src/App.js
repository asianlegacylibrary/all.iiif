import React from 'react'
import logo from './assets/img/logo512.png'
import './assets/css/App.css'

let rootURL = `http://localhost:3000`
// let m = `manifest.json`

if (process.env.NODE_ENV === 'production') {
    rootURL = process.env.REACT_APP_PRODUCTION
    //m = `manifest_prod.json`
}

//const manifestURL = `${rootURL}/manifests/${m}`
const manifestURL =
    'http://iiifpres.bdrc.io/2.1.1/v:bdr:V1NLM1957_I1NLM1957_001/manifest'

const viewerURL = `https://iiif.asianlegacylibrary.org/uv.html?manifest=${manifestURL}`

console.log(viewerURL)

const manifestLink = (
    <a
        className="manifest-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://iiif.asianlegacylibrary.org/uv.html?manifest=http://iiifpres.bdrc.io/2.1.1/v:bdr:V1NLM1957_I1NLM1957_001/manifest"
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
