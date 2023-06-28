import React from 'react';
import styles from './Checkbox.module.css';

interface Props {
  isChecked: boolean;
  label: string;
}

export const Checkbox = ({ isChecked, label }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.circle} ${isChecked ? styles.checked : ''}`}
      ></div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};
