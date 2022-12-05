import React from 'react';
import styles from './Header.module.css';
import clock from '../../images/icons8-clock-48.png';
import downLeft from '../../images/icons8-down-left-arrow-32.png';
import checkList from '../../images/icons8-checkmark-yes-32.png';
import Cloud from '../../images/icons8-cloud-24.png';
import pendingList from '../../images/icons8-menu-vertical-24.png';
import Blocks from '../Blocks/blocks';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header_top}>
        <div className={styles.header__left}>
          <p className={styles.paragraph}>P</p>
          <p className={styles.block}>|</p>
          <img src={clock} alt="clock" />
          <p>0min</p>
          <p className={styles.block}>|</p>
          <p>Q</p>
          <p className={styles.block}>|</p>
          <img src={downLeft} alt="downleft-Arrow" />
          <p>0</p>
        </div>
        <div className={styles.header__right}>
          <img src={checkList} alt="Checklist" />
          <img src={Cloud} alt="cloud" />
          <img src={pendingList} alt="pendingList" />
        </div>
      </div>

      <div className={styles.header_down}>
        <h1>Front -end developer test project</h1>
        <hr />
        <p>
          Your goal is to make a page that looks like this one, and has the ability
          to create H1 by typing
          /then 1, then typing text, and hitting enter.
        </p>
      </div>
      <Blocks />
    </div>
  );
}
