import i18n from '../lib/i18n'
import { useRouter } from 'next/router'

const WeekSpecial = ({ weekSpecial }) => {
    const { locale } = useRouter()
    return (
        <div className="rounded overflow-hidden text-center p-5">
            <h3 className="text-center text-yellow-500 text-5xl m-8 bastille">
                {weekSpecial.mainTitle}
            </h3>
            <p className="text-sm">
                {weekSpecial.subTitle}
            </p>
            
            <p className="mt-5 font-semibold text-lg">
                {i18n.cards.entry_title[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.entry1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.entry2}
            </p>
            
            {weekSpecial.entry3.length < 1
                ? ''
                : <p>
                    {i18n.cards.ou[locale]}
                </p>
            }
            
            <p className="text-yellow-500 coquette ">
                {weekSpecial.entry3}
            </p>
            
            <p className="mt-2 font-semibold text-lg">
                {i18n.cards.dishes_title[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dish1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dish2}
            </p>
            
            {weekSpecial.entry3.length < 1
                ? ''
                : <p>
                    {i18n.cards.ou[locale]}
                </p>
            }
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dish3}
            </p>
            
            <p className="mt-2 font-semibold text-lg">
                {i18n.cards.desserts_title[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dessert1}
            </p>
            <p>
                {i18n.cards.ou[locale]}
            </p>
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dessert2}
            </p>
            
            {weekSpecial.entry3.length < 1
                ? ''
                : <p>
                    {i18n.cards.ou[locale]}
                </p>
            }
            <p className="text-yellow-500 coquette ">
                {weekSpecial.dessert3}
            </p>
        
        </div>
    )
}

export default WeekSpecial
