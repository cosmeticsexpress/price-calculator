import { nanoid } from 'nanoid';
import CalculatorBlock from '@components/CalculatorBlock';
import {
  smallAreasStates,
  largeAreasStates,
  allBodyStates,
  totalMonthEarningsState,
} from '@utils/states';
import { MinMax, RANGES, WORKING_HOURS, goldGradient } from '@utils/values';
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

      <div className='p-4 min-[672px]:px-0 w-full h-full flex flex-col items-center gap-2'>
        <div className='flex gap-4 max-[672px]:flex-col max-[425px]:w-full w-full'>
          {calculatorProps.map((props) => (
            <CalculatorBlock {...props} />
          ))}
        </div>
        <section
          className='w-full flex flex-col items-center'
          title='סה״כ רווח חודשי:'
        >
          <h4>סה״כ רווח חודשי:</h4>
          <ReadonlyTextField
            isCurrency
            state={totalMonthEarningsState}
            className={`${goldGradient} text-white border text-center rounded-sm m-1 p-1 w-full`}
          />
        </section>
      </div>
    </main>
  );
}
