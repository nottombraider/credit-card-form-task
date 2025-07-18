import * as yup from 'yup';
import { isExpiryDateValid } from '../utilits/isExpiryDateValid';

export type Tcard = {
  cardholderName: string;
  ccNumber: string;
  expireDate: string;
  CVV: string;
  cardType: 'AMEX' | 'MASTERCARD' | 'VISA';
};

export const schema: yup.SchemaOf<Tcard> = yup.object({
  cardholderName: yup
    .string()
    .required('required')
    .when('cardType', {
      is: (val: string) => val === 'AMEX',
      then: schema => schema.min(5, 'min include 5 letters'),
      otherwise: schema => schema
    }),

  ccNumber: yup
    .string()
    .required('Card Number is required')
    .transform(value => value.replace(/\s+/g, ''))
    .when('cardType', {
      is: (val: string) => val === 'AMEX',
      then: schema => schema.matches(/^\d{15}$/, 'must be 15 digits'),
      otherwise: schema =>
        schema.matches(/^\d{16}$/, 'number must be 16 digits')
    }),

  expireDate: yup
    .string()
    .required('required')
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'must be in MM/YY format')
    .test('expiry-not-expired', 'cannot be in the past', value =>
      value ? isExpiryDateValid(value) : false
    ),

  CVV: yup
    .string()
    .required('required')
    .when('cardType', {
      is: (val: string) => val === 'AMEX',
      then: schema => schema.length(4, 'should include 4 numbers'),
      otherwise: schema => schema.length(3, 'should include 3 numbers')
    }),

  cardType: yup
    .mixed<'AMEX' | 'MASTERCARD' | 'VISA'>()
    .oneOf(['AMEX', 'MASTERCARD', 'VISA'])
    .required('required')
});
