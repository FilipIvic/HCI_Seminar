import React from 'react'
import styles from '../Footer/style.module.css'
import styled from 'styled-components'

import {Link} from 'gatsby'

const Footer = () => {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerDesc}>
            <h1>KONTAKTI</h1>
            <p>Veterinarska Stanica Ivić</p>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>Društvene Mreže</h2>
            <FooterLink to="https://www.facebook.com/profile.php?id=100025059183987" target="_blank">Facebook</FooterLink>
            <FooterLink to="https://www.instagram.com/filip_ivic_/" target="_blank">Instagram</FooterLink>
            <FooterLink to="/https://github.com/FilipIvic" target="_blank">Github</FooterLink>
          </div>
        </div>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>Adresa</h2>
            <FooterLink to="https://www.google.com/maps/place/Papandopulova+ul.+17,+21000,+Split/@43.507853,16.4717359,17z/data=!3m1!4b1!4m5!3m4!1s0x13355e250ee72cd7:0x83467fc79b245921!8m2!3d43.5078491!4d16.4739246" target="_blank">Papandopulova 17</FooterLink>
            <FooterLink to="https://www.google.com/maps/place/Papandopulova+ul.+17,+21000,+Split/@43.507853,16.4717359,17z/data=!3m1!4b1!4m5!3m4!1s0x13355e250ee72cd7:0x83467fc79b245921!8m2!3d43.5078491!4d16.4739246" target="_blank">21000 Split</FooterLink>
            <FooterLink to="https://www.google.com/maps/place/Papandopulova+ul.+17,+21000,+Split/@43.507853,16.4717359,17z/data=!3m1!4b1!4m5!3m4!1s0x13355e250ee72cd7:0x83467fc79b245921!8m2!3d43.5078491!4d16.4739246" target="_blank">Hrvatska</FooterLink>
          </div> 
          <div className={styles.footerLinkItems}>
            <h2>Hitna Pomoć</h2>
            <FooterLink to="/">Tel: +021 468 875</FooterLink>
            <FooterLink to="/">Mob: +385 953 545 316</FooterLink>
            <FooterLink to="https://mail.google.com/mail/">e-Mail: vet@gmail.com</FooterLink>
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