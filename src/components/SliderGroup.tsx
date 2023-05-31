import { RecoilState } from 'recoil';
import Slider from '@components/Slider';

interface ISliderGroupProps {
  sliderProps: {
    label: string;
    min: number;
    max: number;
    state: RecoilState<number>;
  }[];
}

export default function SliderGroup({ sliderProps }: ISliderGroupProps) {
  return (
    <div className='flex flex-col gap-6 w-full'>
      {sliderProps.map(({ label, ...slider }) => (
        <div className='flex gap-4 relative' key={crypto.randomUUID()}>
          <span className='text-base text-center w-1/3'>{label}</span>
          <Slider className='col-span-3 w-2/3' {...slider} />
        </div>
      ))}
    </div>
  );
}
