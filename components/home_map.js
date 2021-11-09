import { useState }           from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const Map = () => {
    const [viewport, setViewport] = useState( {
        width    : '100vw',
        height   : '50vh',
        latitude : 45.757033726379305,
        longitude: 4.99,
        zoom     : 11,
    } )

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v10"
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport( nextViewport )}
            scrollZoom={false}
        >
            <Marker latitude={45.757033726379305} longitude={4.81551456429114}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 66 66" viewBox="0 0 66 66" height="20px"
                    width="30px" fill="#dda435">
                    <path d="M33,1C18.53,1,6.75,12.78,6.75,27.26c0,10.46,6.13,19.82,15.66,24.02l8.97,12.87C31.75,64.68,32.36,65,33,65
                    c0,0,0,0,0.01,0c0.64,0,1.25-0.32,1.62-0.85l8.96-12.87c9.53-4.2,15.66-13.56,15.66-24.02C59.25,12.78,47.48,1,33,1z M33,41.56
                    c-7.9,0-14.3-6.41-14.3-14.3c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3C47.3,35.15,40.9,41.56,33,41.56z"/>
                </svg>
            </Marker>
        </ReactMapGL>
    )
}

export default Map