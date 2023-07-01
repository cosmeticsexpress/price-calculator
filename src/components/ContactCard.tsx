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

  const inputNames = {
    name: 'name',
    phone: 'phone',
    mail: 'mail',
    interestedIn: 'interestedIn',
  };

  return (
    <footer className='bg-gold-400 w-full text-black font-rubik py-4 px-2 grid place-items-center gap-4 text-center [&>*]:max-w-screen-container'>
      <section className='flex max-container:flex-col flex-wrap gap-2 text-start w-full'>
        <div>
          <a href='tel:97235566104' target='_blank'>
            <FaPhone className='inline m-1' />
            03-5566104
          </a>
        </div>
        <div>
          <a href='https://wa.me/972509777076' target='_blank'>
            <FaWhatsapp className='text-white inline text-2xl ml-1 p-1 bg-green-600 rounded-full aspect-square overflow-visible' />
            שליחת הודעה בוואטסאפ
          </a>
        </div>
        <div>
          <FaLocationDot className='inline m-1' />
          {COSMETICSEXPRESS_LOCATION_HE}
        </div>
        <div>
          <a href={`mailto:${COSMETICSEXPRESS_EMAIL}`} target='_blank'>
            <FaEnvelope className='inline m-1' />
            {COSMETICSEXPRESS_EMAIL}
          </a>
        </div>
      </section>

      <form
        action={`https://formsubmit.co/${
          import.meta.env.VITE_FORM_EMAIL ?? COSMETICSEXPRESS_EMAIL
        }`}
        onSubmit={async (e: React.SyntheticEvent<HTMLFormElement>) => {
          const { elements } = e.target as HTMLFormElement;

          const myKaveretUrl = new URL(
            import.meta.env.VITE_KAVERET_WEBHOOK_URL ??
              `http://cloud.kaveret.biz/external/landing-page/create-lead/2e084524bbef774d510e`
          );

          Object.values(inputNames).forEach((name) =>
            myKaveretUrl.searchParams.append(
              name === inputNames.interestedIn ? 'extraData' : name,
              (elements.namedItem(name) as HTMLInputElement)?.value
            )
          );

          await fetch(myKaveretUrl, {
            mode: 'no-cors',
          });
        }}
        method='POST'
      >
        <input type='hidden' name='_next' value={window.location.href} />
        <input type='hidden' name='_captcha' value='false' />

        <h4 className='mb-4'>
          לקביעת פגישה אצלנו או אצלך בקליניקה ללא כל התחייבות הקליקי והשאירי
          פרטים ונחזור אליך בהקדם:
        </h4>
        <div className='grid place-items-center [&>*]:w-full container:grid-cols-3 gap-2'>
          <input
            className='p-1'
            required
            type='text'
            name={inputNames.name}
            id='fullname'
            placeholder='שם מלא'
          />
          <input
            className='p-1'
            required
            type='tel'
            name={inputNames.phone}
            id='phonenumber'
            placeholder='מספר טלפון'
          />
          <input
            className='p-1'
            required
            type='email'
            name={inputNames.mail}
            id='email'
            placeholder='אימייל'
          />
          <Select
            className='h-8'
            required
            options={options}
            name={inputNames.interestedIn}
            id='interested-in'
            value='מעוניין ב:'
          />
          <div className='flex gap-2 text-start'>
            <input required type='checkbox' id='tosconfirm' className='w-5' />
            <label htmlFor='tosconfirm'>אני מסכימ.ה לתנאי השימוש</label>
          </div>
          <button className='bg-black text-white rounded-sm hover:underline hover:text-gold-300 transition container:hover:scale-105 duration-300 p-1'>
            שליחה
          </button>
        </div>
      </form>
    </footer>
  );
}
