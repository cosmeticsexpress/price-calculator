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
    <section className='grid grid-cols-2 gap-2 w-full'>
      {textFieldProps.map(({ state, label, isCurrency }) => (
        <div
          key={crypto.randomUUID()}
          className={`[&>output]:last:bg-gradient-to-r [&>output]:last:from-gold-300 [&>output]:last:to-gold-500 [&>output]:last:text-white flex flex-col items-center w-full`}
        >
          <span className='text-xs'>{label}:</span>
          <ReadonlyTextField
            state={state}
            isCurrency={isCurrency}
            className='border rounded-sm p-1 bg-white text-center w-full'
          />
        </div>
      ))}
    </section>
  );
}
