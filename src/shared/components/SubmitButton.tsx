import { Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export const SubmitButton = ({ isDisabled }: { isDisabled: boolean }) => (
  <div className="mt-auto w-full">
    <Button
      fullWidth
      type="submit"
      variant="contained"
      startIcon={<PaymentIcon />}
      disabled={isDisabled}
      sx={{
        bgcolor: '#2563eb',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '12px',
        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.39)',
        textTransform: 'none',
        py: 1.5,
        '&:hover': {
          bgcolor: '#1e40af',
          boxShadow: '0 6px 20px rgba(30, 64, 175, 0.5)'
        },
        '& .MuiButton-startIcon': {
          marginRight: 1
        },
        '&.Mui-disabled': {
          bgcolor: '#374151',
          color: '#9ca3af',
          boxShadow: 'inset 0 0 0 1px #4b5563'
        }
      }}
    >
      Pay
    </Button>
  </div>
);
