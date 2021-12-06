import Head from 'next/head'
import { useRouter } from 'next/router'
import i18n from '../../lib/i18n'
import Layout from '../../components/main_layout'
import ContactForm from '../../components/contact_form'
import TopComponent from '../../components/main_top-component'

export default function Contact () {
    const { locale } = useRouter().locale
    return (
        <Layout> <Head>
            <title>{i18n.main.address[locale]}</title>
            <meta name='description'
                content='Generated by create next app'
            />
            <link rel='icon'
                href='/favicon.ico'
            />
            <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
        </Head>
        <TopComponent>
            <ContactForm />
        </TopComponent>

        </Layout>
    )
}
