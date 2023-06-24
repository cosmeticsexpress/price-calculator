import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';
import Select from '@components/Select';
import {
  COSMETICSEXPRESS_EMAIL,
  COSMETICSEXPRESS_LOCATION_HE,
} from '@utils/values';

export default function ContactCard() {
  const options = [
    'Eos Ice Pro',
    'Eos Ice Premium Gold',
    'Eos Ice Premium',
    'ICE-BERG',
    'Multi Mona',
    'BEAM+',
    'CryoSlim',
    'Scul Up Platinum',
  ];

  return (
    <footer className='bg-gold-400 w-full text-black font-rubik py-4 px-2 grid place-items-center gap-4 text-center [&>*]:max-w-screen-container'>
      <section className='flex max-container:flex-col flex-wrap gap-2'>
        <div>
          <a href='tel:97235566104' target='_blank'>
            <FaPhone className='text-black inline m-1' />
            03-5566104
          </a>
        </div>
        <div>
          <a href='https://wa.me/972509777076' target='_blank'>
            <FaWhatsapp className='text-white inline text-2xl ml-1 p-1 bg-green-600 rounded-full aspect-square overflow-visible' />
            שלח הודעה בוואטסאפ
          </a>
        </div>
        <div>
          <FaLocationDot className='text-black inline m-1' />
          {COSMETICSEXPRESS_LOCATION_HE}
        </div>
        <div>
          <a href={`mailto:${COSMETICSEXPRESS_EMAIL}`} target='_blank'>
            <FaEnvelope className='text-black inline m-1' />
            {COSMETICSEXPRESS_EMAIL}
          </a>
        </div>
      </section>

      <form
        action={`https://formsubmit.co/${
          import.meta.env.VITE_FORM_EMAIL ?? COSMETICSEXPRESS_EMAIL
        }`}
        method='POST'
      >
        <h4 className='mb-4'>
          לקביעת פגישה אצלנו או אצלך בקליניקה ללא כל התחייבות הקליקי והשאירי
          פרטים ונחזור אליך בהקדם:
        </h4>
        <div className='grid container:grid-cols-3 gap-2'>
          <input type='hidden' name='_captcha' value='false' />
          <input
            className='text-black p-1'
            type='text'
            name='name'
            id='fullname'
            placeholder='שם מלא'
          />
          <input
            className='text-black p-1'
            type='tel'
            name='phone'
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
          <Select
            options={options}
            name='interestedIn'
            id='interested-in'
            value='מעוניין ב:'
            className='text-black'
          />
          <div className='flex gap-2 text-start'>
            <input
              required
              type='checkbox'
              id='tosconfirm'
              className='bg-white w-5'
            />
            <label htmlFor='tosconfirm'>אני מסכימ.ה לתנאי השימוש</label>
          </div>
          <input
            type='submit'
            value='שליחה'
            className='bg-black text-white rounded-sm cursor-pointer hover:underline hover:text-gold-300 transition-colors duration-300 p-1'
          />
        </div>
      </form>

      <section>
        <small>האתר פותח על ידי נעם בכר</small>
      </section>
    </footer>
  );
}
