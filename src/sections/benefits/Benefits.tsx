import React from 'react';
import Image from 'next/image';
import { BenefitsInfo, benefitsInfo } from '@/utils/benefitsUtils';
import styles from './Benefits.module.css';

export const Benefits = () => {
  return (
    <section id="features" className={styles.container}>
      {benefitsInfo.map((item: BenefitsInfo) => (
        <div className={styles.benefit__container} key={item.id}>
          <div className={styles.befenit__img}>
            <Image src={item.img} width={64} height={64} alt={item.title} />
          </div>
          <div className={styles.befenit__info}>
            <h2 className={styles['befenit__info--title']}>{item.title}</h2>
            <p className={styles['befenit__info--desc']}>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
