import { useRecoilValue, RecoilState } from 'recoil';
import SliderGroup from './SliderGroup';
import TextFieldGroup from './TextFieldGroup';

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
          workingHoursState={workingHoursState}
          appointmentPriceState={appointmentPriceState}
        />
      </div>
    </section>
  );
}
