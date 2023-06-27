import { Info } from './benefitsUtils';
import { age, gender, muscle, pregnancy, race } from '../../public';

export const descriptionInfo: Info[] = [
  {
    id: 'gender',
    title: 'Gender',
    desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    img: gender,
  },
  {
    id: 'age',
    title: 'Age',
    desc: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
    img: age,
  },
  {
    id: 'muscle',
    title: 'Muscle',
    desc: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
    img: muscle,
  },
  {
    id: 'pregnancy',
    title: 'Pregnancy',
    desc: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
    img: pregnancy,
  },
  {
    id: 'race',
    title: 'Race',
    desc: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
    img: race,
  },
];
