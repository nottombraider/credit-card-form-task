export const isExpiryDateValid = (value: string) => {
  if (!value) return false;
  const [monthStr, yearStr] = value.split('/');

  if (!monthStr || !yearStr) return false;
  const month = Number(monthStr);
  const year = Number('20' + yearStr);

  if (month < 1 || month > 12) return false;
  const now = new Date();

  const expiry = new Date(year, month, 0, 23, 59, 59, 999);

  return expiry >= now;
};
