import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

interface TopCardProps {
  dataSource: StyleProps[];
}

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const TopCard = ({ dataSource }: TopCardProps) => {
  return (
    <Grid container spacing={3}>
      {dataSource.map((items, index) => {
        return (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <BoxStyled
              sx={{
                backgroundColor: items.bgColor,
                color: items.color,
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {items.icons}
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h4">{items.title}</Typography>
                  <Typography variant="h5">{items.total}</Typography>
                </Grid>
              </Grid>
            </BoxStyled>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TopCard;
