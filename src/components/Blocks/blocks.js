import React, { useState } from 'react';
import PopUp from '../PopMenu/popUp';
import Block from '../Block/block';
import styles from './blocks.module.css';

export default function Blocks() {
  const h1Style = {
    fontSize: '32px',
  };
  const pStyle = {
    fontSize: '16px',
  };

  const [blocks, setBlocks] = useState([]);
  const [tag, setTag] = useState('text');
  const [content, setContent] = useState('');
  const [popUp, setPopUp] = useState('false');
  const handleChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.includes('/1')) {
      setPopUp(false);
    } else {
      setPopUp(true);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '/1') {
        setTag('heading');
        setContent('');
      } else {
        const newBlock = <Block style={tag} text={content} />;
        setBlocks((prev) => [...prev, newBlock]);
        setContent('');
        setTag('text');
      }
    }
  };

  return (
    <div className={styles.container}>
      {blocks.map((blk) => blk)}
      <input
        className={styles.input}
        id="input"
        type="text"
        placeholder="Type / for blocks, @to link docs or people"
        value={content}
        onChange={handleChange}
        onKeyPress={handleKeyDown}
        style={tag === 'heading' ? h1Style : pStyle}
      />
      <PopUp isVisible={popUp} cordination={{ x: '370px', y: '290px' }} />
    </div>

  );
}
