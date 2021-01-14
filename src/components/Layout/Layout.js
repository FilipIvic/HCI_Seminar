import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyle } from './GlobalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
