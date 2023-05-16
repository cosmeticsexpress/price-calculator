import { RecoilState } from 'recoil';
import Slider from './Slider';

interface ISliderGroupProps {
  sliderGroupProps: {
    label: string;
    min: number;
    max: number;
    state: RecoilState<number>;
  }[];
}

export default function SliderGroup({ sliderGroupProps }: ISliderGroupProps) {
  return (
    <>
      {sliderGroupProps.map(({ label, min, max, state }) => (
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
          key={crypto.randomUUID()}
        >
          <span>{label}</span>
          <Slider min={min} max={max} state={state} />
        </div>
      ))}
    </>
  );
}
