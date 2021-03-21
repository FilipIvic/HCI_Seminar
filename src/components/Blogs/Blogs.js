import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Icons from '../Icons/Icons'
 
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
       <div className={styles.textWrapHeading}>
          <div className={styles.heading}>Pročitajte Naš Blog</div>
          <Icons icon="blog" color="#F26A2E" size="4rem"></Icons>
        </div>
        <ul className={styles.list}>
          {data.allContentfulBlogZaVeterinarskuStanicu.nodes.map(node => {
            return (
              <li>
                <div className={styles.items}>
                  <h2>{node.poveznica}</h2>
                </div>
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
  min-height: 400px;
  width: 500px;
  position: relative;
  border-radius: 10px;
`