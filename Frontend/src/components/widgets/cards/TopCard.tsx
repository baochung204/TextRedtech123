import { Box, Grid, Typography, styled } from '@mui/material';

import { useEffect, useState } from 'react';

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

interface TopCardProps {
  dataSource: StyleProps[];
  totalColumn: number;
}

const BoxStyled = styled(Box)(() => ({
  padding: '24px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const TopCard = ({ dataSource, totalColumn }: TopCardProps) => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (totalColumn !== null) {
      setTotal(12 / totalColumn);
    }
  }, [totalColumn]);

  return (
    <Grid container spacing={2}>
      {dataSource.map((items, index) => {
        return (
          <Grid item lg={total !== null ? total : 0} sm={6} xs={12} key={index}>
            <BoxStyled
              sx={{
                backgroundColor: items.bgColor,
                color: items.color,
              }}
            >
              <Grid container spacing={totalColumn >= 5 ? 6 : 1.5}>
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
                  <Typography variant="h6">{items.title}</Typography>
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
