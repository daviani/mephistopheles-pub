import dynamic from 'next/dynamic'

const Map = dynamic( () => import('./home_map'), {
  ssr: false
} )

export default Map