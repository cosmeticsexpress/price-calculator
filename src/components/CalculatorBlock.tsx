import { RecoilState, RecoilValueReadOnly } from 'recoil';
import SliderGroup from '@components/SliderGroup';
import TextFieldGroup from '@components/TextFieldGroup';
import { monthWorkdaysState } from '@utils/states';

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

  const sliderProps = [
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

  const textFieldProps = [
    {
      label: 'רווח מטיפול יחיד',
      state: appointmentPriceState,
      isCurrency: true,
    },
    {
      label: 'רווח מיום עבודה',
      state: dayEarningsState,
      isCurrency: true,
    },
    {
      label: 'ימי עבודה חודשיים',
      state: monthWorkdaysState,
    },
    {
      label: 'רווח מחודש עבודה',
      state: monthEarningsState,
      isCurrency: true,
    },
  ];

  return (
    <section className='border rounded-md border-gray-400 bg-gray-50 p-3 flex flex-col gap-3 items-center'>
      <div className='text-center'>
        <h2 className='text-amber-500 font-semibold text-2xl'>{title}</h2>
        <h3 className='text-lg font-semibold'>{subtitle}</h3>
      </div>

      <div>
        <SliderGroup sliderProps={sliderProps} />
      </div>

      <div style={{ display: 'grid' }}>
        <TextFieldGroup textFieldProps={textFieldProps} />
      </div>
    </section>
  );
}
