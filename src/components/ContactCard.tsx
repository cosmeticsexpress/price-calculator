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
  COSMETICSEXPRESS_PHONE,
} from '@/utils/values';

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
    <article className='bg-gold-400 w-full text-black font-rubik py-4'>
      <section className='flex max-container:flex-col flex-wrap gap-2 p-2'>
        <div>
          <a href={`tel:${COSMETICSEXPRESS_PHONE}`} target='_blank'>
            <FaPhone className='text-black inline m-1' />
            03-5566104
          </a>
        </div>
        <div>
          <a href={`https://wa.me/${COSMETICSEXPRESS_PHONE}`} target='_blank'>
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

      <section className='p-2 text-center'>
        <h4 className='mb-4'>
          לקביעת פגישה אצלנו או אצלך בקליניקה ללא כל התחייבות הקליקי והשאירי
          פרטים ונחזור אליך בהקדם:
        </h4>
        <form
          className='grid container:grid-cols-3 gap-2'
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.elements);
          }}
        >
          <input
            className='text-black p-1'
            type='text'
            name='fullname'
            id='fullname'
            placeholder='שם מלא'
          />
          <input
            className='text-black p-1'
            type='tel'
            name='phonenumber'
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
            name='interested-in'
            id='interested-in'
            value='מעוניין ב:'
            className='text-black'
          />
          <div className='flex gap-2 text-start'>
            <input
              required
              type='checkbox'
              name='tosconfirm'
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
        </form>
      </section>
    </article>
  );
}
