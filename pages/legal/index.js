import Layout from '../../components/main_layout'
import Head from 'next/head'
import TopComponent from '../../components/main_top-component'
import LegacyMain from '../../components/legacy_main'

export default function Carte () {

    return (
        <Layout>
            <Head>
                <title>Mephistopheles pub - Legal</title>
                <meta name='description'
                    content='Mephistopheles pub - Legal'
                />
                <meta name='robots' content='index, follow' />
                <meta property='og:url' content='https://mephistopheles-pub.fr//' />
                <meta property='og:title' content='Site officiel du Mephistopheles pub - Lyon 5' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopComponent>
                <LegacyMain />
            </TopComponent>
        </Layout>
    )
}
