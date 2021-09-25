import i18n from '../lib/i18n'
import { useRouter } from 'next/router'

const LegalNotice = () => {
  const { locale } = useRouter()
  return (
    <div
      className="bg-white bottom-0 p-2 w-full border-solid border-t-2 border-yellow-500 z-20">
      <div className="container mx-auto ">
        <div className="text-center font-extrabold">
          {i18n.main.copyright[locale]}
          <div className="mr-3"  >
            {i18n.main.legacy[locale]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalNotice