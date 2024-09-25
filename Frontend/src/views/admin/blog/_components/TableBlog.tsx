import { Avatar, Chip, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlogTable from '../data/datablog';
import { Favorite, Visibility } from '@mui/icons-material';
import { IconEdit, IconEye } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import BlankCard from 'src/components/shared/BlankCard';

const tagColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#DAF7A6', '#C70039'];
const FilmsData: any = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Ngày tạo', dataIndex: 'createdAt', render: (value: any) => value.toLocaleDateString() },
  { title: 'Ảnh', dataIndex: 'avt', render: (value: any) => <Avatar src={value} /> },
  { title: 'Tác giả', dataIndex: 'author' },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    render: (value: any) => <Typography variant="subtitle2">{value}</Typography>,
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    render: (value: any) => {
      return value.split(',').map((tag: any, tagIndex: any) => (
        <Chip
          key={tagIndex}
          label={tag}
          sx={{
            backgroundColor: tagColors[tagIndex % tagColors.length],
            color: '#fff',
            margin: '2px',
          }}
        />
      ));
    },
  },
  { title: 'Đường dẫn url', dataIndex: 'url' },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    render: (value: any) => <Typography variant="subtitle2">{value}</Typography>,
  },
  { title: 'Nội dung', dataIndex: 'content' },
  {
    title: 'Giá Point',
    dataIndex: 'pricePoint',
    render: (value: any) => (
      <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        {value} <img src={logoPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
      </Typography>
    ),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (value: any) => (
      <Typography
        variant="subtitle2"
        style={{
          color: value === 'Đã đăng' ? '#00bf8f' : value === 'Đã ẩn' ? '#ff3d71' : '#ffbd2e',
        }}
      >
        {value}
      </Typography>
    ),
  },
  {
    title: 'Lượt xem',
    dataIndex: 'view',
    render: (value: any) => (
      <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        {value} <Visibility color="action" />
      </Typography>
    ),
  },
  {
    title: 'Lượt thích',
    dataIndex: 'like',
    render: (value: any) => (
      <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        {value}
        <Favorite color="error" />
      </Typography>
    ),
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    render: (value: any) => (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
        </IconButton>
        <IconButton>
          <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
];

const TableBlog = () => {
  const [key, setKey] = useState<string | null>(null);
  key && console.log(key);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const paginatedData = BlogTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  // const getColorForTag = (index: number) => {
  //   return tagColors[index % tagColors.length]; // Cycle through the colors
  // };
  // const handleChangePage = (newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  return (
    // <TableContainer>
    //   <Table>
    //     <TableHead>
    //       <TableRow>
    //         {HeadTable.map((item, index) => (
    //           <TableCell key={index} sx={{ whiteSpace: 'nowrap' }}>
    //             <Typography variant="h6">{item.head}</Typography>
    //           </TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {paginatedData.map((item, index) => {
    //         return (
    //           <TableRow key={index}>
    //             <TableCell>
    //               <Typography variant="subtitle2">{item.id}</Typography>
    //             </TableCell>
    //             <TableCell>
    //               <Typography variant="subtitle2">{item.createdAt.toLocaleDateString()}</Typography>
    //             </TableCell>
    //             <TableCell>
    //               <Avatar
    //                 src={item.avt}
    //                 variant="rounded"
    //                 alt={item.avt}
    //                 sx={{ width: 48, height: 48 }}
    //               />
    //             </TableCell>
    //             <TableCell sx={{ minWidth: 200 }}>
    //               <Typography variant="subtitle2">{item.author}</Typography>
    //             </TableCell>
    //             <TableCell sx={{ minWidth: 200 }}>
    //               <Typography
    //                 variant="subtitle2"
    //                 sx={{
    //                   overflow: 'hidden',
    //                   textOverflow: 'ellipsis',
    //                   whiteSpace: 'normal',
    //                   wordWrap: 'break-word',
    //                 }}
    //               >
    //                 {item.title}
    //               </Typography>
    //             </TableCell>
    //             <TableCell>
    //               {item.tags.split(',').map((tag, tagIndex) => (
    //                 <Chip
    //                   key={tagIndex}
    //                   label={tag}
    //                   sx={{
    //                     backgroundColor: getColorForTag(tagIndex),
    //                     color: '#fff',
    //                     margin: '2px',
    //                   }}
    //                 />
    //               ))}
    //             </TableCell>
    //             <TableCell sx={{ minWidth: 150 }}>
    //               <Typography
    //                 variant="subtitle2"
    //                 sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
    //               >
    //                 {item.url}
    //               </Typography>
    //             </TableCell>
    //             <TableCell sx={{ minWidth: 200 }}>
    //               <Typography
    //                 variant="subtitle2"
    //                 sx={{
    //                   overflow: 'hidden',
    //                   textOverflow: 'ellipsis',
    //                   whiteSpace: 'normal',
    //                   wordWrap: 'break-word',
    //                 }}
    //               >
    //                 {item.description}
    //               </Typography>
    //             </TableCell>
    //             <TableCell sx={{ minWidth: 250 }}>
    //               <Typography
    //                 variant="subtitle2"
    //                 sx={{
    //                   overflow: 'hidden',
    //                   textOverflow: 'ellipsis',
    //                   whiteSpace: 'normal',
    //                   wordWrap: 'break-word',
    //                 }}
    //               >
    //                 {item.content}
    //               </Typography>
    //             </TableCell>
    //             <TableCell>
    //               <Typography variant="subtitle2">{item.pricePoint}</Typography>
    //             </TableCell>
    //             <TableCell>
    //               <Typography variant="subtitle2">{item.status}</Typography>
    //             </TableCell>
    //             <TableCell>
    //               <Grid container alignItems="center" spacing={1}>
    //                 <Grid item>
    //                   <Typography variant="subtitle2">{item.view}</Typography>
    //                 </Grid>
    //                 <Grid item>
    //                   <Visibility color="action" />
    //                 </Grid>
    //               </Grid>
    //             </TableCell>
    //             <TableCell>
    //               <Grid container alignItems="center" spacing={1}>
    //                 <Grid item>
    //                   <Typography variant="subtitle2">{item.like}</Typography>
    //                 </Grid>
    //                 <Grid item>
    //                   <Favorite color="error" />
    //                 </Grid>
    //               </Grid>
    //             </TableCell>
    //             <TableCell sx={{ whiteSpace: 'nowrap' }}>
    //               <IconButton onClick={() => setKey(item.id)}>
    //                 <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
    //               </IconButton>
    //               <IconButton>
    //                 <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
    //               </IconButton>
    //               <IconButton>
    //                 <IconTrash stroke={2} style={{ color: '#FA896B' }} />
    //               </IconButton>
    //             </TableCell>
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    //   <TablePagination
    //     rowsPerPageOptions={[5, 10, 25]}
    //     component="div"
    //     count={BlogTable.length}
    //     rowsPerPage={rowsPerPage}
    //     page={page}
    //     onPageChange={(_event, newPage) => handleChangePage(newPage)}
    //     onRowsPerPageChange={handleChangeRowsPerPage}
    //     labelRowsPerPage="Số hàng trên mỗi trang"
    //   />
    // </TableContainer>
    <>
      <BlankCard>
        <CustomTable columns={FilmsData} dataSource={BlogTable} />
      </BlankCard>
    </>
  );
};

export default TableBlog;
