import Select from '@components/Select';

const { VITE_FORMSUBMIT_EMAIL, VITE_KAVERET_CREATE_LEAD_URL } = import.meta.env;

export default function ContactForm() {
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
    <form
      action={`https://formsubmit.co/${VITE_FORMSUBMIT_EMAIL}`}
      onSubmit={async (e) => {
        const { elements } = e.target as HTMLFormElement;

        const kaveretUrl = new URL(VITE_KAVERET_CREATE_LEAD_URL);

        Object.values(inputNames).forEach((name) =>
          kaveretUrl.searchParams.append(
            name === inputNames.interestedIn ? 'extraData' : name,
            (elements.namedItem(name) as HTMLInputElement)?.value
          )
        );

        await fetch(kaveretUrl, { mode: 'no-cors' });
      }}
      method='POST'
      className='grid place-items-center [&>*]:w-full container:grid-cols-3 gap-2'
    >
      <input type='hidden' name='_next' value={window.location.href} />
      <input type='hidden' name='_captcha' value='false' />

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
    </form>
  );
}
