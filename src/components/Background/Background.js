import React from 'react'
import styles from './style.module.css'
import Video from '../../data/videos/seminarHci_cat_video.mp4'

const Background = () => {
    return (
      <div className={styles.container}>
        <div className={styles.divBg}>
          <video className={styles.videoBg} src={Video} type="video.mp4" autoPlay loop muted playsInline></video>
        </div>
    </div>    
    )
}

export default Background