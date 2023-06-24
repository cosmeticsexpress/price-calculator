import { nanoid } from 'nanoid';
import { HTMLAttributes, useState } from 'react';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options?: string[] | { label: string; value: string }[];
  value?: string;
  name?: string;
}

export default function Select({
  options,
  value,
  className,
  style,
  id,
  name,
  title,
}: SelectProps) {
  const [currentValue, setValue] = useState(value);
  return (
    <select
      title={title}
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
