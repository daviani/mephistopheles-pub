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
                <link rel='icon'
                    href='../../public/images/favicon.ico'
                />
            </Head>


            <TopComponent>
                <LegacyMain />
            </TopComponent>
        </Layout>
    )
}
