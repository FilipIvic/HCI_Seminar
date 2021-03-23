import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Button from '../Button/Button'
import Icons from '../Icons/Icons'

const Services = ({heading}) => {
     const data = useStaticQuery(graphql`
     query MyQuery5 {
        allServicesJson {
          edges {
            node {
              name
              alt
              description
              button
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

    let items = data.allServicesJson.edges
    
    return (
    <div className={styles.servicesContainer}>
      <div className={styles.textWrapHeading}>
        <div className={styles.heading}>{heading}</div>
        <Icons icon="cross" color="#F26A2E" size="4rem"></Icons>
      </div>
      <div className={styles.serviceWrapper}>
      {items.map((item, index) => {
              return(
                <div className={styles.serviceCard} key={index}>
                      <ServiceImg alt={item.node.alt} fluid = {item.node.img.childImageSharp.fluid}></ServiceImg>
                      <div className={styles.serviceInfo}> 
                        <div className={styles.textWrap}>
                            {/* <div className={styles.serviceTitle}>{item.node.name}</div> */}
                            <Button link={`/${item.node.button}`} text={item.node.button}></Button>
                        </div>
                        {/* <div className={styles.serviceDescription}>{item.node.description}</div> */}
                        
                      </div>
                </div>
              )
          }
      )}
      </div>
    </div>
    )
}

export default Services

const ServiceImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
`
