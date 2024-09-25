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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const paginatedData = BlogTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * tagColors.length);
    return tagColors[randomIndex];
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <BlankCard>
        <CustomTable columns={FilmsData} dataSource={BlogTable} />
      </BlankCard>
    </>
  );
};

export default TableBlog;
