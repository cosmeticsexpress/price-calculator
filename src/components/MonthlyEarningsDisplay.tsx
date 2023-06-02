import ReadonlyTextField from '@components/ReadonlyTextField';
import { goldGradient } from '@utils/values';
import { totalMonthEarningsState } from '@utils/states';

export default function MonthlyEarningsDisplay() {
  return (
    <section className='flex flex-col items-center'>
      <span>סה״כ רווח חודשי:</span>
      <ReadonlyTextField
        isCurrency
        state={totalMonthEarningsState}
        className={`${goldGradient} text-white border text-center rounded-sm m-1 p-1 w-full`}
      />
    </section>
  );
}