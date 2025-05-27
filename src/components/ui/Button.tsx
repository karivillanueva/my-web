type ButtonPropTypes = {
  type?: 'submit' | 'button';
  disabled?: boolean;
  title: string;
  disableTitle?: string;
};

const Button = ({
  type = 'submit',
  disabled,
  title,
  disableTitle,
}: ButtonPropTypes) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {disabled && disableTitle ? disableTitle : title}
    </button>
  );
};

export default Button;
