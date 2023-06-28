import React, { InputHTMLAttributes } from 'react';
import styles from './NumericInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const NumbericInput = ({ ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input {...props} className={styles.input} type="number" name="" id="" />
      <p className={styles.label}> cm</p>
    </div>
  );
};
