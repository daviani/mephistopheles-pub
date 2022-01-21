import i18n from '../lib/i18n'
import { useRouter } from 'next/router'

const DailySpecial = ({ dailySpecial } ) => {
    const { locale } = useRouter()
    console.log('test',dailySpecial)
    
    return (
        <div className="rounded overflow-hidden text-center p-5">
            <h3 className="text-center text-yellow-500 text-5xl m-8 bastille ">
                {i18n.cards.secondary_title[locale]}
            </h3>
            <p className='text-sm'>
                {i18n.cards.sub_secondary_title[locale]}
            </p>
            
            <p className='mt-5 font-semibold text-lg'>
                {i18n.cards.entry_title[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.entry1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.entry2}
            </p>
            <p className='mt-2 font-semibold text-lg'>
                {i18n.cards.dishes_title[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.dish1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.dish2}
            </p>
            <p className='mt-2 font-semibold text-lg'>
                {i18n.cards.desserts_title[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.dessert1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className='text-yellow-500 coquette '>
                {dailySpecial.dessert2}
            </p>
        </div>
    )
}

export default DailySpecial
