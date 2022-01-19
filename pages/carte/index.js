import Layout from '../../components/main_layout'
import Head from 'next/head'
import TopComponent from '../../components/main_top-component'
import dynamic from 'next/dynamic'
import { request } from '../../lib/datocms'
import { useQuerySubscription } from 'react-datocms'
import DishOfDay from '../../components/main_dish-of-day'
import MiddleComponent from '../../components/main_middle-component'

export async function getStaticProps ({ preview, locale}) {
    const formattedLocale = locale.split('-')[0]
    const graphqlRequest = {
        query: `{
        allDishOfDays(locale: ${formattedLocale}) {
            entry1
            entry2
            dish1
            dish2
            desserts1
            desserts2
        }
        allCartes(locale: ${formattedLocale}, orderBy: _createdAt_ASC) {
            id
            titre
            fichierPdf {
                url
            }
        }
    }`,
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

const PDFViewer = dynamic(() => import('../../components/carte_pdf-viewer'), {
    ssr: false
})

export default function Carte ({subscription}) {
    const { data: { allCartes, allDishOfDays } } = useQuerySubscription(subscription)

    return (
        <Layout>
            <Head>
                <meta charSet='utf8'/>
                <title>Mephistopheles pub - Carte</title>
                <meta name='description'
                    content='Mephistopheles pub - Carte'
                />
                <meta name='robots' content='index, follow' />
                <meta property='og:url' content='https://mephistopheles-pub.fr//' />
                <meta property='og:title' content='Site officiel du Mephistopheles pub - Lyon 5' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
                    rel="stylesheet"
                />
            </Head>
            <TopComponent>
                <PDFViewer allCartes={allCartes} />
            </TopComponent>
    
            {allDishOfDays.length === 1 &&
                <MiddleComponent>
                    <DishOfDay/>
                </MiddleComponent>
            }
        </Layout>
    )
}
