import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from './style.module.css'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Icons from '../Icons/Icons'

// import Map from '../Map/Map'

const Emergency = () => {
    // const location = {
    //     address: '1600 Amphitheatre Parkway, Mountain View, california.',
    //     lat: 37.42216,
    //     lng: -122.08427,
    //     center: [59.938043, 30.337157]
    //   }
    const data = useStaticQuery(graphql`
     query MyQuery6 {
        allMapJson {
          edges {
            node {
                alt
                description
                name
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

    let maps = data.allMapJson.edges

    return (
        <div className={styles.emergencyContainer}>
             <div className={styles.textWrapHeading}>
              <div className={styles.heading}>Naslov</div>
              <Icons icon="cross" color="#F26A2E" size="4rem"></Icons>
            </div>
            <div className={styles.emergencyWrapper}>
                <div className={styles.content}>
                    <div className={styles.items}>
                        <p>Tel.</p>
                        <p>Mob.</p>
                        <p className={styles.email}>e-Mail</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.items}>
                        <p>+0953545317</p>
                        <p>Hello world</p>
                        <p>vet.ivic@gmail.com</p>
                    </div>
                </div>
                <div className={styles.map}>
                    {maps.map((map, index) => {
                        return(
                            <Map alt={map.node.alt} fluid = {map.node.img.childImageSharp.fluid}></Map>
                        )     
                    })}
                </div>

            </div>
        </div>
    )
}

export default Emergency

const Map = styled(Img)`
  min-width: 500px;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: #F26A2E;
`