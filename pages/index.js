import Layout from '../components/main_layout'
import Head from 'next/head'
import TopComponent from '../components/main_top-component'
import About from '../components/home_about'
import MiddleComponent from '../components/main_middle-component'
import CardsCocktail from '../components/home_cocktails-cards'
import Map from '../components/home_import-map'

import { responsiveImageFragment } from '../lib/fragments'
import { request } from '../lib/datocms'
import { useQuerySubscription } from 'react-datocms'
import WeekSpecial from '../components/main_weekily-special'

export async function getStaticProps ({ preview, locale }) {
    const formattedLocale = locale.split('-')[0]
    const graphqlRequest = {
        query: `{
            weekSpecial {
                mainTitle
                subTitle
                entry1
                entry2
                entry3
                dish1
                dish2
                dish3
                dessert1
                dessert2
                dessert3
            }
            allCocktails(locale: ${formattedLocale}) {
                id
                illustration {
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                    }
                }
                title
                describe
        }
    }
    ${responsiveImageFragment}
    `,
        preview,
    }
    return {
        props: {
            subscription: preview
                ? {
                    ...graphqlRequest,
                    initialData: await request(graphqlRequest),
                    token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
                    environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
                }
                : {
                    enabled: false,
                    initialData: await request(graphqlRequest),
                },
        },
    }
}

export default function Home ({ subscription }) {
    const { data: { allCocktails, weekSpecial } } = useQuerySubscription(subscription)
    
    return (
        <Layout>
            <Head>
                <meta charSet="utf8"/>
                <title>Mephistopheles pub - Accueil</title>
                <meta name="description"
                    content="Mephistopheles pub - Accueil"
                />
                <meta name="robots" content="index, follow"/>
                <meta property="og:url" content="https://mephistopheles-pub.fr//"/>
                <meta property="og:title" content="Site officiel du Mephistopheles pub - Lyon 5"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            
            {weekSpecial
                ?
                <>
                    <TopComponent>
                        <WeekSpecial weekSpecial={weekSpecial} />
                    </TopComponent>
                    
                    <MiddleComponent>
                        <About/>
                    </MiddleComponent>
                    
                    {allCocktails.length > 0 && (
                        <MiddleComponent>
                            <CardsCocktail allCocktails={allCocktails}/>
                        </MiddleComponent>
                    )}
    
                    {/*<MiddleComponent>*/}
                    {/*    <CartesCard />*/}
                    {/*</MiddleComponent>*/}
    
                    <MiddleComponent>
                        <Map/>
                    </MiddleComponent>
                </>
                :
                <>
                    <TopComponent>
                        <About/>
                    </TopComponent>
                    
                    {allCocktails.length > 0 && (
                        <MiddleComponent>
                            <CardsCocktail allCocktails={allCocktails}/>
                        </MiddleComponent>
                    )}
                    
                    {/*<MiddleComponent>*/}
                    {/*    <CartesCard />*/}
                    {/*</MiddleComponent>*/}
                    
                    <MiddleComponent>
                        <Map/>
                    </MiddleComponent>
                </>
            }
        </Layout>
    )
}
