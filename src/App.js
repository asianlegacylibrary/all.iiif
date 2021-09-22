import React from 'react'
import logo from './assets/img/logo512.png'
import './assets/css/App.css'

const manifestURLS = [
    {
        key: 'Asian Legacy Library',
        url:
            'https://all-library-manifests.s3.us-west-2.amazonaws.com/ISKS1RC8012.IG.ISKS1RC8012.001.manifest.json',
    },
    {
        key: 'BDRC',
        url:
            'http://iiifpres.bdrc.io/2.1.1/v:bdr:V1NLM1957_I1NLM1957_001/manifest',
    },
]
let mLinks = []
manifestURLS.forEach((m) => {
    let url = `https://iiif.asianlegacylibrary.org/uv.html?manifest=${m.url}`
    mLinks.push(
        <a
            className="manifest-link"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            :: {m.key} hosted IIIF ::
        </a>
    )
})

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {mLinks}
            </header>
        </div>
    )
}

export default App
