import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

const CartesCard = () => {
  const { locale } = useRouter()
  return (
    <>
      <div
        className='flex flex-col cardBackground shadow-lg bg-cover bg-center rounded  w-full'
      >
        <div className='grid grid-cols-12 '>
          <div
            className='relative col-span-12 bg-yellow-500 opacity-75 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7'
          >

            <div
              className='border-l-4 border-yellow-600 py-20 px-5 mx-2 text-white text-center text-white items-center'
            >
              <p className=' text-xl md:text-4xl lg:text-6xl uppercase  font-bold '>
                {i18n.home.cards_menu_title[locale]}
              </p>
              <button
                className='mt-10 p-2.5 rounded-xl font-medium text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 focus:outline-none border-2 border-white focus:border-yellow-400 transition-all'
              >
                {i18n.home.button_1[locale]}
              </button>
              <p className=' text-black font-light text-2xl pt-6 mt-8'>
                {i18n.home.body_text_1[locale]}
              </p>
              <p className=' text-black font-light text-2xl mt-2'>
                {i18n.home.body_text_2[locale]}
              </p>
              <p className=' text-black font-light text-2xl mt-2'>
                {i18n.home.body_text_3[locale]}
              </p>

              <button
                className='mt-10 p-2.5 rounded-xl font-medium text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 focus:outline-none border-2 border-white focus:border-yellow-400 transition-all'
              >
                {i18n.home.button_2[locale]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartesCard

