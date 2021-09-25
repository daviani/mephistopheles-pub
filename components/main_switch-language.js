import Image          from 'next/image'
import Link from 'next/link'
import { useRouter }  from 'next/router'
import fr from '../public/images/main/flags/fr.png'
import en from '../public/images/main/flags/en.png'

const SwitchLanguage = () => {
  const { locale, asPath } = useRouter()
  return (
    <>
      <Link href={asPath}
            passHref
            locale={locale === 'fr' ? 'en' : 'fr'}
            title='switch to english or french'
      >
        <div className='mt-5 sm:mt-2'>
          {locale === 'fr' ? (
            <Image src={en}
                   alt='en'
                   className='cursor-pointer'
                   height={25}
                   width={25}
            />
          ) : (
            <Image src={fr}
                   alt='fr'
                   className='cursor-pointer'
                   height={25}
                   width={25}
            />
          )}
        </div>
      </Link>
    </>
  )
}

export default SwitchLanguage