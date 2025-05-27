import { UseFormRegister, FieldError } from 'react-hook-form';
import { ContactFormInputs } from '../contact/utils';

type TextAreaProps = {
  name: keyof ContactFormInputs;
  register: UseFormRegister<ContactFormInputs>;
  error?: FieldError;
};

const TextArea = ({ name, register, error }: TextAreaProps) => {
  return (
    <textarea
      id={name}
      {...register(name)}
      rows={4}
      className={`mt-1 block w-full text-black p-4 text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
        error ? 'border-red-500' : ''
      }`}
    />
  );
};

export default TextArea;
