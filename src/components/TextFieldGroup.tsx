import { RecoilState, RecoilValue } from 'recoil';
import ReadonlyTextField from '@components/ReadonlyTextField';

interface ITextFieldGroupProps {
  textFieldProps: {
    state: RecoilValue<number> | RecoilState<number>;
    label: string;
    isCurrency?: boolean;
  }[];
}

export default function TextFieldGroup({
  textFieldProps,
}: ITextFieldGroupProps) {
  return (
    <section className='grid'>
      {textFieldProps.map(({ state, label, isCurrency }) => (
        <div key={crypto.randomUUID()}>
          <span>{label}</span>
          <ReadonlyTextField
            state={state}
            isCurrency={isCurrency}
            className='border-gray-500 rounded-sm'
          />
        </div>
      ))}
    </section>
  );
}
