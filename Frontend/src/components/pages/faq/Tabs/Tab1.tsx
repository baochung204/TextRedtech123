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
import { Str } from 'src/types/apps/str';
import DialogStragety from '../dialog/DialogStragety';

const Tab1 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>();
  const dataStr = useSelector((state: AppState) => state.str.data);
  const {content = [], totalElements } =
    useSelector((state: AppState) => state.str.data || {});
  const [datax, setDatax] = useState<Str[]>([])
  const [dataView, setDataView] = useState<Str>()
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchStr({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  useEffect(() => {
    if (datax !== dataStr.content) {
      setDatax(dataStr.content)
    }
  }, [dataStr, datax])


  console.log('data in redux', datax);

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (items: number) => {
    setOpen(true);
    // console.log(items);
    setDataView(datax[items])
  };

  return (
    <>
      <Grid container spacing={2}>
        {content?.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} key={items.campaignId}>
            <BlankCard>
              <CardContent
                onClick={() => handleClick(index)}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Stack direction={'row'} gap={2} alignItems="center">
                  <Avatar alt="Remy Sharp" src={items.badgeUrl} />
                  <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                      {items.campaignName}
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
                      {items.campaignId}
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
        count={totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
      <DialogStragety open={open} setOpen={setOpen} data={dataView} />
    </>
  );
};

export default Tab1;
