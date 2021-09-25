import HeaderBand from './main_header'

const Layout = ({ children }) => {

  return (
    <>
      <HeaderBand />
      <main>{children}</main>

    </>
  )
}

export default Layout