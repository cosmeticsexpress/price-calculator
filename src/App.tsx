import { useRecoilValue } from 'recoil';
import './App.css';
import CalculatorBlock from './CalculatorBlock';
import ReadonlyTextField from './ReadonlyTextField';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
  totalMonthEarningsState,
} from './states';

export default function App() {
  const calculatorTitles = [
    {
      title: 'אזורים קטנים',
      subtitle: 'פנים, מפשעות, בית שחי',
      states: smallAreasStates,
    },
    {
      title: 'אזורים גדולים',
      subtitle: 'רגליים, ידיים, בטן, גב',
      states: largeAreasStates,
    },
    {
      title: 'כל הגוף',
      subtitle: 'נשים, גברים',
      states: allBodyStates,
    },
  ];

  const totalMonthEarnings = useRecoilValue(totalMonthEarningsState);
  return (
    <>
      {calculatorTitles.map(({ title, subtitle, states }) => (
        <CalculatorBlock
          title={title}
          subtitle={subtitle}
          states={states}
          key={crypto.randomUUID()}
        />
      ))}
      <div>
        <span>סה״כ רווח חודשי</span>
        <ReadonlyTextField value={totalMonthEarnings} />
      </div>
    </>
  );
}
