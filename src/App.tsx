import { noop } from 'lodash/fp';
import { Typography } from '@mui/material';
import { CreditCardIcon, Form, SubmitButton, TextInputField } from './shared';

export const App = () => (
  <div className="flex size-full items-center justify-center bg-green-600 px-4 py-12">
    <div className="size-full max-w-md rounded-xl bg-white px-4 py-6">
      <Form onSubmit={noop} className="flex size-full flex-col">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Typography variant="body2" color="GrayText">
            Payment Method:{' '}
          </Typography>
          <CreditCardIcon className="size-5" />
          <Typography variant="body1">Credit Card</Typography>
        </div>
        <TextInputField name="cardNumber" />
        <TextInputField name="expiryDate" />
        <TextInputField name="cvv" />
        <TextInputField name="cardholderName" />
        <SubmitButton />
      </Form>
    </div>
  </div>
);
