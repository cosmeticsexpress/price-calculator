import { nanoid } from 'nanoid';
import { HTMLAttributes, useState } from 'react';

interface SelectProps
  extends HTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  options?: string[] | { label: string; value: string }[];
  defaultValue?: string;
  name?: string;
  required?: boolean;
}

export default function Select({
  options,
  defaultValue,
  className,
  style,
  id,
  name,
  required = false,
}: SelectProps) {
  const [currentValue, setValue] = useState('');
  return (
    <select
      required={required}
      title={defaultValue}
      id={id}
      name={name}
      value={currentValue}
      className={className}
      style={style}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value='' disabled hidden>
        {defaultValue}
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
