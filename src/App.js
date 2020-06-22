import React from 'react'
import logo from './assets/img/logo512.png'
import './assets/css/App.css'

let rootURL = `http://localhost:3000`
let m = `manifest.json`

if (process.env.NODE_ENV === 'production') {
    rootURL = process.env.REACT_APP_PRODUCTION
    m = `manifest_prod.json`
}

//const manifestURL = `http://iiifpres.bdrc.io/2.1.1/v:bdr:V1KG1609_I1KG1702/manifest`
const manifestURL =
    'http://iiifpres.bdrc.io/2.1.1/v:bdr:V1NLM140_I1NLM140_001/manifest'

const viewerURL = `${rootURL}/uv.html?manifest=${manifestURL}`

const m2 = `${rootURL}/manifests/${m}`

const v2 = `${rootURL}/uv.html?manifest=${m2}`
//const viewerURL = `/uv.html?manifest=${manifestURL}`

console.log(viewerURL)

// const btn = (
//     <a
//         className="manifest-link"
//         target="_blank"
//         rel="noopener noreferrer"
//         href={viewerURL}
//     >
//         MANIFEST
//     </a>
// )

const b2 = (
    <a
        className="manifest-link"
        target="_blank"
        rel="noopener noreferrer"
        href={v2}
    >
        :: ACIP hosted IIIF ::
    </a>
)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {b2}
            </header>
        </div>
    )
}

export default App
