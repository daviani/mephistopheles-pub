import Layout from '../../components/main_layout'
import Head from 'next/head'
import TopComponent from '../../components/main_top-component'
import MiddleComponent from '../../components/main_middle-component'
import Carousel from '../../components/media_carousel-main'
// import Gallery from '../../components/media_gallery'
import { request } from '../../lib/datocms'
import { useQuerySubscription } from 'react-datocms'
// import Articles from '../../components/media_articles'

export async function getStaticProps ({ preview }) {
    // const formattedLocale = locale.split('-')[0]

    const graphqlRequest = {
        query: `{
            allCarousels(orderBy: _createdAt_DESC) {
                id
                item {
                    responsiveImage(imgixParams: {fit: crop, w: 1280, h: 700, auto: format}) {
                        srcSet
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        alt 
                        title
                        base64
                    }
                }
            }
        }`,
        preview
    }
    return {
        props: {
            subscription: preview
                ? {
                    ...graphqlRequest,
                    initialData: await request(graphqlRequest),
                    token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
                    environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null
                }
                : {
                    enabled: false,
                    initialData: await request(graphqlRequest)
                }
        }
    }
}

export default function Media ({ subscription }) {
    const { data: { allCarousels } } = useQuerySubscription(subscription)
    console.log(allCarousels)
    return (
        <Layout>
            <Head>
                <title>Mephistopheles pub - Media</title>
                <meta name='description'
                    content='Mephistopheles pub - Media'
                />
                <meta name='robots' content='index, follow' />
                <meta property='og:url' content='https://mephistopheles-pub.fr//' />
                <meta property='og:title' content='Site officiel du Mephistopheles pub - Lyon 5' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopComponent>
                {allCarousels.length > 0 && (
                    <Carousel items={allCarousels}/>
                )}
            </TopComponent>

            <MiddleComponent>
                {/*<Gallery/>*/}
            </MiddleComponent>

            {/*{allArticles.length > 0 && (*/}
            {/*    <Articles allArticles={allArticles}/>*/}
            {/*)}*/}

        </Layout>
    )
}
