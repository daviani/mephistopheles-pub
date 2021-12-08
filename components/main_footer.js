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
        <div
            className="flex flex-col md:flex-row h-full bg-white bg-opacity-90 rounded-t-lg overflow-hidden mt-8"
        >
            <div className="w-full md:w-1/2 text-center">
                <p className="text-base mt-12 mb-6 uppercase text-sm break-words">
                    {i18n.main.sub_title[locale]}
                </p>
                <p className="mt-2 text-yellow-500 text-5xl mb-8 bastille break-words">
                    {i18n.main.title[locale]}
                </p>
            </div>
            <div className="w-full md:w-1/2 p-4 text-center">
                <p> {i18n.main.hourly_1[locale]}</p>
                <p> {i18n.main.hourly_2[locale]}</p>
                <p> {i18n.main.hourly_3[locale]}</p>
                <p> {i18n.main.hourly_4[locale]}</p>
                <p> {i18n.main.hourly_5[locale]}</p>
                <p> {i18n.main.hourly_6[locale]}</p>

                <br/>
                <p>{i18n.main.text_1[locale]}</p>
                <div className="hover:text-yellow-500 cursor-pointer">
                    <Link href={telto} passHref>
                        <p className="break-words">
                            {tel}
                        </p>
                    </Link>
                </div>
                <div className="hover:text-yellow-500 cursor-pointer">
                    <Link href={mailto} passHref>
                        <p className="break-words">
                            {mail}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
