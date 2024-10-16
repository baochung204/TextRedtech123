import {
  Avatar,
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlankCard from 'src/components/shared/BlankCard';
import { fetchStr } from 'src/store/apps/resources/str/strSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DataTab1 from '../DataTable/TableTab1';
import DialogStragety from '../dialog/DialogStragety';
import { fetchStrData } from 'src/store/user-resources/userSlice';

interface PropsData {
  content: string;
  badgeUrl: string;
  productId: string;
  level: string;
  tomtat: string;
  nhom: string;
}

const Tab1 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>();
  const dataStr = useSelector((state: AppState) => state.str.data);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const users = useSelector((state: AppState) => state.test.dataa);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {

    dispatch(fetchStr());
    dispatch(fetchStrData({ page, size: rowsPerPage }));
  }, [
    dispatch,
    page,
    rowsPerPage
  ]);

  console.log('Users from Redux:', users);





  // const fetchData = async (page = 0, size = 25) => {
  //   try {
  //     // Get accessToken from localStorage
  //     const accessToken = localStorage.getItem('accessToken');

  //     if (!accessToken) {
  //       console.error('No access token found');
  //       return;
  //     }

  //     // Call the API with Authorization header
  //     const response = await axios.get(`https://redai02-4af4309fd76b.herokuapp.com/user-resources/files`, {
  //       params: { file: page, size: size },
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}` // Include the access token
  //       }
  //     });

  //     console.log('Response:', response.data);

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   console.log('accessToken:', accessToken);
  //   fetchData(); // Call the function to fetch data
  // }, []);

  // const { dataa, loading, error } = useSelector((state: AppState) => state.test);

  // console.log('dataa: ', dataa);


  // useEffect(() => {
  //   console.log('Users from Redux:', users);
  // }, [users]);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<PropsData[]>([
    {
      content: '',
      badgeUrl: '',
      productId: '',
      level: '',
      tomtat: '',
      nhom: '',
    },
  ]);

  const handleClick = (items: PropsData) => {
    setOpen(true);
    setData([
      {
        content: items.content,
        badgeUrl: items.badgeUrl,
        productId: items.productId,
        level: items.level,
        tomtat: items.tomtat,
        nhom: items.nhom,
      },
    ]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {dataStr.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlankCard>
              <CardContent
                onClick={() => handleClick(items)}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Stack direction={'row'} gap={2} alignItems="center">
                  <Avatar alt="Remy Sharp" src={items.badgeUrl} />
                  <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                      {items.content}
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
                      {items.productId}
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
        count={DataTab1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
      <DialogStragety open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default Tab1;
