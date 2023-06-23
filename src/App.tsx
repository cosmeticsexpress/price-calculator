import { nanoid } from 'nanoid';
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';

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
    <main
      dir='auto'
      style={{
        background: `url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex flex-col items-center w-full h-full min-h-screen [&>*]:max-w-screen-container'
    >
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

      <article className='bg-gold-400 w-full text-black font-rubik py-4'>
        <section className='flex max-container:flex-col flex-wrap gap-2 p-2'>
          <div>
            <a href='tel:+972-3-556-6104'>
              <FaPhone className='text-black inline m-1' />
              03-5566104
            </a>
          </div>
          <div>
            <a href='https://wa.me/97235566104'>
              <FaWhatsapp className='text-white inline text-2xl ml-1 p-1 bg-green-600 rounded-full aspect-square overflow-visible' />
              שלח הודעה בוואטסאפ
            </a>
          </div>
          <div>
            <FaLocationDot className='text-black inline m-1' />
            רח׳ ההגנה 13, ראשון לציון
          </div>
          <div>
            <a href='mailto:cosmeticsexpress1@gmail.com'>
              <FaEnvelope className='text-black inline m-1' />
              cosmeticsexpress01@gmail.com
            </a>
          </div>
        </section>

        <section className='p-2 text-center'>
          <h4 className='mb-4'>
            לקביעת פגישה אצלנו או אצלך בקליניקה ללא כל התחייבות הקליקי והשאירי
            פרטים ונחזור אליך בהקדם:
          </h4>
          <form
            className='grid container:grid-cols-3 gap-2'
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className='text-black p-1'
              type='text'
              name='full name'
              id='fullname'
              placeholder='שם מלא'
            />
            <input
              className='text-black p-1'
              type='tel'
              name='phone number'
              id='phonenumber'
              placeholder='מספר טלפון'
            />
            <input
              className='text-black p-1'
              type='email'
              name='email'
              id='email'
              placeholder='אימייל'
            />
            <select
              name='select'
              id='select'
              value='מעוניין ב:'
              className='text-black p-1'
            >
              <option value='מעוניין ב:' disabled>
                מעוניין ב:
              </option>
              <option value='Eos Ice Pro'>Eos Ice Pro</option>
              <option value='Eos Ice Premium Gold'>Eos Ice Premium Gold</option>
              <option value='Eos Ice Premium'>Eos Ice Premium</option>
              <option value='ICE-BERG'>ICE-BERG</option>
              <option value='Multi Mona'>Multi Mona</option>
              <option value='BEAM+'>BEAM+</option>
              <option value='CryoSlim'>CryoSlim</option>
              <option value='Scul Up Platinum'>Scul Up Platinum</option>
            </select>
            <div className='flex gap-2'>
              <input
                required
                type='checkbox'
                name='terms of service confirmation'
                id='tos'
                className='bg-white w-5'
              />
              <label htmlFor='tos'>אני מסכימ.ה לתנאי השימוש</label>
            </div>
            <input
              type='submit'
              value='שליחה'
              className='bg-black text-white rounded-sm cursor-pointer hover:underline hover:text-gold-300 transition-colors duration-300 p-1'
            />
          </form>
        </section>
      </article>
    </main>
  );
}
