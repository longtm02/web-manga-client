import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const PagingCarousel = (i: number) => {
  return (
    <Button key={i}>
      <FiberManualRecordIcon />
    </Button>
  );
};

export default PagingCarousel;
