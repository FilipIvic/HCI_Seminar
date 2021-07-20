import React from 'react'
import styles from './style.module.css'
import styled from 'styled-components'
import Video from '../../data/videos/seminarHci_cat_video.mp4'

const Background = () => {
    return (
      <Container>
        <div className={styles.divBg}>
          <video className={styles.videoBg} src={Video} type="video.mp4" autoPlay loop muted playsInline></video>
        </div>
        <div className={styles.content}>
          <div className={styles.items}>
            <h1>Veterinarska</h1>
            <h1>Stanica Ivić</h1>
            <p>Split - Hrvatska</p>
          </div>
        </div>
      </Container>
    )
}

export default Background

const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px; 
  color: #fff;

  :before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%), 
    linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`