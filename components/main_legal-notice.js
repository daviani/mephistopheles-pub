import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LegalNotice = () => {
  const { locale } = useRouter()
  return (
    <div
      className='bg-white bottom-0 p-2 w-full border-solid border-t-2 border-yellow-500 z-20'
    >
      <div className='container mx-auto text-center font-bold'>
        <Link href={'/legal'}
              passHref
        >
          {i18n.main.legacy[locale]}
        </Link>
        {' - '}
        {i18n.main.copyright[locale]}
      </div>
    </div>
  )
}

export default LegalNotice