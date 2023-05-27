import CalculatorBlock from '@components/CalculatorBlock';
import MonthlyEarningsDisplay from '@components/MonthlyEarningsDisplay';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
} from '@utils/states';

export default function App() {
  const calculatorTitles = [
    {
      title: 'אזורים קטנים',
      subtitle: 'פנים, מפשעות, בית שחי',
      states: smallAreasStates,
      sliderRanges: {
        appointmentDuration: {
          min: 5,
          max: 15,
        },
        appointmentPrice: {
          min: 100,
          max: 300,
        },
      },
    },
    {
      title: 'אזורים גדולים',
      subtitle: 'רגליים, ידיים, בטן, גב',
      states: largeAreasStates,
      sliderRanges: {
        appointmentDuration: {
          min: 15,
          max: 30,
        },
        appointmentPrice: {
          min: 200,
          max: 400,
        },
      },
    },
    {
      title: 'כל הגוף',
      subtitle: 'נשים, גברים',
      states: allBodyStates,
      sliderRanges: {
        appointmentDuration: {
          min: 20,
          max: 40,
        },
        appointmentPrice: {
          min: 300,
          max: 600,
        },
      },
    },
  ];

  return (
    <>
      {calculatorTitles.map(({ title, subtitle, states, sliderRanges }) => (
        <CalculatorBlock
          key={crypto.randomUUID()}
          title={title}
          subtitle={subtitle}
          states={states}
          sliderRanges={sliderRanges}
        />
      ))}
      <MonthlyEarningsDisplay />
    </>
  );
}
