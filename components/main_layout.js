import Header from './main_header'
import NavBar from './main_navbar'
import Footer from './main_footer'
import LegalNotice from './main_legal-notice'

const Layout = ({ children }) => {
    return (
        <>
            <div className='leading-normal tracking-normal bodyBackground'>
                <Header />
                <div className='container px-4 mx-2 sm:mx-8x-0 max-w-7xl mx-auto -mt-32'>
                    <div className='mx-0 sm:mx-6'>
                        <NavBar />
                        <main>
                            {children}
                        </main>

                        <Footer />
                    </div>
                </div>
                <footer>
                    <LegalNotice />
                </footer>

            </div>
        </>
    )
}
export default Layout