import { Avatar, Box, Button, CardContent, Grid, Stack, TablePagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlankCard from 'src/components/shared/BlankCard';
import { fetchFunction } from 'src/store/apps/resources/function/functionSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DataTab2 from '../DataTable/TableTab2';
import DialogFunction from '../dialog/DialogFunction';

interface PropsData {
  id: string;
  name: string;
  level: string;
  badgeUrl: string;
  nhom: string;
  tomtat: string
}

const Tab2 = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>()
  const dataFunction = useSelector((state: AppState) => state.function.data)
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const paginatedData = DataTab2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  useEffect(() => {
    dispatch(fetchFunction())
  }, [dispatch])


  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<PropsData[]>([{
    id: '',
    name: '',
    level: '',
    badgeUrl: '',
    nhom: '',
    tomtat: ''
  }])

  const handleClick = (items: PropsData) => {
    setOpen(true);
    setData([{
      id: items.id,
      name: items.name,
      level: items.level,
      badgeUrl: items.badgeUrl,
      nhom: items.nhom,
      tomtat: items.tomtat
    }])

  }

  return (
    <>
      <Grid container spacing={2}>
        {dataFunction.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlankCard>
              <CardContent
                onClick={() => handleClick(items)}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Stack direction={'row'} gap={2} alignItems="center">
                  <Avatar alt="Remy Sharp" src={items.badgeUrl} />
                  <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                      {items.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      {items.level}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Button variant="outlined" color="primary" size="small">
                      {items.id}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[15, 18, 21]}
        component="div"
        count={DataTab2.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
      <DialogFunction open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default Tab2;
