import { RecoilState } from 'recoil';
import Slider from '@components/Slider';

interface SliderGroupProps {
  children: {
    label: string;
    min: number;
    max: number;
    state: RecoilState<number>;
    key: string;
  }[];
}

export default function SliderGroup({ children }: SliderGroupProps) {
  return (
    <div className='flex flex-col gap-6 w-full'>
      {children.map(({ label, key, ...slider }) => (
        <div className='flex gap-4 relative' key={key}>
          <label className='text-base text-center w-1/3'>{label}</label>
          <Slider className='col-span-3 w-2/3' {...slider} />
        </div>
      ))}
    </div>
  );
}
