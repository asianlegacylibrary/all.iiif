import React, { useEffect, useState } from 'react'
import { MultiViewer } from 'react-iiif-viewer'

function getImages(manifest) {
    let a = []
    manifest.sequences[0].canvases.forEach((c) => {
        a.push(`${c.images[0].resource.service['@id']}/info.json`)
    })

    return a
}

function Viewer({ url }) {
    const [manifest, setManifest] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setManifest(json)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchData()
    }, [url])

    let view = null
    if (!manifest) {
        view = <div>Choose Manifest...</div>
        return view
    }

    let viewerArray = manifest ? getImages(manifest) : null

    view = (
        <div>
            <MultiViewer iiifUrls={viewerArray} />
        </div>
    )
    return view
}

export default Viewer
