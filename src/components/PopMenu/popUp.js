import React from 'react';
import PropTypes from 'prop-types';
import styles from './pop.module.css';
import Type from '../../images/icons8-type-80.png';

function PopUp({ isVisible, cordination }) {
  const show = isVisible ? 'block' : 'none';
  const style = {
    display: show,
    position: 'absolute',
    left: cordination.x,
    top: cordination.y,
  }
  return (
    <div style={style} className={styles.popMenu}>
      <div className={styles.head}>
        <h3>Add blocks</h3>
        <p className={styles.paragraph}>Keep typing to filter, or escape to exit</p>
      </div>
      <div>
        <p className={styles.filter}>Filtring keyword</p>
      </div>
      <div className={styles.headings}>
        <div className={styles.format}>
          <img src={Type} alt="Typing-icon" />
          <div className={styles.heading1}>
            <p>Heading 1</p>
            <p className={styles.paragraph}>Shortcut type # + space</p>
          </div>
        </div>
        <div className={styles.format}>
          <img src={Type} alt="Typing-icon" />

          <div className={styles.heading1}>
            <p>Expendable Heading 1</p>
            <p className={styles.paragraph}>Shortcut type # + space</p>
          </div>
        </div>
        <div className={styles.format}>
          <img src={Type} alt="Typing-icon" />
          <p>Subheading</p>
        </div>
        <div className={styles.format}>
          <img src={Type} alt="Typing-icon" />
          <p>Paragraph</p>
        </div>

      </div>
    </div>
  );
}

PopUp.propTypes = {
  isVisible: PropTypes.element.isRequired,
  cordination: PropTypes.element.isRequired,

};
export default PopUp;
