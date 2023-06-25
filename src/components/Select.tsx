import { nanoid } from 'nanoid';
import { HTMLAttributes, useState } from 'react';

interface SelectProps
  extends HTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  options?: string[] | { label: string; value: string }[];
  value?: string;
  name?: string;
  required?: boolean;
}

export default function Select({
  options,
  value,
  className,
  style,
  id,
  name,
  title,
  required = false,
}: SelectProps) {
  const [currentValue, setValue] = useState('');
  return (
    <select
      required={required}
      title={title}
      id={id}
      name={name}
      value={currentValue}
      className={className}
      style={style}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value='' disabled hidden>
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
