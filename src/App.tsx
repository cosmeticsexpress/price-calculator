import CalculatorBlock from '@components/CalculatorBlock';
import MonthlyEarningsDisplay from '@components/MonthlyEarningsDisplay';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
} from '@utils/states';

export default function App() {
  const calculatorProps = [
    {
      title: 'אזורים קטנים',
      subtitle: 'פנים ▪ מפשעות ▪ בית שחי',
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
      subtitle: 'רגליים ▪ ידיים ▪ בטן ▪ גב',
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
      subtitle: 'נשים ▪ גברים',
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
    <main dir='auto' className='p-4 flex flex-col items-center gap-2'>
      <div className='text-center'>
        <h1 className='font-semibold text-amber-500 text-3xl'>מחשבון רווחים</h1>
        <h2 className='font-semibold text-3xl'>לטיפולי הסרת שיער בלייזר</h2>
      </div>
      <div className='flex gap-4 max-lg:flex-col max-sm:w-full'>
        {calculatorProps.map(({ title, subtitle, states, sliderRanges }) => (
          <CalculatorBlock
            key={crypto.randomUUID()}
            title={title}
            subtitle={subtitle}
            states={states}
            sliderRanges={sliderRanges}
          />
        ))}
      </div>
      <div className='w-full flex justify-center'>
        <MonthlyEarningsDisplay />
      </div>
    </main>
  );
}
