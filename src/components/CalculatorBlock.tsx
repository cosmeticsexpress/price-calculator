import { nanoid } from 'nanoid';
import { useRecoilValue } from 'recoil';
import SliderGroup from '@components/SliderGroup';
import TextFieldGroup from '@components/TextFieldGroup';
import { monthWorkdaysState, totalWorkingHoursState } from '@utils/states';
import { AreaRanges, WORKING_HOURS } from '@utils/values';
import { formatCurrency } from '@utils/numberFormat';
import CalculatorStates from '@/utils/CalculatorStates';
import reactStringReplace from 'react-string-replace';

export interface CalculatorBlockProps {
  title?: string;
  subtitle?: string;
  states: CalculatorStates;
  sliderRanges: AreaRanges;
}

export default function CalculatorBlock({
  title,
  subtitle,
  states,
  sliderRanges,
}: CalculatorBlockProps) {
  const {
    appointmentDurationState,
    appointmentPriceState,
    workingHoursState,
    dayEarningsState,
    monthEarningsState,
  } = states;

  const { appointmentDuration, appointmentPrice, workingHours } = sliderRanges;

  const sliderProps = [
    {
      key: nanoid(),
      label: 'זמן עבודה לטיפול',
      min: appointmentDuration.min,
      max: appointmentDuration.max,
      state: appointmentDurationState,
      outputRenderer: (value: number) => `${value} דקות`,
    },
    {
      key: nanoid(),
      label: 'תמחור לטיפול בודד',
      min: appointmentPrice.min,
      max: appointmentPrice.max,
      state: appointmentPriceState,
      outputRenderer: (value: number) => formatCurrency(value),
    },
    {
      key: nanoid(),
      label: 'שעות עבודה יומיות',
      min: workingHours ? workingHours.min : WORKING_HOURS.min,
      max: workingHours ? workingHours.max : WORKING_HOURS.max,
      state: workingHoursState,
      outputRenderer: function Component(value: number) {
        return `${value} (סה״כ ${useRecoilValue(totalWorkingHoursState)}/${
          WORKING_HOURS.max
        })`;
      },
    },
  ];

  const textFieldProps = [
    {
      key: nanoid(),
      label: 'רווח מטיפול יחיד',
      state: appointmentPriceState,
      isCurrency: true,
    },
    {
      key: nanoid(),
      label: 'רווח מיום עבודה',
      state: dayEarningsState,
      isCurrency: true,
    },
    {
      key: nanoid(),
      label: 'ימי עבודה חודשיים',
      state: monthWorkdaysState,
    },
    {
      key: nanoid(),
      label: 'רווח מחודש עבודה',
      state: monthEarningsState,
      isCurrency: true,
    },
  ];

  return (
    <section
      className='border rounded-md bg-gray-50 p-3 flex flex-col justify-between gap-3 items-center w-full'
      title={title}
    >
      <div className='text-center'>
        <h2 className='text-gold-gradient font-semibold text-2xl'>{title}</h2>
        <h3 className='text-lg font-semibold'>
          {reactStringReplace(subtitle, ' • ', (match) => (
            <span
              className='font-black text-gold-gradient select-none'
              key={nanoid()}
            >
              {` ${match} `}
            </span>
          ))}
        </h3>
      </div>
      <div className='w-full'>
        <SliderGroup>{sliderProps}</SliderGroup>
        <TextFieldGroup>{textFieldProps}</TextFieldGroup>
      </div>
    </section>
  );
}
