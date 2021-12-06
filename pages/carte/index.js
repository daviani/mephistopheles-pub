import Layout from '../../components/main_layout'
import Head from 'next/head'
import TopComponent from '../../components/main_top-component'
import dynamic from 'next/dynamic'
import { request } from '../../lib/datocms'
import { useQuerySubscription } from 'react-datocms'

export async function getStaticProps ({ preview, locale}) {
    const formattedLocale = locale.split('-')[0]
    const graphqlRequest = {
        query: `{
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
    const { data: { allCartes } } = useQuerySubscription(subscription)

    return (
        <Layout>
            <Head>
                <title>Mephistopheles pub - Carte</title>
                <meta name='description'
                    content='Mephistopheles pub - Carte'
                />
                <link rel='icon'
                    href='../../public/images/favicon.ico'
                />
                <link
                    href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
                    rel="stylesheet"
                />
            </Head>
            <TopComponent>
                <PDFViewer allCartes={allCartes} />
            </TopComponent>
        </Layout>
    )
}
