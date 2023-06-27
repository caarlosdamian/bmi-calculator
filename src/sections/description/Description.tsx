import React from 'react';
import styles from './Description.module.css';
import Image from 'next/image';
import { descriptionInfo } from '@/utils/desctiptionUtils';

export const Description = () => {
  return (
    <section className={styles.container}>
      <div className={styles.description__info}>
        <h2 className={styles['description__info--title']}>
          Limitations of BMI
        </h2>
        <p className={styles['description__info--desc']}>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      {descriptionInfo.map((item) => (
        <div className={styles.description__item} key={item.id} id={item.id}>
          <div className={styles.item__header}>
            <Image src={item.img} alt={item.id} width={32} height={32} />
            <p className={styles['item__header--title']}>{item.title}</p>
          </div>
          <div className={styles.item__info}>
            <p className={styles['item__info--desc']}>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
