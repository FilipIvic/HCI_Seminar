import { Link } from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
 
import menuData from '../../data/constants/menuData'
import styles from './style.module.css'
 
const HeaderMobile= (props) => {
    const[visible, setVisible]=useState(false)
 
    return(
        <section className={styles.container}>
            <button className={`${styles.burgerButton} ${visible ? styles.actives : ''}`} onClick={() => setVisible(!visible)}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <nav className={`${styles.menu} ${visible ? styles.visible : styles.hidden}`}>
                {menuData.map((item, index) => {
                     if(item.link !== "/udomi"){
                         return(
                            <li><NavLink to={item.link}>{item.title}</NavLink></li>
                         )}else{
                         return(
                            <li><NavLink to={item.link} state={{num: 0}}>{item.title}</NavLink></li>
                        )}
                })}
            </nav>
        </section>
    )    
}
export default HeaderMobile
 
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: #F26A2E;
  }
`