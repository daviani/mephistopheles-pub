import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import Link from 'next/link'
import i18n from '../lib/i18n'
import { useRouter } from 'next/router'

const Map = () => {
    const { locale } = useRouter()
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '50vh',
        latitude: 45.757033726379305,
        longitude: 4.827,
        zoom: 13
    })

    return (
        <>
            <div className="flex flex-col md:flex-row ">
                <div className="inline-flex w-full md:w-2/3">
                    <ReactMapGL
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
                        {...viewport}
                        onViewportChange={(nextViewport) => setViewport(nextViewport)}
                        scrollZoom={false}
                        touchZoom={true}
                    >
                        <Marker latitude={45.757033726379305} longitude={4.81551456429114}>
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 66 66" viewBox="0 0 66 66"
                                height="20px"
                                width="30px" fill="#dda435">
                                <path d="M33,1C18.53,1,6.75,12.78,6.75,27.26c0,10.46,6.13,19.82,15.66,24.02l8.97,12.87C31.75,64.68,32.36,65,33,65
                             c0,0,0,0,0.01,0c0.64,0,1.25-0.32,1.62-0.85l8.96-12.87c9.53-4.2,15.66-13.56,15.66-24.02C59.25,12.78,47.48,1,33,1z M33,41.56
                             c-7.9,0-14.3-6.41-14.3-14.3c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3C47.3,35.15,40.9,41.56,33,41.56z"/>
                            </svg>
                        </Marker>
                    </ReactMapGL>
                </div>
                <div className="w-full md:w-1/3 bg-yellow-500 text-white text-center items-center">
                    <p className="mt-16 text-5xl bastille">
                        {i18n.main.title[locale]}
                    </p>
                    <p className="mt-5">
                        {i18n.main.address[locale]}
                    </p>
                    <p className="mt-2">
                        {i18n.main.zipcode[locale]} {i18n.main.city[locale]}
                    </p>
                    <button
                        className="mt-10 mb-10 p-2.5 rounded-xl font-medium text-white bg-yellow-500 active:bg-yellow-600 focus:outline-none border-2 border-white leading-none">
                        <Link href="https://maps.google.com?daddr=45.757033726379305,4.81551456429114"
                            rel="noopener noreferrer" target="_blank"
                        >
                            {i18n.main.itinerary[locale]}
                        </Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Map
