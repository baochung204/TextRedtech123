import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  CardContent,
  Dialog,
  DialogTitle,
  List,
  Typography
} from '@mui/material';
import { useState } from 'react';
import rank1 from 'src/assets/huy hiu/0.png';
import rank2 from 'src/assets/huy hiu/1.png';
import rank3 from 'src/assets/huy hiu/2.png';

interface Ranks {
  rankName: string;
  rankImg: string;
}

const ranks: Ranks[] = [
  {
    rankName: 'Rank 1',
    rankImg: rank1,
  },
  {
    rankName: 'Rank 2',
    rankImg: rank2,
  },
  {
    rankName: 'Rank 3',
    rankImg: rank3,
  },
];

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Strategy: React.FC<PropsDialog> = ({open, setOpen}) => {
  // const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Ranks>(ranks[1]);



  const handleClose = (value: Ranks) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box>


      <Box p={0} maxWidth={45}>
        
          <Box 
            display="flex" 
            alignItems="center"  // Căn chỉnh ảnh và text theo chiều dọc
            justifyContent="left"
            mb={1}  // Căn giữa theo chiều ngang
          >
            <img src={selectedValue.rankImg} alt="rank" width={88} />
            <Typography variant="h5" ml={2} minWidth={'130px'}>  {/* Thêm margin bên trái cho text */}
              {selectedValue.rankName}
            </Typography>
          </Box>
        
      </Box>

      <Dialog onClose={() => handleClose(selectedValue)} open={open}>
        <DialogTitle
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          Chọn chiến lược
          <CloseIcon onClick={() => setOpen(false)} style={{ cursor: 'pointer', opacity: 0.7 }} />
        </DialogTitle>

        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            pt: 0,
            overflow: 'hidden',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {ranks.map((rank) => (
            <Box key={rank.rankName} onClick={() => handleClose(rank)}>
              <CardContent sx={{ p: '30px', cursor: 'pointer' }}>
                <Box textAlign="center">
                  <img src={rank.rankImg} alt="star" width={100}  />
                  <Typography variant="h5">{rank.rankName}</Typography>
                </Box>
              </CardContent>
            </Box>
          ))}
        </List>
      </Dialog>
    </Box>
  );
};

export default Strategy;
