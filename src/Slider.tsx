import { useRecoilState, RecoilState } from 'recoil';

interface ISliderProps {
  min: number;
  max: number;
  state: RecoilState<number>;
}

export default function Slider({ min, max, state }: ISliderProps) {
  const [value, setValue] = useRecoilState(state);
  return (
    <input
      type='range'
      min={min}
      max={max}
      value={value}
      onChange={(e) => setValue(parseInt(e.target.value))}
    />
  );
}
