import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
import SwitchLanguage from './main_switch-language'

const HeaderBand = () => {
  const { locale } = useRouter()

  return (
    <>
      <div className='bg-yellow-500 p-1 mt-0 fixed w-full z-10 border-solid border-b-2 border-white z-30'>
        <div className='flex justify-between mx-4'>
          <div />
          <div className='mt-2 ml-3 text-center uppercase'>
            {i18n.main.address[locale]}{' | '}{i18n.main.hourly_1[locale]}{' - '}{i18n.main.hourly_2[locale]}
          </div>
          <div>
            <SwitchLanguage />
          </div>
        </div>
      </div>
      <div className="w-full m-0 p-0 bg-cover bg-bottom headerBackground ">
        <div
          className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <h1 className="mt-20 md:mt-0 sm text-white font-extrabold mb-8 text-5xl font-Bastille">
            {i18n.main.title[locale]}
          </h1>
          <h2 className="text-xl md:text-2xl text-white uppercase">
            {i18n.main.sub_title[locale]}
            </h2>
        </div>
      </div>
    </>
  )
}

export default HeaderBand