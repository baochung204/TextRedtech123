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
import { useDispatch, useSelector } from 'react-redux';
import { fetchFunction } from 'src/store/apps/resources/function/functionSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogFunction from '../dialog/DialogFunction';
import { Functions } from 'src/types/apps/function';

const Tab2 = () => {
  const [page, setPage] = useState(0); // Current page number
  const [rowsPerPage, setRowsPerPage] = useState(15); // Rows per page

  const dispatch = useDispatch<AppDispatch>();

  // Fetching content and pagination details from Redux state
  const { content = [], totalElements, pageNo, pageSize } =
    useSelector((state: AppState) => state.function.data || {});

  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Functions[]>([
    {
      functionId: '',
      functionName: '',
      badgeUrl: '',
      level: '',
      summary: '',
      groupFunctionName: '',
    },
  ]);

  // Fetch data on page or rowsPerPage change
  useEffect(() => {
    dispatch(fetchFunction({ page, size: rowsPerPage })); // Fetch new data on changes
  }, [dispatch, page, rowsPerPage]);

  // Handle page change
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage); // Update page number
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize); // Update rows per page
    setPage(0); // Reset to the first page
  };

  const handleClick = (items: Functions) => {
    setOpen(true);
    setData([items]); // Set the selected data
  };

  return (
    <>
      <Grid container spacing={2}>
        {content.map((items: Functions) => (
          <Grid item xs={12} sm={6} md={4} key={items.functionId}>
            <CardContent
              onClick={() => handleClick(items)}
              sx={{ cursor: 'pointer' }}
            >
              <Stack direction="row" gap={2} alignItems="center">
                <Avatar alt={items.functionName} src={items.badgeUrl} />
                <Box>
                  <Typography variant="h6" noWrap>
                    {items.functionName}
                  </Typography>
                  <Typography variant="caption">{items.level}</Typography>
                </Box>
                <Box ml="auto">
                  <Button variant="outlined" color="primary" size="small">
                    {items.functionId}
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Grid>
        ))}
      </Grid>

      <TablePagination
        rowsPerPageOptions={[15, 18, 21]} // Options for rows per page
        component="div"
        count={totalElements} // Total number of elements from the API
        rowsPerPage={rowsPerPage} // Current rows per page
        page={page} // Current page
        onPageChange={handleChangePage} // Handle page change
        onRowsPerPageChange={handleChangeRowsPerPage} // Handle rows per page change
        labelRowsPerPage="Số hàng trên mỗi trang"
      />

      <DialogFunction open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default Tab2;
