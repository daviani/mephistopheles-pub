import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
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
                            {i18n.main.address[locale]}{' | '}{i18n.main.city[locale]}{' '}{i18n.main.zipcode[locale]}
                        </p>
                    </div>
                    <div />
                </div>
            </div>
            <div className='w-full m-0 p-0 bg-cover bg-bottom headerBackground '>
                <div
                    className='container max-w-4xl mx-auto pt-16 sm:pt-12 text-center break-normal'
                >
                    <h1 className='mt-10 sm:mt-16 font-medium text-yellow-500 mb-8 text-5xl sm:text-7xl bastille tracking-wider '>
                        <Link href='/'
                            passHref
                        >
                            {i18n.main.title[locale]}
                        </Link>
                    </h1>
                    <h2 className='text-base md:text-xl text-white coquette'>
                        {i18n.main.sub_title[locale]}
                    </h2>
                    <Link href='/carte' passHref prefetch>
                        <div className='ml-auto mr-auto mt-5 p-2.5 rounded-xl font-medium text-white border-2 border-white w-24 cursor-pointer'>
                            {i18n.main.card_title[locale]}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeaderBand
