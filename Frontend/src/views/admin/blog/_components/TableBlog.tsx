import { Favorite, Visibility } from '@mui/icons-material';
import {
  Avatar,
  Chip,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import BlogTable from '../data/datablog';

interface PropsHeadTable {
  head: string;
}
const tagColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#DAF7A6', '#C70039'];
const HeadTable: PropsHeadTable[] = [
  { head: 'ID' },
  { head: 'Ngày tạo' },
  { head: 'Ảnh' },
  { head: 'Tác giả' },
  { head: 'Tiêu đề' },
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
  const [key, setKey] = useState<string | null>(null);
  key && console.log(key);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const paginatedData = BlogTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const getColorForTag = (index: number) => {
    return tagColors[index % tagColors.length]; // Cycle through the colors
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
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
                  <Typography variant="subtitle2">{item.createdAt.toLocaleDateString()}</Typography>
                </TableCell>
                <TableCell>
                  <Avatar src={item.avt} variant="rounded" alt={item.avt} sx={{ width: 48, height: 48 }} />
                </TableCell>
                <TableCell sx={{ minWidth: 200 }}>
                  <Typography variant="subtitle2">{item.author}</Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 200 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', wordWrap: 'break-word' }}
                  >
                    {item.title}
                  </Typography>
                </TableCell>
                <TableCell>
                {item.tags.split(',').map((tag, tagIndex) => (
                  <Chip
                    key={tagIndex}
                    label={tag}
                    sx={{ backgroundColor: getColorForTag(tagIndex), color: '#fff', margin: '2px' }}
                  />
                ))}
              </TableCell>
                <TableCell sx={{ minWidth: 150 }}>
                  <Typography variant="subtitle2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.url}
                  </Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 200 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', wordWrap: 'break-word' }}
                  >
                    {item.description}
                  </Typography>
                </TableCell>
                <TableCell sx={{ minWidth: 250 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal', wordWrap: 'break-word' }}
                  >
                    {item.content}
                  </Typography>
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
                      <Typography variant="subtitle2">{item.view}</Typography>
                    </Grid>
                    <Grid item>
                      <Visibility color="action" />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">{item.like}</Typography>
                    </Grid>
                    <Grid item>
                      <Favorite color="error" />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton onClick={() => setKey(item.id)}>
                    <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
                  </IconButton>
                  <IconButton>
                    <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
                  </IconButton>
                  <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={BlogTable.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) => handleChangePage(newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Số hàng trên mỗi trang"
            />
    </TableContainer>
    
  );
};

export default TableBlog;
