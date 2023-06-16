'use client';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './Hero.module.css';
import { Calculator } from '@/components';
import { useWidth } from '@/hooks';

export const Hero = () => {
  const { imgMeasurement } = useWidth();
  return (
    <section id="hero" className={styles.hero}>
      <nav className={styles.hero__nav}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={imgMeasurement}
          height={imgMeasurement}
        />
      </nav>
      <div className={styles.hero__content}>
        <div className={styles.hero__headers}>
          <h1 className={styles['hero__headers--title']}>
            Body Mass Index Calculator
          </h1>
          <h1 className={styles['hero__headers--subtitle']}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </h1>
        </div>
        <Calculator />
      </div>
    </section>
  );
};
