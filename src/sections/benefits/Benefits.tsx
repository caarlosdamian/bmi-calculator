import React from 'react';
import styles from './Benefits.module.css';
import test from '../../../public/icon-sleep.svg'
import Image from 'next/image';

export const Benefits = () => {
  return (
    <section id="features">
        <Image  width={100} height={100} src={test}/>
    </section>
  )
}
