import { RecoilState, RecoilValueReadOnly, useRecoilValue } from 'recoil';
import SliderGroup from '@components/SliderGroup';
import TextFieldGroup from '@components/TextFieldGroup';
import { monthWorkdaysState, totalWorkingHoursState } from '@utils/states';
import { AreaRanges, WORKING_HOURS, goldGradientText } from '@utils/values';
import { formatCurrency } from '@utils/numberFormat';

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
  sliderRanges: AreaRanges;
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

  const { appointmentDuration, appointmentPrice, workingHours } = sliderRanges;

  const sliderProps = [
    {
      label: 'זמן עבודה לטיפול',
      min: appointmentDuration.min,
      max: appointmentDuration.max,
      state: appointmentDurationState,
      outputRenderer: (value: number) => `${value} דקות`,
    },
    {
      label: 'תמחור לטיפול בודד',
      min: appointmentPrice.min,
      max: appointmentPrice.max,
      state: appointmentPriceState,
      outputRenderer: (value: number) => formatCurrency(value),
    },
    {
      label: 'שעות עבודה יומיות',
      min: workingHours ? workingHours.min : WORKING_HOURS.min,
      max: workingHours ? workingHours.max : WORKING_HOURS.max,
      state: workingHoursState,
      outputRenderer: (value: number) =>
        `${value} (סה״כ ${useRecoilValue(totalWorkingHoursState)}/${
          WORKING_HOURS.max
        })`,
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
    <section className='border rounded-md bg-gray-50 p-3 flex flex-col gap-3 items-center w-full'>
      <div className='text-center'>
        <h2 className={`${goldGradientText} font-semibold text-2xl`}>
          {title}
        </h2>
        <h3 className='text-lg font-semibold'>{subtitle}</h3>
      </div>

      <SliderGroup sliderProps={sliderProps} />

      <TextFieldGroup textFieldProps={textFieldProps} />
    </section>
  );
}
