import { eating, exercise, sleep } from '../../public/';

export interface BenefitsInfo {
 id: string;
 title: string;
 desc: string;
 img: any;
}

export const benefitsInfo: BenefitsInfo[] = [
 {
  id: 'healty',
  title: 'Healthy eating',
  desc:
   'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  img: eating,
 },
 {
  id: 'exercise',
  title: 'Regular exercise',
  desc:
   'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  img: exercise,
 },
 {
  id: 'sleep',
  title: 'Adequate sleep',
  desc:
   'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  img: sleep,
 },
];
