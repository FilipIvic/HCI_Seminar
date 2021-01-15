import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyle } from './GlobalStyles'

const Layout = ({children, style, style2}) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header style={style} style2={style2}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
