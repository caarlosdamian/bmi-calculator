import { InputElements } from '@/utils/calculatorUtils';
import { useMemo, useState } from 'react';

export const useMetrics = () => {
  const [info, setInfo] = useState({
    metric: false,
    centimenters: 0,
    kilograms: 0,
    feets: 0,
    inches: 0,
    stones: 0,
    pounds: 0,
  });
  const inputs = useMemo(
    () => (info.metric ? InputElements[1] : InputElements[0]),
    [info.metric]
  );

  const handleChange = ({ target, name }: any) => {
    setInfo((prev) => ({ ...prev, [name]: target }));
  };

  return {
    inputs,
    handleChange,
    info,
  };
};
