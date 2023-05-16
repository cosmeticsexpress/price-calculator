import Slider from './Slider';

import { useRecoilValue, RecoilState } from 'recoil';
import SliderGroup from './SliderGroup';

interface ICalculatorBlockProps {
  title?: string;
  subtitle?: string;
  states: {
    appointmentDurationState: RecoilState<number>;
    appointmentPriceState: RecoilState<number>;
    workingHoursState: RecoilState<number>;
  };
}

const DAYS_IN_MONTH = 25;

export default function CalculatorBlock({
  title,
  subtitle,
  states,
}: ICalculatorBlockProps) {
  const { appointmentDurationState, appointmentPriceState, workingHoursState } =
    states;

  const appointmentPrice = useRecoilValue(appointmentPriceState);

  const sliderGroupProps = [
    {
      label: 'זמן עבודה לטיפול',
      min: 5,
      max: 20,
      state: appointmentDurationState,
    },
    {
      label: 'תמחור לטיפול בודד',
      min: 100,
      max: 1000,
      state: appointmentPriceState,
    },
    {
      label: 'שעות עבודה יומיות',
      min: 1,
      max: 20,
      state: workingHoursState,
    },
  ];

  const textFieldLabels = [
    {
      label: 'רווח מטיפול יחיד',
      value: `₪${appointmentPrice}`,
    },
    {
      label: 'רווח מיום עבודה',
      value: '',
    },
    {
      label: 'ימי עבודה חודשיים',
      value: DAYS_IN_MONTH,
    },
    {
      label: 'רווח מחודש עבודה',
      value: DAYS_IN_MONTH * 100,
    },
  ];

  return (
    <section>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div>
        <SliderGroup sliderGroupProps={sliderGroupProps} />
      </div>

      <div style={{ display: 'grid' }}>
        {textFieldLabels.map(({ label, value }) => (
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            key={crypto.randomUUID()}
          >
            <span>{label}</span>
            <input type='text' readOnly value={value} />
          </div>
        ))}
      </div>
    </section>
  );
}
