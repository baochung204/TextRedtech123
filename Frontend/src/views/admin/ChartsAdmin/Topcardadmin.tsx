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
  itemsPerColumn: number; // số lượng item tối đa trong mỗi cột
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
    transform: 'scale(1.05)',
  },
}));

const Topcardadmin = ({ dataSource, totalColumn, itemsPerColumn }: TopCardProps) => {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    if (totalColumn > 0) {
      setTotal(12 / totalColumn); // Tính toán chiều rộng của mỗi cột dựa trên tổng số cột
    }
  }, [totalColumn]);

  // Helper function để chia mảng dataSource thành các nhóm với số phần tử tối đa trong mỗi cột
  const chunkArray = (array: StyleProps[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedData = chunkArray(dataSource, itemsPerColumn); // Chia dữ liệu thành các nhóm

  return (
    <Grid container spacing={2}>
      {chunkedData.map((group, groupIndex) => (
        <Grid item container spacing={2} key={groupIndex}>
          {group.map((items, index) => (
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
                      justifyContent: 'center',
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
      ))}
    </Grid>
  );
};

export default Topcardadmin;
