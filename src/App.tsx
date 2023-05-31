import CalculatorBlock from '@components/CalculatorBlock';
import MonthlyEarningsDisplay from '@components/MonthlyEarningsDisplay';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
} from '@utils/states';
import { MinMax, RANGES, WORKING_HOURS, goldGradientText } from '@utils/values';
import backgroundImage from '@assets/background.jpg';

export default function App() {
  const calculatorProps = [
    {
      title: 'אזורים קטנים',
      subtitle: 'פנים ▪ מפשעות ▪ בית שחי',
      states: smallAreasStates,
      sliderRanges: RANGES.SMALL_AREAS,
    },
    {
      title: 'אזורים גדולים',
      subtitle: 'רגליים ▪ ידיים ▪ בטן ▪ גב',
      states: largeAreasStates,
      sliderRanges: RANGES.LARGE_AREAS,
    },
    {
      title: 'כל הגוף',
      subtitle: 'נשים ▪ גברים',
      states: allBodyStates,
      sliderRanges: RANGES.ALL_BODY,
    },
  ];

  calculatorProps.forEach(({ sliderRanges }) => {
    const { min, max } = WORKING_HOURS;
    sliderRanges = {
      ...sliderRanges,
      workingHours: {
        max: max - calculatorProps.length * min + min,
        min,
      } satisfies MinMax,
    };
  });

  return (
    <main
      dir='auto'
      style={{
        background: `url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'repeat',
      }}
      className='p-4 flex flex-col items-center gap-2 w-full h-full lg:h-screen'
    >
      <div className='text-center'>
        <h1 className={`font-semibold ${goldGradientText} text-3xl`}>
          מחשבון רווחים
        </h1>
        <h2 className='font-semibold text-3xl'>לטיפולי הסרת שיער בלייזר</h2>
      </div>
      <div className='flex gap-4 max-lg:flex-col max-sm:w-full'>
        {calculatorProps.map((props) => (
          <CalculatorBlock key={crypto.randomUUID()} {...props} />
        ))}
      </div>
      <div className='w-full flex justify-center'>
        <MonthlyEarningsDisplay />
      </div>
    </main>
  );
}
