import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Animal from '../Animal/Animal'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Adopt = () => {
     const data = useStaticQuery(graphql`
     query MyQuery3 {
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

    let items = data.allPetsJson.edges
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(e.target.value)
      }

      if(1){
        console.log(input.length)
        items = items.filter((i) => {
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
            <div className={styles.productsContainer}>
              <div className={styles.heading}>SVE ŽIVOTINJE</div>
              <div className={styles.inputDiv}>
                <div></div>
                <div></div>
                <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Pretraži sve životinje"
                    onChange={handleChange}
                    value={input}>
                </input>
              </div>
              <div className={styles.productWrapper}>
                {items.map((item, index) => {
                  const name = item.node.name
                  return(
                    <div className={styles.productCard} key={index}>
                      <Link to={`/${item.node.button}`} className={styles.productInfo}> 
                          <ProductImg alt={item.node.alt} fluid = {item.node.img.childImageSharp.fluid}></ProductImg>
                          <div className={styles.textWrap}>
                            <div >{name}</div>
                            <div >{item.node.description}</div>
                            <Link  to={`/${item.node.button}`}>{item.node.button}</Link>
                          </div>
                          
                        </Link>
                    </div>
                  )
                })}
              </div>    
            </div>
          </Route>
        </Switch>
      </Router>
    )
}

export default Adopt

const ProductImg = styled(Img)`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(80%);
  transition: 0.4s cubic-cubic-bezier(0.075, 0.82, 0.165, 1);

  border-color: yellow;
  border-style: solid;

  &:hover {
    filter: brightness(100%)
  }
`