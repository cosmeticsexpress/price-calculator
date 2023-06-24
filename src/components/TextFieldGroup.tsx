import { RecoilState, RecoilValue } from 'recoil';
import ReadonlyTextField from '@components/ReadonlyTextField';

interface TextFieldGroupProps {
  children: {
    state: RecoilValue<number> | RecoilState<number>;
    label: string;
    isCurrency?: boolean;
    key: string;
  }[];
}

export default function TextFieldGroup({ children }: TextFieldGroupProps) {
  return (
    <section className='grid grid-cols-2 gap-2 w-full'>
      {children.map(({ state, label, isCurrency, key }) => (
        <div
          key={key}
          className='[&>output]:last:bg-gold-gradient [&>output]:last:text-white flex flex-col justify-between items-center w-full text-center'
        >
          <label htmlFor={key}>{label}:</label>
          <ReadonlyTextField
            id={key}
            state={state}
            isCurrency={isCurrency}
            className='border rounded-sm p-1 bg-white text-center w-full'
          />
        </div>
      ))}
    </section>
  );
}
