import { useRecoilValue } from 'recoil';
import ReadonlyTextField from '@components/ReadonlyTextField';
import { totalMonthEarningsState } from '@utils/states';
import { formatCurrency } from '@utils/numberFormat';

export default function MonthlyEarningsDisplay() {
  const totalMonthEarnings = useRecoilValue(totalMonthEarningsState);

  return (
    <div>
      <span>סה״כ רווח חודשי</span>
      <ReadonlyTextField value={formatCurrency(totalMonthEarnings)} />
    </div>
  );
}
