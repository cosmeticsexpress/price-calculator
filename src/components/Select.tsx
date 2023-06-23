import { nanoid } from 'nanoid';
import { useState, CSSProperties } from 'react';
interface P {
  options?: string[] | { label: string; value: string }[];
  value?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
}

export default function Select({
  options,
  value,
  className,
  style,
  id,
  name,
}: P) {
  const [currentValue, setValue] = useState(value);
  return (
    <select
      id={id}
      name={name}
      value={currentValue}
      className={className}
      style={style}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value={value} disabled>
        {value}
      </option>
      {options?.map((option) => (
        <option
          key={nanoid()}
          value={typeof option === 'string' ? option : option.value}
        >
          {typeof option === 'string' ? option : option.label}
        </option>
      ))}
    </select>
  );
}
