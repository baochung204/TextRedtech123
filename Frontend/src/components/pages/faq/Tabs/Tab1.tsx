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

const Tab1 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>();
  const dataStr = useSelector((state: AppState) => state.str.data);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchStr());
  }, [dispatch]);
  return (
    <>
      <Grid container spacing={2}>
        {dataStr.map((items) => (
          <Grid item xs={12} sm={6} md={4} key={items.productId}>
            <BlankCard>
              <CardContent>
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
    </>
  );
};

export default Tab1;
