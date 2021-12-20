import Layout from '../../components/main_layout'
import Head from 'next/head'
import EventsContainer from '../../components/event_main'
import { responsiveImageFragment } from '../../lib/fragments'
import { request } from '../../lib/datocms'
import { useQuerySubscription } from 'react-datocms'

export async function getStaticProps ({ preview, locale }) {
    const formattedLocale = locale.split('-')[0]
    const graphqlRequest = {
        query: `{
            allEvents(locale: ${formattedLocale}) {
                id
                illustration {
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                }
            }
            title

            subDescription
            frequency
            day
            frequencyHour
            hour
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

export default function Event ({ subscription }) {
    const { data: { allEvents } } = useQuerySubscription(subscription)
    
    console.log(allEvents)

    return (
        <Layout> <Head>
            <title>Mephistopheles pub - Event</title>
            <meta name='description'
                content='Mephistopheles pub - Event'
            />
            <meta name='robots' content='index, follow' />
            <meta property='og:url' content='https://mephistopheles-pub.fr//' />
            <meta property='og:title' content='Site officiel du Mephistopheles pub - Lyon 5' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {allEvents.length > 0 && (
            <EventsContainer allEvents={allEvents} />
        )  }

        </Layout>
    )
}
