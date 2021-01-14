import React from 'react'
import styles from './style.module.css'
import {AnchorLink} from 'gatsby-plugin-anchor-links'

const Button = ({style, text, link}) => (
  <AnchorLink className={styles[style || 'button']} to={link}>
      {text}
  </AnchorLink>
)

export default Button