import {
  COSMETICSEXPRESS_EMAIL,
  COSMETICSEXPRESS_LOCATION_HE,
} from '@utils/values';
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function ContactDetails() {
  return (
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
  );
}
