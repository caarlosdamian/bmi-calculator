import React, {
  ChangeEvent,
  ChangeEventHandler,
  HtmlHTMLAttributes,
  useState,
} from 'react';
import styles from './Calculator.module.css';
import { NumbericInput } from '../numericInput/NumbericInput';
import { Checkbox } from '../checkbox/Checkbox';
import { useMetrics } from '@/hooks/useMetrics/useMetrics';

export const Calculator = () => {
  const { info, handleChange, inputs } = useMetrics();

  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculator__title}>Enter your details below</h2>
      <div className={styles.calculator__controls}>
        <Checkbox label="Metric" isChecked={true} />
        <Checkbox label="Imperial" isChecked={false} />
      </div>
      <div className={styles.calculator__inputs}>
        <span className={styles['calculator__inputs--title']}>Height</span>
        <div className={styles['calculator__inputs--items']}>
          {inputs.height.map((input) => (
            <NumbericInput
              key={input.id}
              placeholder={input.placeholder}
              name={input.name}
              label={input.label}
            />
          ))}
        </div>
        <span className={styles['calculator__inputs--title']}>Weight</span>
        <div className={styles['calculator__inputs--items']}>
          {inputs.weight.map((input) => (
            <NumbericInput
              key={input.id}
              placeholder={input.placeholder}
              name={input.name}
              label={input.label}
            />
          ))}
        </div>
      </div>
      <div className={styles.calculator__data}></div>
    </div>
  );
};
