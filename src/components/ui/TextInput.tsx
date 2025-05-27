import { UseFormRegister, FieldError } from 'react-hook-form';
import { ContactFormInputs } from '../contact/utils';

type TextInputProps = {
  name: keyof ContactFormInputs;
  register: UseFormRegister<ContactFormInputs>;
  error?: FieldError;
  type?: 'text' | 'email';
};

const TextInput = ({
  name,
  register,
  error,
  type = 'text',
  ...rest
}: TextInputProps) => {
  return (
    <input
      id={name}
      type={type}
      {...register(name)}
      className={`mt-1 block w-full p-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
        error ? 'border-red-500' : ''
      }`}
      {...rest}
    />
  );
};

export default TextInput;
