import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
import SwitchLanguage from './main_switch-language'
import Link from 'next/link'

const HeaderBand = () => {
  const { locale } = useRouter()

  return (
    <>
      <div className='bg-yellow-500 p-1 mt-0 fixed w-full z-10 border-solid border-b-2 border-white z-30'>
        <div className='flex justify-between mx-4'>
          <div />
          <div className='mt-1 text-center uppercase text-white font-extrabold text-xs md:text-base'>
            <p>
              {i18n.main.address[locale]}{' | '}{i18n.main.hourly_1[locale]}{' - '}{i18n.main.hourly_2[locale]}
            </p>
          </div>
          <div />
        </div>
      </div>
      <div className='w-full m-0 p-0 bg-cover bg-bottom headerBackground '>
        <div
          className='container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal'
        >
          <h1 className='mt-10 sm:mt-15 text-white font-extrabold mb-8 text-5xl font-Bastille'>
            <Link href='/'
                  passHref
            >
              {i18n.main.title[locale]}
            </Link>
          </h1>
          <h2 className=' md:text-2xl text-base text-white uppercase'>
            {i18n.main.sub_title[locale]}
          </h2>
        </div>
      </div>
    </>
  )
}

export default HeaderBand