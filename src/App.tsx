import { nanoid } from 'nanoid';

import CalculatorBlock from '@components/CalculatorBlock';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
  totalMonthEarningsState,
} from '@utils/states';
import { MinMax, RANGES, WORKING_HOURS } from '@utils/values';
import backgroundImage from '@assets/background.webp';
import thumbnailDesktop from '@assets/thumbnail-desktop.webp';
import thumbnailMobile from '@assets/thumbnail-mobile.webp';
import ReadonlyTextField from '@components/ReadonlyTextField';
import ContactCard from './components/ContactCard';

export default function App() {
  const calculatorProps = [
    {
      key: nanoid(),
      title: 'אזורים קטנים',
      subtitle: 'פנים • מפשעות • בית שחי',
      states: smallAreasStates,
      sliderRanges: RANGES.SMALL_AREAS,
    },
    {
      key: nanoid(),
      title: 'אזורים גדולים',
      subtitle: 'רגליים • ידיים • בטן • גב',
      states: largeAreasStates,
      sliderRanges: RANGES.LARGE_AREAS,
    },
    {
      key: nanoid(),
      title: 'כל הגוף',
      subtitle: 'נשים • גברים',
      states: allBodyStates,
      sliderRanges: RANGES.ALL_BODY,
    },
  ];

  calculatorProps.forEach(({ sliderRanges }) => {
    const { min, max } = WORKING_HOURS;
    sliderRanges.workingHours = {
      max: max - calculatorProps.length * min + min,
      min,
    } satisfies MinMax;
  });

  const MAX_MOBILE_WIDTH = 425,
    MAX_CONTAINER_WIDTH = 672;

  return (
    <div
      dir='auto'
      className='grid place-items-center'
      style={{
        background: `url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header>
        <picture>
          <source
            type='image/webp'
            media={`(max-width: ${MAX_MOBILE_WIDTH}px)`}
            width={MAX_MOBILE_WIDTH}
            height={651}
            srcSet={thumbnailMobile}
          />
          <img
            src={thumbnailDesktop}
            alt='Cosmetics Express: מחשבון רווחים לטיפולי הסרת שיער בלייזר'
            width={MAX_CONTAINER_WIDTH}
            height={343}
          />
        </picture>
      </header>
      <main className='flex flex-col items-center w-full h-full min-h-screen [&>*]:max-w-screen-container'>
        <div className='py-4 max-container:p-4 w-full h-full flex flex-col items-center gap-2'>
          <div className='flex gap-4 max-container:flex-col w-full'>
            {calculatorProps.map((props) => (
              <CalculatorBlock {...props} />
            ))}
          </div>
          <section
            className='w-full flex flex-col items-center'
            title='סה״כ רווח חודשי:'
          >
            <strong className='text-center text-sm'>
              *המחשבון פועל בצורה לוגית חכמה וכולל התחשבות בזמני הפסקה ואורך זמן
              טיפול ממוצע
            </strong>
            <h4>סה״כ רווח חודשי:</h4>
            <ReadonlyTextField
              isCurrency
              state={totalMonthEarningsState}
              className='bg-gold-gradient text-white border text-center rounded-sm m-1 p-1 w-full'
            />
          </section>
        </div>
      </main>
      <ContactCard />
    </div>
  );
}
