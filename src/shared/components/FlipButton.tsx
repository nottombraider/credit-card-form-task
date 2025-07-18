import { Button } from '@mui/material';

type Props = {
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
};
export const FlipButton = (props: Props) => {
  const { side, setSide } = props;
  const handleSide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSide((prev: boolean) => !prev);
  };

  return (
    <div className="flex w-full items-center justify-center py-[10px]">
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleSide}
        sx={{
          borderColor: '#555',
          color: '#ccc',
          '&:hover': {
            borderColor: '#999',
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        {side ? 'Show frontSide' : 'Show backSide'}
      </Button>
    </div>
  );
};
