import './App.css';
import CalculatorBlock from './CalculatorBlock';
import MonthlyEarningsDisplay from './MonthlyEarningsDisplay';
import { smallAreasStates, largeAreasStates, allBodyStates } from './states';

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
      <MonthlyEarningsDisplay />
    </>
  );
}
