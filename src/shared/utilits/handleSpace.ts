import type { UseFormSetValue } from 'react-hook-form';
import type { Tcard } from '../model/schema';

type Props = {
  e: React.ChangeEvent<HTMLInputElement>;
  setValue: UseFormSetValue<Tcard>;
};

export const handleCardNumberSpacing = ({ e, setValue }: Props) => {
  let raw = e.target.value.replace(/\D/g, '');
  const maxLength = 16;

  raw = raw.slice(0, maxLength);

  const formatted = raw.replace(/(.{4})/g, '$1 ').trim();

  setValue('ccNumber', formatted, {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true
  });
};
