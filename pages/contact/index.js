import Head from 'next/head'
import Layout from '../../components/main_layout'
import ContactForm from '../../components/contact_form'
import TopComponent from '../../components/main_top-component'

export default function Contact () {
    return (
        <Layout>
            <Head>
                <meta charSet='utf8'/>
                <title>Mephistopheles pub - Contact</title>
                <meta name="description"
                    content="Mephistopheles pub - Contact"
                />
                <meta name="robots" content="index, follow"/>
                <meta property="og:url" content="https://mephistopheles-pub.fr//"/>
                <meta property="og:title" content="Site officiel du Mephistopheles pub - Lyon 5"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <TopComponent>
                <ContactForm/>
            </TopComponent>
        
        </Layout>
    )
}
