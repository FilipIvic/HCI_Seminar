import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyle } from './GlobalStyles'

const Layout = (props) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header navigationStyle={props.navigationStyle}
        dropdownStyle={props.dropdownStyle}
        refresh={props.refresh}
        logo={props.logo}
        buttonText={props.buttonText}>
      </Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
