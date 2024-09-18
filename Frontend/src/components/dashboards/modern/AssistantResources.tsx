import React from 'react';
import rank1 from 'src/assets/images/rank/rank1.png';
import avt1 from 'src/assets/images/profile/user-1.jpg';
import { Box, Card, Grid, Typography } from '@mui/material';

interface Irank {
  id: string;
  rankImage: string;
  avatar: string;
  fullName: string;
  model: string;
  age: string;
  trainingtokens: string;
  exp: string;
}

const dataRank: Irank[] = [
  {
    id: '0',
    fullName: 'Nguyen Van A',
    rankImage: rank1,
    avatar: avt1,
    model: 'GTA-1',
    age: '25 ngày',
    trainingtokens: '1.234.57',
    exp: '123002 exp',
  },
];

const AssistantResources: React.FC = () => {
  return (
    <Grid container mt={2} spacing={2} justifyContent="center">
      {dataRank.map((rank) => (
        <Grid  key={rank.id}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              // maxWidth: 550, 
              width: '100%',
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                height: 240,
                mb: 2,
              }}
            >
              <img
                src={rank.rankImage}
                alt="Rank"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: 90, // Đã thay đổi từ 80 thành 90
                  height: 90, // Đã thay đổi từ 80 thành 90
                }}
              >
                <img
                  src={rank.avatar}
                  alt="Avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
            <Typography variant="h6" align="center" mb={1}>
              {rank.fullName}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" mb={1}>
              {rank.model}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" mb={1}>
              Tuổi: {rank.age}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" mb={1}>
              Token đào tạo: {rank.trainingtokens}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Kinh nghiệm: {rank.exp}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AssistantResources;
