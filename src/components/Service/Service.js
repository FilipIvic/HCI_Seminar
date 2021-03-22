import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Icons from '../Icons/Icons'

// import Map from '../Map/Map'

const Service = () => {
    const data = useStaticQuery(graphql`
     query MyQuery7 {
        allServiceJson {
          edges {
            node {
              heading
              name
              alt
              orientation
              content
              icon
              id
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
    
    let items = data.allServiceJson.edges

    return (
        <div>
            {items.map((item, index) => {
              return(
                <div className={styles.emergencyContainer}>
                    <div className={styles.textWrapHeading}>
                        <div className={styles.heading}>{item.node.heading}</div>
                        <Icons icon={item.node.icon} color="#F26A2E" size="4rem"></Icons>
                    </div>
                    {(item.node.orientation === 'left') ? (
                        <div className={styles.emergencyWrapperLeft}> 
                            <div className={styles.content}>
                                <div id={item.node.id} className={styles.items}>
                                    <p>{item.node.content}</p>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.items}>
                                    <ServiceImg alt={item.node.alt} fluid = {item.node.img.childImageSharp.fluid}></ServiceImg> 
                                </div>
                            </div>
                        </div>) : (
                        <div className={styles.emergencyWrapperRight}> 
                            <div className={styles.content}>
                                <div id={item.node.id} className={styles.items}>
                                    <ServiceImg alt={item.node.alt} fluid = {item.node.img.childImageSharp.fluid}></ServiceImg> 
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.items}>
                                    <p>{item.node.content}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              )
          })}
        </div>
    )
}

export default Service

const ServiceImg = styled(Img)`
  min-width: 500px;
  border-radius: 10px;
`