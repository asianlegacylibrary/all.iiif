import React from 'react'
import logo from './assets/img/logo512.png'
import './assets/css/App.css'

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
