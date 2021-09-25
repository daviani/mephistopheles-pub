import Link from 'next/link'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

const Footer = () => {
  const { locale } = useRouter()

  const mail = i18n.main.mail[locale]
  const mailto = 'mailto:' + mail
  const tel = i18n.main.tel[locale]
  const telto = 'tel:' + tel

  return (
    <>
      <div
        className='flex h-full bg-white bg-opacity-90 rounded-t-lg overflow-hidden mt-8'
      >
        <div className='w-1/2 text-center'>
          <p className='text-base mt-12 mb-6 uppercase text-sm sm:text-xs'>
            {i18n.main.sub_title[locale]}
          </p>
          <p className='mt-2 text-yellow-500 text-2xl sm:text-5xl mb-8'>
            {i18n.main.title[locale]}
          </p>
        </div>
        <div className='w-1/2 p-4'>
          <p>  {i18n.main.address[locale]} </p>
          <p>  {i18n.main.zipcode[locale]}{' '} {i18n.main.city[locale]}</p>
          <br />
          <p> {i18n.main.hourly_1[locale]}</p>
          <p> {i18n.main.hourly_2[locale]}</p>
          <br />
          <div className='hover:text-yellow-500 cursor-pointer'>
            <Link href={telto}>
              {tel}
            </Link>
          </div>
          <br />
          <p>{i18n.main.text_1[locale]}</p>
          <div className='hover:text-yellow-500 cursor-pointer'>
            <Link href={mailto}
            >
              {mail}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer