import {useState, useEffect} from "react";
import {useRouter} from 'next/router'
import Loader from '../components/main_loading'
import 'tailwindcss/tailwind.css'
import '../styles/index.css'

function MyApp({Component, pageProps}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setLoading(true)
    });
    router.events.on("routeChangeComplete", (url) => {
      setLoading(false)
    });
  }, [router.events]);

  return (
    <>
      {loading ? <Loader/> : <Component {...pageProps} />}
    </>
  )
}

export default MyApp
