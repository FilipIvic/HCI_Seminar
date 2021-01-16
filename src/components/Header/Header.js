import React from 'react'
import styles from './style.module.css'
import styled from 'styled-components'
import Button from '../Button/Button'
import menuData from '../../data/constants/menuData'

import {AnchorLink} from 'gatsby-plugin-anchor-links'
import {Link}  from 'gatsby'
import {FaBars} from 'react-icons/fa'

const refreshPage = (a) => {
    window.location.reload();
}

const Header = (props) => {
  return (
      <nav className={styles[props.navigationStyle || 'navigation']}>
        <NavLink to="/">LOGO</NavLink>
        <MenuIcon></MenuIcon>
        <div className={styles.navigationMenu}>
        {menuData.map((item, index) => {
          if(item.link !== "/udomi"){
            return(
              <div className={styles.primaryNavigation}>
                <ul>
                  <li><NavAnchorLink to={item.link} key={index}>{item.title}</NavAnchorLink></li>
                </ul>
              </div>
            )
          }
          if(props.refresh){
              return (
                <div className={styles.primaryNavigation}>
                  <ul>
                    <li><NavLink to={item.link} onClick={refreshPage} state={{num: 0}}>{item.title}</NavLink>
                      <ul className={styles[props.dropdownStyle || 'dropdown']}>
                        <li><NavLink to={item.link} onClick={refreshPage} state={{num: 1}}>{item.species[0]}</NavLink></li>
                        <li><NavLink to={item.link} onClick={refreshPage} state={{num: 2}}>{item.species[1]}</NavLink></li>
                        <li><NavLink to={item.link} onClick={refreshPage} state={{num: 3}}>{item.species[2]}</NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )
          }
          else{
            return (
              <div className={styles.primaryNavigation}>
                <ul>
                  <li><NavLink to={item.link} state={{num: 0}}>{item.title}</NavLink>
                    <ul className={styles[props.dropdownStyle || 'dropdown']}>
                      <li><NavLink to={item.link} state={{num: 1}}>{item.species[0]}</NavLink></li>
                      <li><NavLink to={item.link} state={{num: 2}}>{item.species[1]}</NavLink></li>
                      <li><NavLink to={item.link} state={{num: 3}}>{item.species[2]}</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            )
          }  
        })}
        </div>
        <div className={styles.buttonContainer}>
          <Button link="/#anchor" text="Hitna pomoć"></Button>
        </div >
      </nav>
  )
}

export default Header

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #F26A2E;
  }
`
const NavAnchorLink = styled(AnchorLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const MenuIcon = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor:pointer;
  }
`