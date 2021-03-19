import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Animal from '../Animal/Animal'
import Icons from '../Icons/Icons'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Pets = ({speciesProps, inputProps, headerProps, buttonText}) => {
     const data = useStaticQuery(graphql`
     query MyQuery {
        allPetsJson {
          edges {
            node {
              id
              name
              alt
              description
              button
              species
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

    let pets = data.allPetsJson.edges
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(e.target.value)
      }

      if(1){
        console.log(input.length)
        pets = pets.filter((i) => {
          return (i.node.name.match(input) || i.node.description.match(input) || i.node.species.match(input) || i.node.name.toLowerCase().match(input)) 
        })
      }

    return (
      <Router>
        <Switch>
          <Route path="/Pet_Button_:id">
            <Animal />
          </Route>
          <Route path="/">
            <div className={styles.petsContainer}>
            <div className={styles.textWrapHeading}>
              <div className={styles.heading}>{headerProps}</div>
              <Icons icon={speciesProps} color="#F26A2E" size="3rem"></Icons>
            </div>
              <div className={styles.inputDiv}>
                <div></div>
                <div></div>
                <div className={styles.textWrapSearch}>
                  <Icons icon="search" color="#F26A2E" size="2.5rem"></Icons>
                  <input
                      className={styles.inputText}
                      type="text"
                      placeholder={inputProps}
                      onChange={handleChange}
                      value={input}>
                  </input>
                </div>
              </div>
              <div className={styles.petsWrapper}>
                {pets.map((pet, index) => {
                    if(pet.node.species === speciesProps){
                      return(
                        <div className={styles.petCard} key={index}>
                          <Link to={`/${pet.node.button}`}>
                            <PetImg alt={pet.node.alt} fluid = {pet.node.img.childImageSharp.fluid}></PetImg>
                            <div className={styles.petInfo}> 
                                <div className={styles.textWrap}>
                                  <div className={styles.petName}>{pet.node.name}</div>
                                </div>
                                <Link className={styles.button} to={`/${pet.node.button}`}>{buttonText}</Link>
                            </div>
                          </Link>
                        </div>
                      )
                    }
                    else{
                      return null;
                    }
                })}
              </div>    
            </div>
          </Route>
        </Switch>
      </Router>
    )
}

export default Pets

const PetImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(80%);
  transition: 0.4s cubic-cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%)
  }
`