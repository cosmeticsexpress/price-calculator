import { nanoid } from 'nanoid';
import CalculatorBlock from '@components/CalculatorBlock';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
  totalMonthEarningsState,
} from '@utils/states';
import { MinMax, RANGES, WORKING_HOURS } from '@utils/values';
import backgroundImage from '@assets/background.jpg';
import thumbnailDesktop from '@assets/thumbnail-desktop.png';
import thumbnailMobile from '@assets/thumbnail-mobile.png';
import ReadonlyTextField from './components/ReadonlyTextField';

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex flex-col items-center w-full h-full min-h-screen [&>*]:max-w-2xl'
    >
      <picture>
        <source
          media='(max-width: 425px)'
          width={425}
          srcSet={thumbnailMobile}
        />
        <source
          media='(min-width: 426px)'
          width={672}
          srcSet={thumbnailDesktop}
        />
        <img
          src={thumbnailDesktop}
          alt='Cosmetics Express: מחשבון רווחים לטיפולי הסרת שיער בלייזר'
          height='auto'
        />
      </picture>

      <div className='py-4 max-[672px]:p-4 w-full h-full flex flex-col items-center gap-2'>
        <div className='flex gap-4 max-[672px]:flex-col max-[425px]:w-full w-full'>
          {calculatorProps.map((props) => (
            <CalculatorBlock {...props} />
          ))}
        </div>
        <section
          className='w-full flex flex-col items-center'
          title='סה״כ רווח חודשי:'
        >
          <strong className='text-center'>
            * חישוב הרווח ביום עבודה כולל חילוק התוצאה המתקבלת, ולוקח בחשבון את
            זמני ההפסקות ביום. חישוב זה חל גם על הרווח בחודש עבודה.
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
  );
}
