import Head from 'next/head'
import Layout from '../../components/main_layout'
import ContactForm from '../../components/contact_form'
import TopComponent from '../../components/main_top-component'

export default function Contact () {
    return (
        <Layout> <Head>
            <title>Mephistopheles pub - Contact</title>
            <meta name='description'
                content='Mephistopheles pub - Contact'
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopComponent>
            <ContactForm />
        </TopComponent>

        </Layout>
    )
}
