import { Box, Grid, Typography, styled } from '@mui/material';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8

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
<<<<<<< HEAD
    padding: '30px',
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
        if (totalColumn) {
            const parsedValue = parseInt(totalColumn, 10);
            if (!isNaN(parsedValue) && parsedValue > 0) {
                setTotal(12 / parsedValue);
            } else {
                setTotal(null); // Or set to a default value if needed
            }
        } else {
            setTotal(null); // Or set to a default value if needed
        }
    }, [totalColumn]);

    console.log(total);

    return (
        <Grid container spacing={total ?? 2}>
            {dataSource.map((item, index) => (
                <Grid item lg={3} sm={6} xs={12} key={index}>
                    <BoxStyled
                        sx={{
                            backgroundColor: item.bgColor,
                            color: item.color
                        }}
                    >
                        <Grid container>
                            <Grid
                                item
                                xs={3}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {item.icons}
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h4">{item.title}</Typography>
                                <Typography variant="h5">{item.total}</Typography>
                            </Grid>
                        </Grid>
                    </BoxStyled>
                </Grid>
            ))}
        </Grid>
    );
};

=======
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

>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
export default TopCard;
