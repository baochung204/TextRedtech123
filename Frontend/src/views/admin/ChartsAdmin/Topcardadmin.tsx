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
  totalColumn: number; // số cột muốn hiển thị
}

const BoxStyled = styled(Box)(() => ({
  padding: '24px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%', // Chiếm toàn bộ chiều cao
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const Topcardadmin = ({ dataSource, totalColumn }: TopCardProps) => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (totalColumn > 0) {
      setTotal(12 / totalColumn);
    }
  }, [totalColumn]);

  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      {dataSource.map((items, index) => (
        <Grid item lg={total !== null ? total : 0} sm={6} xs={12} key={index}>
          <BoxStyled
            sx={{
              backgroundColor: items.bgColor,
              color: items.color,
            }}
          >
            <Grid container spacing={totalColumn >= 5 ? 6 : 1.5} sx={{ height: '100%' }}>
              <Grid
                item
                xs={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // Center the icon
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
      ))}
    </Grid>
  );
};

export default Topcardadmin;
