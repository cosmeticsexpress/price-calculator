import ReadonlyTextField from '@components/ReadonlyTextField';
import { totalMonthEarningsState } from '@utils/states';

export default function MonthlyEarningsDisplay() {
  return (
    <section className='flex flex-col items-center'>
      <span>סה״כ רווח חודשי:</span>
      <ReadonlyTextField
        isCurrency
        state={totalMonthEarningsState}
        className='bg-amber-400 text-white border-gray-500 rounded-sm'
      />
    </section>
  );
}
