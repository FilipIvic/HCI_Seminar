import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import styles from "./style.module.css"

import {
  useParams
} from "react-router-dom";

const Animal = () => {
    let { id } = useParams();
    const data = useStaticQuery(graphql`
     query MyQuery2{
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

    return(
      <div className={styles.container}>
        <div className={styles.item}>
          <h3>Requested topic ID: {id}</h3>
          {items.map((item) => {
            if(item.node.id === id){
              return(
                <div>
                  <h3>Ime: {item.node.name}</h3>
                  <h3>Id: {item.node.id}</h3>
                  <br></br>
                  <ProductImg alt={item.node.alt} fluid = {item.node.img.childImageSharp.fluid}></ProductImg>
                </div>
              )
            }else{
              return null;
            }
          })}
        </div>
      </div>
    )
  }

  export default Animal

  const ProductImg = styled(Img)`
  height: 500px;
  width: 500px;
  border-radius: 10px;

  border-color: yellow;
  border-style: solid;

  &:hover {
    filter: brightness(100%)
  }
`