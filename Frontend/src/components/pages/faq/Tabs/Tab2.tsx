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
import { useEffect, useState } from 'react';
import BlankCard from 'src/components/shared/BlankCard';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFunction } from 'src/store/apps/resources/function/functionSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogFunction from '../dialog/DialogFunction';
import { Functions, Result } from 'src/types/apps/function';

const Tab2 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Functions[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const { content = [], totalElements = 0 }: Result = useSelector(
    (state: AppState) => state.function.data || {}
  );

  useEffect(() => {
    dispatch(fetchFunction({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);


  useEffect(() => {
    if (page > 0 && page * rowsPerPage >= totalElements) {
      setPage(Math.max(0, Math.ceil(totalElements / rowsPerPage) - 1));
    }
  }, [totalElements, rowsPerPage, page]);


  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize);
    setPage(0);
  };


  const handleClick = (item: Functions) => {
    setOpen(true);
    setData([item]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {content.map((item: Functions) => (
          <Grid item xs={12} sm={6} md={4} key={item.functionId}>
            <BlankCard>
              <CardContent
                onClick={() => handleClick(item)}
                sx={{ cursor: 'pointer' }}
              >
                <Stack direction="row" gap={2} alignItems="center">
                  <Avatar
                    alt={item.functionName}
                    src={item.badgeUrl || '/default-avatar.png'} // Fallback image
                  />
                  <Box>
                    <Typography variant="h6" noWrap>
                      {item.functionName}
                    </Typography>
                    <Typography variant="caption">{item.level}</Typography>
                  </Box>
                  <Box ml="auto">
                    <Button variant="outlined" color="primary" size="small">
                      {item.functionId}
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
        count={totalElements} // Total number of elements
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
