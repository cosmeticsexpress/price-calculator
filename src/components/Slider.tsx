import { ReactNode, useEffect, useState } from 'react';
import { useRecoilState, RecoilState } from 'recoil';
import { Range, getTrackBackground, Direction } from 'react-range';

interface ISliderProps {
  min: number;
  max: number;
  state: RecoilState<number>;
  className?: string;
  outputRenderer?: (value: number) => ReactNode;
}

export default function Slider({
  min,
  max,
  state,
  outputRenderer = (value) => value,
}: ISliderProps) {
  const [value, setValue] = useRecoilState(state);
  const [localValue, setLocalValue] = useState(value);
  const output = outputRenderer(localValue);
  useEffect(() => setLocalValue(value), [value]);
  return (
    <Range
      rtl
      values={[localValue]}
      min={min}
      max={max}
      onChange={([newValue]) => setLocalValue(newValue)}
      onFinalChange={([newValue]) => setValue(newValue)}
      step={1}
      renderTrack={({ props, children }) => (
        <div
          className='flex w-full'
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{ ...props.style }}
        >
          <div
            dir='rtl'
            ref={props.ref}
            className='border-2 rounded-full h-3 w-full self-center'
            style={{
              background: getTrackBackground({
                direction: Direction.Left,
                values: [localValue],
                colors: ['#e6c462, #876628', '#fff'],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={props.style}
          className='relative outline-gold-500 bg-gold-900 w-4 aspect-square rounded-full before:absolute before:-top-2/3 before:transform before:-translate-x-1/2 before:rotate-45 before:w-2 before:h-2 before:bg-gold-900'
        >
          <div
            className={[
              'absolute bottom-5 bg-gold-900 text-white text-xs whitespace-nowrap px-1 rounded-md transition-all z-10 select-none pointer-events-none',
              localValue > (max + min) / 2
                ? 'translate-x-[calc(100%-1rem)]'
                : '',
            ]
              .join(' ')
              .trim()}
          >
            {output}
          </div>
        </div>
      )}
    />
  );
}
