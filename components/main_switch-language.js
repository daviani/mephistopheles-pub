import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fr from '../public/images/main/flags/fr.png'
import en from '../public/images/main/flags/en.png'

const SwitchLanguage = () => {
    const {locale, asPath} = useRouter()
    const ref = React.useRef()
    return (
        <>
            <Link href={asPath}
                locale={locale === 'fr' ? 'en' : 'fr'}
                title='switch to english or french'
                ref={ref}
            >
                {locale === 'fr' ? (
                    <Image src={en}
                        alt='en'
                        className='cursor-pointer'
                        height={33}
                        width={33}
                    />
                ) : (
                    <Image src={fr}
                        alt='fr'
                        className='cursor-pointer'
                        height={33}
                        width={33}
                    />
                )}
            </Link>
        </>
    )
}

export default SwitchLanguage