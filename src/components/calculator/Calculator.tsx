import React from 'react';
import styles from './Calculator.module.css';

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculator__title}>Enter your details below</h2>
      <div className={styles.calculator__controls}></div>
      <div className={styles.calculator__inputs}></div>
      <div className={styles.calculator__data}></div>
    </div>
  );
};
