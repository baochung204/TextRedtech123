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
import BlankCard from 'src/components/shared/BlankCard';
import { fetchStr } from 'src/store/apps/resources/str/strSlice';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { Str } from 'src/types/apps/str';
import DialogStragety from '../dialog/DialogStragety';

const Tab1 = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const dataStr = useSelector((state: AppState) => state.str.data);
  const { content = [], totalElements } = useSelector((state: AppState) => state.str.data || {});
  const [datax, setDatax] = useState<Str[]>([])
  const [dataView, setDataView] = useState<Str | undefined>()

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    // console.log('Số hàng được chọn:', event.target.value);
    setPage(1)
    setRowsPerPage(selectedValue);
  };
  const handlePageChange = (_event: unknown, newPage: number) => {

    setPage(newPage + 1);
  };
  useEffect(() => {
   
    dispatch(fetchStr({ page, size: rowsPerPage }));

  }, [dispatch, page, rowsPerPage]);

  useEffect(() => {
    if (datax !== dataStr.content) {
      setDatax(dataStr.content);
    }
  }, [dataStr, datax]);

  // console.log('data in redux', datax);

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (items: number) => {
    setOpen(true);
    // console.log(items);
    setDataView(datax[items]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {content.map((items, index) => (
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
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={totalElements}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        labelRowsPerPage="Số hàng trên mỗi trang"
        labelDisplayedRows={({ page }) =>
          // `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`
          `Trang ${page + 1}`
        }
      />
      <DialogStragety open={open} setOpen={setOpen} data={dataView} />
    </>
  );
};

export default Tab1;
