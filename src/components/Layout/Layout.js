import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyle } from './GlobalStyles'

const Layout = ({children, style, style2, refresh}) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header style={style} style2={style2} refresh={refresh}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
