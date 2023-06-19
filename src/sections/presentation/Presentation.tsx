import React from 'react';
import styles from './Presentation.module.css';
import Image from 'next/image';

export const Presentation = () => {
  return (
    <section id="presentation" className={styles.presentation}>
      <div className={styles.presentation__img}>
        <div className={styles['presentation__img-image']}>
          <Image
            src="/image-man-eating.webp"
            alt="testing"
            fill={true}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div className={styles.presentation__content}>
        <h2 className={styles['presentation__content-title']}>
          What your BMI result means
        </h2>
        <h2 className={styles['presentation__content-description']}>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </h2>
      </div>
    </section>
  );
};
