import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './NumericInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const NumbericInput = ({ onChange, label, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input
        {...props}
        className={styles.input}
        type="text" inputMode="numeric"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          // @ts-ignore
          onChange({ target :e.target.value,name:props.name})
        }
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
