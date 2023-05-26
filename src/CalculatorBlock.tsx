import { RecoilState, RecoilValueReadOnly } from 'recoil';
import SliderGroup from './SliderGroup';
import TextFieldGroup from './TextFieldGroup';

interface ICalculatorBlockProps {
  title?: string;
  subtitle?: string;
  states: {
    appointmentDurationState: RecoilState<number>;
    appointmentPriceState: RecoilState<number>;
    workingHoursState: RecoilState<number>;
    dayEarningsState: RecoilValueReadOnly<number>;
    monthEarningsState: RecoilValueReadOnly<number>;
  };
}

export default function CalculatorBlock({
  title,
  subtitle,
  states,
}: ICalculatorBlockProps) {
  const {
    appointmentDurationState,
    appointmentPriceState,
    workingHoursState,
    dayEarningsState,
    monthEarningsState,
  } = states;

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

  return (
    <section>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div>
        <SliderGroup sliderGroupProps={sliderGroupProps} />
      </div>

      <div style={{ display: 'grid' }}>
        <TextFieldGroup
          appointmentPriceState={appointmentPriceState}
          dayEarningsState={dayEarningsState}
          monthEarningsState={monthEarningsState}
        />
      </div>
    </section>
  );
}
