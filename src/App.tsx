import * as i from './imports';

export const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    setValue,
    control,
    formState: { errors, isValid, isDirty }
  } = i.useForm<i.Tcard>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: i.yupResolver(i.schema),
    mode: 'onTouched'
  });

  watch('cardType');
  const expireDate = watch('expireDate');
  const ccNumber = watch('ccNumber');
  const [side, setSide] = i.useState(false);

  const onSubmit: i.SubmitHandler<i.Tcard> = data => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expireDate, cardType, ...rest } = data;
    const payload = {
      ...rest,
      expiryMonth: expireDate.split('/')[0],
      expiryYear: '20' + expireDate.split('/')[1],
      ccNumber: rest.ccNumber.replace(' ', '')
    };

    console.log('payload:', payload);
    reset();
  };

  return (
    <div className="flex size-full min-h-screen items-center justify-center bg-gray-900 px-4 py-12 ">
      <div className="size-full max-w-md rounded-xl  bg-gray-900 px-6 py-8 shadow-xl">
        <form
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSubmit={handleSubmit(onSubmit)}
          className="flex size-full flex-col  gap-6 bg-gray-900 text-gray-200"
          noValidate
        >
          <div className="mb-6 flex select-none items-center justify-center gap-3 text-gray-400">
            <i.Typography
              variant="body2"
              color="inherit"
              className="font-semibold uppercase tracking-widest text-gray-400"
              sx={{ letterSpacing: '0.15em' }}
            >
              Payment Method:
            </i.Typography>
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 shadow-lg">
              <i.CreditCardIcon fontSize="medium" className="drop-shadow-lg" />
            </div>
            <i.Typography
              variant="h6"
              color="inherit"
              className="font-bold text-white drop-shadow-md"
            >
              Credit Card
            </i.Typography>
          </div>

          <div className="relative h-[250px] w-full [perspective:1000px] ">
            <div
              className={`relative size-full transition-transform duration-700 [transform-style:preserve-3d] ${
                side ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-[20px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-6 text-white shadow-2xl [backface-visibility:hidden]">
                <div className="flex items-center justify-between">
                  <h1 className="select-none text-lg font-bold tracking-wide">
                    PAYTECH
                    <img src="https://pay.tech/wp-content/themes/paytech/assets/images/icons/logo-small.svg" />
                  </h1>

                  <i.WifiIcon
                    sx={{
                      color: 'white',
                      transform: 'rotate(90deg)',
                      fontSize: 28
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <i.CustomInputLabel
                    label={'Card Number'}
                    error={errors.ccNumber}
                    message={errors?.ccNumber?.message}
                  />
                  <i.TextField
                    {...register('ccNumber')}
                    placeholder="1234 5678 9012 3456"
                    value={ccNumber || ''}
                    onChange={e =>
                      i.handleCardNumberSpacing({
                        e: e as React.ChangeEvent<HTMLInputElement>,
                        setValue
                      })
                    }
                    InputProps={i.cardStyle.InputProps}
                    sx={i.cardStyle.sx}
                  />
                </div>
                <div className="flex h-[50px] max-h-[50px] w-full items-center justify-between px-2">
                  <div className="flex h-full flex-col justify-center">
                    <i.CustomInputLabel
                      label={'cardholderName'}
                      error={errors.cardholderName}
                      message={errors?.cardholderName?.message}
                    />
                    <i.TextField
                      {...register('cardholderName')}
                      placeholder="John Doe"
                      variant="standard"
                      InputProps={i.cardStyle.InputProps}
                      sx={i.cardStyle.sx}
                    />
                  </div>

                  <div className="flex h-full flex-col justify-center">
                    <i.Controller
                      name="cardType"
                      control={control}
                      defaultValue="AMEX"
                      render={({ field }) => (
                        <i.Select
                          {...field}
                          label="Card type"
                          onChange={async e => {
                            field.onChange(e);
                            await trigger(['ccNumber', 'CVV']);
                          }}
                          displayEmpty
                          variant="standard"
                          IconComponent={() => null}
                          renderValue={selected => (
                            <img
                              src={
                                i.CardImg.find(c => c.card === selected)?.link
                              }
                              alt={selected}
                              style={{ height: 50, objectFit: 'contain' }}
                            />
                          )}
                          sx={i.cardStyle.sx}
                        >
                          {['AMEX', 'VISA', 'MASTERCARD'].map(card => (
                            <i.MenuItem
                              key={card}
                              value={card}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '4px 8px'
                              }}
                            >
                              <img
                                src={i.CardImg.find(c => c.card === card)?.link}
                                alt={card}
                                style={{ height: '30px', objectFit: 'contain' }}
                              />
                            </i.MenuItem>
                          ))}
                        </i.Select>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col gap-6 rounded-[20px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-700 p-6 text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="mb-3 h-[40px] rounded-sm bg-gray-600" />

                <div className="flex items-center justify-between gap-6">
                  <div className="flex w-[50%] flex-col gap-1">
                    <i.CustomInputLabel
                      label={'Expiry Date'}
                      error={errors.expireDate}
                      message={errors?.expireDate?.message}
                    />
                    <i.TextField
                      {...register('expireDate')}
                      value={expireDate || ''}
                      onChange={e =>
                        i.handleExpireDateChange({
                          e: e as React.ChangeEvent<HTMLInputElement>,
                          setValue
                        })
                      }
                      placeholder={'MM/YY'}
                      className="rounded-md bg-white px-3 py-1 text-center text-black outline-none"
                    />
                  </div>

                  <div className="flex w-2/5 flex-col gap-1">
                    <i.CustomInputLabel
                      label={'CVC'}
                      error={errors.CVV}
                      message={errors?.CVV?.message}
                    />

                    <i.TextField
                      {...register('CVV')}
                      placeholder="123"
                      className="rounded-md bg-white px-3 py-1 text-center text-black outline-none"
                    />
                  </div>
                </div>

                <div className="mt-auto select-none text-[10px] leading-tight text-gray-500">
                  This card is property of BEST BANK. If found, please return to
                  your nearest branch. Unauthorized use is prohibited.
                </div>
              </div>
            </div>
          </div>
          <i.FlipButton setSide={setSide} side={side} />
          <i.SubmitButton isDisabled={!isDirty || !isValid} />
        </form>
      </div>
    </div>
  );
};
