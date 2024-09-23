import { CardContent, Box, Stack, Avatar, Grid, Button, Typography, TablePagination } from '@mui/material';
import BlankCard from 'src/components/shared/BlankCard';
import DataTab2 from '../DataTable/TableTab2';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';



const Tab2 = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataTab2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  return (
    <>
      <Grid container spacing={2}>
        {paginatedData.map((items) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={items.id}>
              <BlankCard>
                <CardContent>
                  <Stack direction={'row'} gap={2} alignItems="center">
                    <Avatar alt="Remy Sharp" src={items.images} />
                    <Box>
                      <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                        {items.functions}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <CircleIcon sx={{ fontSize: '13px', color: `${items.isActive ? '#46AB5E' : '#C6C8CC'}` }} />
                        {items.functionsLevel}
                      </Typography>
                    </Box>
                    <Box ml="auto">
                      <Button variant="outlined" color="primary" size="small">
                        {items.functionsID}
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          );
        })}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[15,18,21]}
        component="div"
        count={DataTab2.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default Tab2;
