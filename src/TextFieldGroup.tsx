import { useRecoilValue, RecoilState, RecoilValue } from 'recoil';
import ReadonlyTextField from './ReadonlyTextField';
import { monthWorkdays } from './states';

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

  const format = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
  }).format;

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מטיפול יחיד</span>
        <ReadonlyTextField value={appointmentPrice} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מיום עבודה</span>
        <ReadonlyTextField value={format(dayEarnings)} />
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
        <ReadonlyTextField value={format(monthEarnings)} />
      </div>
    </>
  );
}
