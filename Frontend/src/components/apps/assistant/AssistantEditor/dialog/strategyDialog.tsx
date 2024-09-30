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
    rankName: 'Chiến lược kinh doanh cấp 1',
    rankImg: rank1,
  },
  {
    rankName: 'Chiến lược kinh doanh cấp 1',
    rankImg: rank2,
  },
  {
    rankName: 'Chiến lược kinh doanh cấp 1',
    rankImg: rank3,
  },
];

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Strategy: React.FC<PropsDialog> = ({ open, setOpen }) => {
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
          <img src={selectedValue.rankImg} alt="rank" width={70} />
          <Typography variant="h5" ml={2} minWidth={'250px'}>  {/* Thêm margin bên trái cho text */}
            {selectedValue.rankName}
          </Typography>
        </Box>

      </Box>

      <Dialog onClose={() => handleClose(selectedValue)} open={open}>
        <DialogTitle
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',width:'100%' }}
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
            <Box key={rank.rankName}
              sx={{
                display: 'inline-block', // Giúp mỗi Box vừa với nội dung bên trong
                width: 'auto', // Chiều rộng tự điều chỉnh theo nội dung
                maxWidth: '100%', // Có thể giới hạn chiều rộng tối đa nếu cần
                cursor: 'pointer',
              }}
              onClick={() => handleClose(rank)}
            >
              <CardContent
                sx={{
                  p: '0px',
                  "&:last-child": {
                    pb: 1, // Giảm padding-bottom cho phần tử cuối
                  },
                }}
              >
                <Box
                  textAlign="center"
                  alignItems="center"
                  justifyContent="left"
                  display="flex"
                  pl={3}
                >
                  <img src={rank.rankImg} alt="star" width={50} />
                  <Typography variant="h5" ml={2}>{rank.rankName}</Typography>
                </Box>
              </CardContent>
            </Box>
          ))}
        </List>
      </Dialog>

    </Box >
  );
};

export default Strategy;
