export const sx = {
  height: '24px',
  minHeight: 0,
  maxHeight: '100%',
  padding: 0,
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    height: '24px'
  },
  '& svg': {
    display: 'none'
  }
};
export const InputProps = {
  sx: {
    height: '100%',
    padding: 0,
    color: 'white',
    fontWeight: 'bold',
    '&::placeholder': {
      color: 'white',
      fontWeight: 'bold'
    }
  }
};
