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
    <>
      {sliderProps.map(({ label, min, max, state }) => (
        <div className='flex justify-between' key={crypto.randomUUID()}>
          <span>{label}</span>
          <Slider min={min} max={max} state={state} />
        </div>
      ))}
    </>
  );
}
