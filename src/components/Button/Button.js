import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

const Button = ({useThisStyle, buttonText}) => (
  <Link className={styles[useThisStyle || 'button']}>
      {buttonText}
  </Link>
)

export default Button