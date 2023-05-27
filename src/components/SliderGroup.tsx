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
    <div className='flex flex-col gap-2 w-full'>
      {sliderProps.map(({ label, min, max, state }) => (
        <div className='flex gap-1 relative' key={crypto.randomUUID()}>
          <span className='text-xs text-center w-1/3'>{label}</span>
          <Slider
            className='col-span-3 w-2/3'
            min={min}
            max={max}
            state={state}
          />
        </div>
      ))}
    </div>
  );
}
