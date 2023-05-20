export interface IReadonlyTextFieldProps {
  value: string | number;
}

export default function ReadonlyTextField({ value }: IReadonlyTextFieldProps) {
  return <input type='text' readOnly value={value} />;
}
