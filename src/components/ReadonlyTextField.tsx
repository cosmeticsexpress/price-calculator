import { HTMLAttributes } from 'react';
import { RecoilValue, useRecoilValue } from 'recoil';
import { formatCurrency, formatNumber } from '@utils/numberFormat';

export interface ReadonlyTextFieldProps
  extends HTMLAttributes<HTMLOutputElement> {
  state: RecoilValue<string | number>;
  isCurrency?: boolean;
}

export default function ReadonlyTextField({
  state,
  className,
  style,
  isCurrency = false,
  id,
}: ReadonlyTextFieldProps) {
  const value = useRecoilValue(state);
  const format = isCurrency ? formatCurrency : formatNumber;
  return (
    <output id={id} className={className} style={style}>
      {typeof value === 'number' || typeof value === 'bigint'
        ? format(value)
        : value}
    </output>
  );
}
