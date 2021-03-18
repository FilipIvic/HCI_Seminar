import React from 'react'
import styles from '../Footer/style.module.css'
import styled from 'styled-components'

import {Link} from 'gatsby'
import {AnchorLink} from 'gatsby-plugin-anchor-links'

const Footer = () => {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerDesc}>
            <h1>AAAA</h1>
            <p>aaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>BBBB</h2>
            <FooterLink to="https://www.facebook.com/profile.php?id=100025059183987" target="_blank">b</FooterLink>
            <AnchorLinkNew to="/#test" title="Test">bb</AnchorLinkNew>
            <FooterLink to="/">bbb</FooterLink>
          </div>
        </div>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>CCCC</h2>
            <FooterLink to="/">c</FooterLink>
            <FooterLink to="/">cc</FooterLink>
            <FooterLink to="/">ccc</FooterLink>
          </div> 
          <div className={styles.footerLinkItems}>
            <h2>DDDD</h2>
            <FooterLink to="/">d</FooterLink>
            <FooterLink to="/">dd</FooterLink>
            <FooterLink to="/">ddd</FooterLink>
          </div>
        </div>
      </div>
    )
}

export default Footer

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
      color: #f26a2e;
      transition: 0.3s ease-out;
  }
`

const AnchorLinkNew = styled(AnchorLink)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
      color: #f26a2e;
      transition: 0.3s ease-out;
  }
`

// const FooterContainer = styled.div`
//   padding: 5rem calc((100vw - 1100px) / 2);
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   color: #000;
//   background: #fafafb;
// `
// const FooterDesc = styled.div`
//   padding: 0 2rem;

//   h1{
//       margin-bottom: 3rem;
//       color: #f26a2e;
//   }

//   @media screen and (max-width: 400px){
//       padding: 1rem;
//   }
// `
// const FooterLinksWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);

//   @media screen and (max-width: 820px){
//     grid-template-columns: 1fr;
//   }
// `
// const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 1rem 2rem;

//   @media screen and (max-width: 400px){
//     padding: 1rem;
//   }
// `
// const FooterLinkTitle = styled.h2`
//   font-size: 14px;
//   margin-bottom: 16px;
// `
