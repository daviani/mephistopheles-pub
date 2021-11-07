import { useRouter } from 'next/router'
import i18n from '../lib/i18n'
import { Image } from 'react-datocms'

const CardsCocktail = ({ allCocktails }) => {
    const { locale } = useRouter()
    return (
        <div className='bg-white my-8 p-6 '>
            <h3 className='text-center text-yellow-500 text-5xl m-8 bastille '>
                {i18n.home.cocktail_card_title[locale]}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-3'>
                {allCocktails.map((cocktail) => (
                    <div key={cocktail.id} className='flex flex-col shadow rounded-xl bg-grey-300 m-3 hover:shadow-xl hover:bg-grey-200'>
                        <div className='relative'>
                            <Image
                                data={cocktail.illustration.responsiveImage}
                                alt='fdsfds'
                                height='450'
                                width='350'
                                layout='responsive'
                                className='rounded-t-xl'
                            />
                        </div>
                        <div className='text-center m-2'>
                            <p className=' text-yellow-500  text-base'>{cocktail.title}</p>
                            <p className='text-sm mt-4'>
                                {cocktail.describe}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default CardsCocktail