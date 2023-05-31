import CalculatorBlock from '@components/CalculatorBlock';
import MonthlyEarningsDisplay from '@components/MonthlyEarningsDisplay';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
} from '@utils/states';
import { MinMax, RANGES, WORKING_HOURS } from '@utils/values';
import backgroundImage from '@assets/background.jpg';
import thumbnailDesktop from '@assets/thumbnail-desktop.png';
import thumbnailMobile from '@assets/thumbnail-mobile.png';

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
      className='flex flex-col items-center gap-2 w-full h-full min-h-screen [&>*]:max-w-2xl'
    >
      <picture className='max-lg:max-w-xs'>
        <source media='(min-width: 425px)' srcSet={thumbnailDesktop} />
        <img srcSet={thumbnailMobile} />
      </picture>

      <div className='p-4 lg:px-0 w-full h-full flex flex-col items-center gap-2'>
        <div className='flex gap-4 max-lg:flex-col max-[425px]:w-full max-lg:w-80 w-full'>
          {calculatorProps.map((props) => (
            <CalculatorBlock key={crypto.randomUUID()} {...props} />
          ))}
        </div>
        <div className='w-full flex justify-center'>
          <MonthlyEarningsDisplay />
        </div>
      </div>
    </main>
  );
}
