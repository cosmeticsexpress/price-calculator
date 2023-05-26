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
  sliderRanges: {
    appointmentDuration: {
      min: number;
      max: number;
    };
    appointmentPrice: {
      min: number;
      max: number;
    };
  };
}

export default function CalculatorBlock({
  title,
  subtitle,
  states,
  sliderRanges,
}: ICalculatorBlockProps) {
  const {
    appointmentDurationState,
    appointmentPriceState,
    workingHoursState,
    dayEarningsState,
    monthEarningsState,
  } = states;

  const { appointmentDuration, appointmentPrice } = sliderRanges;

  const sliderGroupProps = [
    {
      label: 'זמן עבודה לטיפול',
      min: appointmentDuration.min,
      max: appointmentDuration.max,
      state: appointmentDurationState,
    },
    {
      label: 'תמחור לטיפול בודד',
      min: appointmentPrice.min,
      max: appointmentPrice.max,
      state: appointmentPriceState,
    },
    {
      label: 'שעות עבודה יומיות',
      min: 2,
      max: 8,
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
