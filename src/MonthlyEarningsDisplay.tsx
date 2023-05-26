import { useRecoilValue } from 'recoil';
import ReadonlyTextField from './ReadonlyTextField';
import { totalMonthEarningsState } from './states';

export default function MonthlyEarningsDisplay() {
  const totalMonthEarnings = useRecoilValue(totalMonthEarningsState);

  return (
    <div>
      <span>סה״כ רווח חודשי</span>
      <ReadonlyTextField value={totalMonthEarnings} />
    </div>
  );
}
