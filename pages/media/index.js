import Layout from '../../components/main_layout'
import Head from 'next/head'
import TopComponent from '../../components/main_top-component'
import MiddleComponent from '../../components/main_middle-component'
import Carousel from '../../components/media_carousel-main'
import Gallery from '../../components/media_gallery'
import Articles from '../../components/media_articles'
import { request } from '../../lib/datocms'
import { useQuerySubscription } from 'react-datocms'

export async function getStaticProps ({ preview, locale }) {
    const formattedLocale = locale.split('-')[0]
    const graphqlRequest = {
        query: `{
            allCarousels(orderBy: _createdAt_ASC) {
                id
                item {
                    alt
                    responsiveImage(imgixParams: {fit: crop, w: 1280, h: 700, auto: format}) {
                        srcSet
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        title
                        base64
                    }
                }
            }
             allGalleries(orderBy: _createdAt_ASC) {
                id
                item {
                    alt
                    responsiveImage(imgixParams: {fit: crop, w: 1000, h: 600, auto: format}) {
                        srcSet
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        title
                        base64
                    }
                }
            }
            allArticles(locale: ${formattedLocale}) {
                id
                date
                textToLink
                title
                urlToArticles
                authorName
                articleDescribe
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
    const { data: { allCarousels, allGalleries, allArticles } } = useQuerySubscription(subscription)
    return (
        <Layout>
            <Head>
                <meta charSet='utf8' lang='fr, en'/>
                <meta name='robots' content='index, follow' />
                <title>Mephistopheles pub - Media</title>
                <meta name='og:description'
                    content='Mephistopheles pub - Media'
                />
                <meta property='og:url' content='https://mephistopheles-pub.fr//' />
                <meta property='og:title' content='Site officiel du Mephistopheles pub - Lyon 5' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopComponent>
                {allCarousels.length > 0 && (
                    <Carousel items={allCarousels}/>
                )}
            </TopComponent>

            <MiddleComponent>
                {allGalleries.length === 6 && (
                    <Gallery items={allGalleries}/>
                )}
            </MiddleComponent>

            {allArticles.length > 0 && (
                <Articles allArticles={allArticles}/>
            )}

        </Layout>
    )
}
