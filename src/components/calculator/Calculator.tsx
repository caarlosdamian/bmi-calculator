import React from 'react';
import styles from './Calculator.module.css';
import { NumbericInput } from '../numericInput/NumbericInput';
import { Checkbox } from '../checkbox/Checkbox';
import { useMetrics } from '@/hooks/useMetrics/useMetrics';

export const Calculator = () => {
  const {
    info,
    handleChange,
    inputs,
    handleCheckbox,
    bmiIndicator,
    bmiText,
    calculateIdealWeightRange,
  } = useMetrics();

  return (
    <div className={styles.calculator}>
      <h2 className={styles.calculator__title}>Enter your details below</h2>
      <div className={styles.calculator__controls}>
        <Checkbox
          handleChange={handleCheckbox}
          label="Metric"
          isChecked={info.metric}
        />
        <Checkbox
          handleChange={handleCheckbox}
          label="Imperial"
          isChecked={!info.metric}
        />
      </div>
      <div
        className={`${styles.calculator__inputs} ${
          info.metric && styles.metric
        }`}
      >
        <div className={styles['calculator--item']}>
          <span className={styles['calculator__inputs--title']}>Height</span>
          <div className={styles['calculator__inputs--items']}>
            {inputs.height.map((input) => (
              <NumbericInput
                key={input.id}
                placeholder={input.placeholder}
                name={input.name}
                label={input.label}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <div className={styles['calculator--item']}>
          <span className={styles['calculator__inputs--title']}>Weight</span>
          <div className={styles['calculator__inputs--items']}>
            {inputs.weight.map((input) => (
              <NumbericInput
                key={input.id}
                placeholder={input.placeholder}
                name={input.name}
                label={input.label}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.calculator__data}>
        {bmiIndicator === 0 ? (
          <div className="data__no_info">
            <h2 className={styles['no__info--header']}>Welcome</h2>
            <p className={styles['no__info--desc']}>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        ) : (
          <div className={styles.data}>
            <div className={styles.data__header}>
              <h3 className={styles['data__header--title']}>Your BMI is...</h3>
              <h1 className={styles['data__header--desc']}>
                {bmiIndicator.toFixed(1)}
              </h1>
            </div>
            <div className={styles.data__desc}>
              <p className={styles['data__desc--text']}>
                {bmiText}
                <em className={styles.em}> {calculateIdealWeightRange()}.</em>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
