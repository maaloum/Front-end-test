import React from 'react'
import doubleRight from '../../images/double-right.png'
import Book from '../../images/icons8-book-60.png'
import padLock from '../../images/icons8-lock-24.png'
import downArrow from '../../images/icons8-expand-arrow-24.png'
import styles from './top.module.css'

export default function Top() {
  return (
    <main className={styles.main}>
        <div className={styles.left}>
            <img className={styles.dright} src={doubleRight} alt = 'doubleRightArrow'/>
            <img src= {Book} alt = 'bookIcon'/>
            <a href= "/"> Main </a>
            <p>/</p>
            <p>Getting start</p>
            <p>/</p>
            <p className={styles.truncate}>Front-end developer test project</p>
        </div>
        <div className={styles.right}>
            <img src= {padLock} alt = 'bookIcon'/>
            <p>Editing</p>
          <p className={styles.block}>|</p>
          <p className={styles.publish}>Publish Space</p>
          <img className={styles.downArrow} src={downArrow} alt= 'downArrow' />
        </div>
    </main>
  )
}
