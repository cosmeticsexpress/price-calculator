import { useRecoilValue, RecoilState, RecoilValue } from 'recoil';
import ReadonlyTextField from '@components/ReadonlyTextField';
import { monthWorkdays } from '@utils/states';
import { formatCurrency } from '@utils/numberFormat';

export default function TextFieldGroup({
  appointmentPriceState,
  dayEarningsState,
  monthEarningsState,
}: {
  appointmentPriceState: RecoilState<number>;
  dayEarningsState: RecoilValue<number>;
  monthEarningsState: RecoilValue<number>;
}) {
  const appointmentPrice = useRecoilValue(appointmentPriceState);
  const dayEarnings = useRecoilValue(dayEarningsState);
  const monthEarnings = useRecoilValue(monthEarningsState);

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מטיפול יחיד</span>
        <ReadonlyTextField value={formatCurrency(appointmentPrice)} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מיום עבודה</span>
        <ReadonlyTextField value={formatCurrency(dayEarnings)} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>ימי עבודה חודשיים</span>
        <ReadonlyTextField value={monthWorkdays} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מחודש עבודה</span>
        <ReadonlyTextField value={formatCurrency(monthEarnings)} />
      </div>
    </>
  );
}
