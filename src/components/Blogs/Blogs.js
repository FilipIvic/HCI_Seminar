import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
 
const Blogs = () => {
  const data = useStaticQuery(graphql`
  query MyQuery4 {
    allContentfulBlogZaVeterinarskuStanicu {
      nodes {
        poveznica
        datum
        tekstBloga {
          tekstBloga
        }
        slika {
          fixed(width: 300) {
            src
            srcSet
            srcSetWebp
            srcWebp
            height
            base64
            aspectRatio
          }
        }
      }
    }
  }`)
 
  return (
    <section className={styles.blogContainer}>
      <h2>Read our blogposts!</h2>
      <ul className={styles.list}>
        {data.allContentfulBlogZaVeterinarskuStanicu.nodes.map(node => {
          return (
            <li>
              <centre><b>{node.poveznica}</b></centre>
              <PetImg fixed = {node.slika.fixed}></PetImg>
              <div><p>{node.tekstBloga.tekstBloga}</p></div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
 
export default Blogs

const PetImg = styled(Img)`
  min-height: 500px;
  width: 500px;
  position: relative;
  border-radius: 10px;
  filter: brightness(80%);
  transition: 0.4s cubic-cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%)
  }
`