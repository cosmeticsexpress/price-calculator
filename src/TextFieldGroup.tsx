import { useRecoilValue, RecoilState } from 'recoil';
import ReadonlyTextField from './ReadonlyTextField';

export default function TextFieldGroup({
  appointmentPriceState,
  workingHoursState,
}: {
  appointmentPriceState: RecoilState<number>;
  workingHoursState: RecoilState<number>;
}) {
  const workdaysInMonth = 25;
  const appointmentPrice = useRecoilValue(appointmentPriceState);
  const workingHours = useRecoilValue(workingHoursState);
  const dayEarnings = appointmentPrice * workingHours;

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
        <ReadonlyTextField value={dayEarnings} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>ימי עבודה חודשיים</span>
        <ReadonlyTextField value={workdaysInMonth} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        key={crypto.randomUUID()}
      >
        <span>רווח מחודש עבודה</span>
        <ReadonlyTextField value={dayEarnings * workdaysInMonth} />
      </div>
    </>
  );
}
