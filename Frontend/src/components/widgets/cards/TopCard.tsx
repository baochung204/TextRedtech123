import { Box, Grid, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';

export interface StyleProps {
  bgColor: string;
  title: string | string[]; // Accepts a single string or an array of strings
  total: string | JSX.Element | number; // Accepts single or multiple values
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

  // Helper function to render single or multiple items
  const renderMultipleItems = (item: string | JSX.Element | (string | JSX.Element)[]) => {
    if (Array.isArray(item)) {
      return item.map((subItem, index) => (
        <Typography variant={typeof subItem === 'string' ? 'h6' : 'body1'} key={index}>
          {subItem}
        </Typography>
      ));
    }
    return <Typography variant={typeof item === 'string' ? 'h6' : 'body1'}>{item}</Typography>;
  };

  return (
    <Grid container spacing={2}>
      {dataSource.map((items, index) => (
        <Grid item lg={total !== null ? total : 0} sm={6} xs={12} key={index}>
          <BoxStyled
            sx={{
              backgroundColor: items.bgColor,
              color: 'inherit',
              px:
                totalColumn <= 4 ? '24px' : totalColumn === 5 ? '10px' : totalColumn === 6 ? 1 : 0,
            }}
          >
            <Grid
              container
              spacing={totalColumn <= 4 ? 0 : totalColumn === 5 ? 2 : totalColumn === 6 ? 2 : 0}
            >
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
                <Grid container spacing={0.4} sx={{ whiteSpace: 'nowrap' }}>
                  <Grid item xs={12}>
                    {Array.isArray(items.title) ? (
                      items.title.map((titleItem, idx) => (
                        <Typography variant="subtitle1" key={idx}>
                          {titleItem}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="subtitle1">{items.title}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {renderMultipleItems(items.total)}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </BoxStyled>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCard;
