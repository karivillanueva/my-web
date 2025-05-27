import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

type InputWrapperProps = {
  label: string;
  name: string;
  error?: FieldError;
  children: ReactNode;
};

const InputWrapper = ({ label, name, error, children }: InputWrapperProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputWrapper;
