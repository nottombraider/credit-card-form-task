import type { FieldError } from 'react-hook-form';

type Props = {
  error: FieldError | undefined;
  message: string | undefined;
  label: string;
};
export const CustomInputLabel = (props: Props) => {
  const { error, message, label } = props;

  return (
    <>
      {error ? (
        <span className="mt-1 text-[10px] text-red-500">{message}</span>
      ) : (
        <span className="select-none text-xs uppercase text-gray-400">
          {label}
        </span>
      )}
    </>
  );
};
