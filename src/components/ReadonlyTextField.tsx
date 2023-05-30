import { CSSProperties } from 'react';
import { RecoilValue, useRecoilValue } from 'recoil';
import { formatCurrency, formatNumber } from '@utils/numberFormat';

export interface IReadonlyTextFieldProps {
  className?: string;
  style?: CSSProperties;
  state: RecoilValue<string | number>;
  isCurrency?: boolean;
}

export default function ReadonlyTextField({
  state,
  className = '',
  style = {},
  isCurrency = false,
}: IReadonlyTextFieldProps) {
  const value = useRecoilValue(state);
  const format = isCurrency ? formatCurrency : formatNumber;
  return (
    <output className={className} style={style}>
      {typeof value === 'number' || typeof value === 'bigint'
        ? format(value)
        : value}
    </output>
  );
}
