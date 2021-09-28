import React, { useState } from 'react'
import Viewer from './Viewer'
import logo from '../assets/img/logo512.png'
import '../assets/css/App.css'
import { manifestURLS } from '../config'

function App() {
    const [url, setUrl] = useState(0)
    let manifests = manifestURLS.map((m) => {
        return (
            <p key={m.key}>
                <button onClick={() => setUrl(m.url)}>{m.key}</button>
            </p>
        )
    })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>{manifests}</div>
                <Viewer url={url} />
            </header>
        </div>
    )
}

export default App
