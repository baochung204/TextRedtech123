import { Favorite, Visibility } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import BlogTable from '../data/datablog';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  { head: 'ID' },
  { head: 'Ngày tạo' },
  { head: 'Ảnh' },
  { head: 'Tiêu đề' },
  { head: 'Tác giả' },
  { head: 'Tags' },
  { head: 'Đường dẫn url' },
  { head: 'Mô tả' },
  { head: 'Nội dung' },
  { head: 'Giá Point' },
  { head: 'Trạng thái' },
  { head: 'Lượt xem' },
  { head: 'Lượt thích' },
  { head: 'Thao tác' },
];

const TableBlog = () => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  // const handleChangePage = (newPage: number) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  // };

  const paginatedData = BlogTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Placeholder functions for button actions
  const handleView = (id: string) => {
    console.log('View blog with ID:', id);
  };

  const handleEdit = (id: string) => {
    console.log('Edit blog with ID:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete blog with ID:', id);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {HeadTable.map((item, index) => (
                <TableCell key={index} sx={{ whiteSpace: 'nowrap' }}>
                  <Typography variant="h6">{item.head}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="subtitle2">{item.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {item.createdAt.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      src={item.avt}
                      variant="rounded"
                      alt={item.avt}
                      sx={{ width: 48, height: 48 }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.author}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.tags}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="subtitle2">{item.url}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.description}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.content}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.pricePoint}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.status}</Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Visibility color="action" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">{item.view}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Favorite color="error" />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">{item.like}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: 'green', color: 'white' }}
                          onClick={() => handleView(item.id)}
                        >
                          Xem
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEdit(item.id)}
                        >
                          Sửa
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: 'red', color: 'white' }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Xóa
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableBlog;
