import type { UseFormSetValue } from 'react-hook-form';
import type { Tcard } from '../model/schema';

type Props = {
  e: React.ChangeEvent<HTMLInputElement>;
  setValue: UseFormSetValue<Tcard>;
};
export const handleExpireDateChange = (props: Props) => {
  const { e, setValue } = props;
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 4) value = value.slice(0, 4);
  if (value.length > 2) {
    value = `${value.slice(0, 2)}/${value.slice(2)}`;
  }
  setValue('expireDate', value);
};
