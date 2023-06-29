import React from 'react';
import styles from './Checkbox.module.css';

interface Props {
  isChecked: boolean;
  label: string;
  handleChange: (arg: boolean) => void;
}

export const Checkbox = ({ isChecked, label, handleChange }: Props) => {
  return (
    <div
      className={styles.container}
      onClick={() => handleChange(label === 'Metric' ? true : false)}
    >
      <div
        className={`${styles.circle} ${isChecked ? styles.checked : ''}`}
      ></div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};
