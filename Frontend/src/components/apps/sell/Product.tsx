// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import NorthIcon from '@mui/icons-material/North';
// import SouthIcon from '@mui/icons-material/South';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import * as React from 'react';
// // const ITEM_HEIGHT = 48;
// // const ITEM_PADDING_TOP = 8;
// // const MenuProps = {
// //   PaperProps: {
// //     style: {
// //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
// //       width: 250,
// //     },
// //   },
// // };

// // const shopProductNames = ['Id', 'Ảnh', 'Tên sản phẩm', 'Tags', 'Giá niêm yết', 'Giá khuyến mãi'];

// import {
//   Avatar,
//   Box,
//   Checkbox,
//   Chip,
//   Grid,
//   IconButton,
//   InputAdornment,
//   ListItemText,
//   MenuItem,
//   Select,
//   TextField,
//   Toolbar,
//   Tooltip,
//   Typography,
// } from '@mui/material';
// import { alpha } from '@mui/material/styles';

// import PageContainer from 'src/components/container/PageContainer';

// import { IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';

// import BlankCard from '../../../components/shared/BlankCard';

// // import { useDispatch, useSelector } from 'react-redux';
// import CustomTable from 'src/components/ComponentTables/CustomTable';
// import { AppState, useDispatch, useSelector } from 'src/store/Store';
// import { fetchProduct } from '../../../store/apps/products/productsSlice';
// import AddDialog from './layout/addDialog';

// // function TablePaginationActions(props: TablePaginationActionsProps) {
// //   const theme = useTheme();
// //   const { count, page, rowsPerPage, onPageChange } = props;

// //   const handleFirstPageButtonClick = (event: any) => {
// //     onPageChange(event, 0);
// //   };

// //   const handleBackButtonClick = (event: any) => {
// //     onPageChange(event, page - 1);
// //   };

// //   const handleNextButtonClick = (event: any) => {
// //     onPageChange(event, page + 1);
// //   };

// //   const handleLastPageButtonClick = (event: any) => {
// //     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
// //   };

// //   return (
// //     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
// //       <IconButton
// //         onClick={handleFirstPageButtonClick}
// //         disabled={page === 0}
// //         aria-label="first page"
// //       >
// //         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
// //       </IconButton>
// //       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
// //         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
// //       </IconButton>
// //       <IconButton
// //         onClick={handleNextButtonClick}
// //         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
// //         aria-label="next page"
// //       >
// //         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
// //       </IconButton>
// //       <IconButton
// //         onClick={handleLastPageButtonClick}
// //         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
// //         aria-label="last page"
// //       >
// //         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
// //       </IconButton>
// //     </Box>
// //   );
// // }

// // const FilmsData: any = [
// //   { id: 1, title: 'ID', dataIndex: 'shopProductId' },
// //   {
// //     id: 2,
// //     title: 'Ảnh',
// //     dataIndex: 'shopProductImageUrl',
// //     render: (row: any) => <Avatar src={row} alt={row} sx={{ width: 30, height: 30 }} />,
// //   },
// //   { id: 3, title: '	Tên sản phẩm', dataIndex: 'shopProductName' },
// //   {
// //     id: 4,
// //     title: 'Tags',
// //     dataIndex: 'productTag',
// //     render: (row: any) => (
// //       <Box sx={{ display: 'flex', gap: 1 }}>
// //         {row.map((tag: any) => (
// //           <Box>
// //             <Chip
// //               key={tag.tagId}
// //               label={tag.tagName}
// //               size="small"
// //               color="primary"
// //               sx={{ width: '100px' }}
// //             />
// //           </Box>
// //         ))}
// //       </Box>
// //     ),
// //   },
// //   {
// //     id: 5,
// //     title: '	Giá niêm yết',
// //     dataIndex: 'price',
// //     render: (row: any) => (
// //       <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
// //         <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
// //           {row.toLocaleString()} đ
// //         </Typography>
// //       </Box>
// //     ),
// //   },
// //   {
// //     id: 6,
// //     title: 'Giá khuyến mãi',
// //     dataIndex: 'optionPrice',
// //     render: (row: any) => (
// //       <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
// //         <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
// //           {row.toLocaleString()} đ
// //         </Typography>
// //       </Box>
// //     ),
// //   },
// // ];

// interface EnhancedTableToolbarProps {
//   numSelected: number;
//   handleSearch?: React.ChangeEvent<HTMLInputElement> | any;
//   search?: string;
// }
// interface Column {
//   title: string;
//   dataIndex: string;
//   render?: (value: any, row?: any) => React.ReactNode;
//   isValids?: boolean;
// }

// const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
//   const { numSelected, handleSearch, search } = props;

//   // if (!data || data.length === 0) {
//   //   console.log('No data to display');
//   // } else {
//   //   console.log('Data to be passed to CustomTable:', data);
//   // }

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         minHeight: { sm: 0 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Box sx={{ flex: '1 1 100%' }}>
//           <TextField
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <IconSearch size="1.1rem" />
//                 </InputAdornment>
//               ),
//             }}
//             placeholder="Tìm kiếm sản phẩm"
//             size="small"
//             onChange={handleSearch}
//             value={search}
//             sx={{
//               width: '100%',
//             }}
//           />
//         </Box>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <IconTrash width="18" />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <IconFilter size="1.2rem" />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// const PaginationTable = () => {
//   // const [selected] = React.useState<readonly string[]>([]);
//   const [dataSelect, setDataSelect] = React.useState<string[]>([]);
//   const FilmsData = React.useMemo<Column[]>(
//     () => [
// {
//   title: 'Id',
//   dataIndex: 'shopProductId',
// },
// {
//   title: 'Ảnh',
//   dataIndex: 'shopProductImageUrl',
//   render: (row: any) => <Avatar src={row} alt={row} sx={{ width: 30, height: 30 }} />,
// },
// {
//   title: '	Tên sản phẩm',
//   dataIndex: 'shopProductName',
// },
// {
//   title: 'Tags',
//   dataIndex: 'tags',
//   render: (row: any) => (
//     <Chip
//       sx={{
//         borderRadius: '6px',
//         color: '#ff3333',
//       }}
//       size="small"
//       label={row}
//     />
//   ),
// },
// {
//   title: '	Giá niêm yết',
//   dataIndex: 'price',
//   render: (row: any) => (
//     <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
//       <Typography
//         color="textSecondary"
//         variant="subtitle2"
//         sx={{ display: 'flex', gap: 0.5 }}
//       >
//         {row} đ
//       </Typography>
//     </Box>
//   ),
// },
// {
//   title: 'Giá khuyến mãi',
//   dataIndex: 'discount',
//   render: (row: any) => (
//     <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
//       <Typography
//         color="textSecondary"
//         variant="subtitle2"
//         sx={{ display: 'flex', gap: 0.5 }}
//       >
//         {row} đ
//       </Typography>
//     </Box>
//   ),
// },
//     ],
//     [],
//   );

//   React.useEffect(() => {
//     const hasIsValids = FilmsData.some((col) => 'isValids' in col);
//     if (hasIsValids) {
//       const hiddenColumns = FilmsData.filter((col) => col.isValids === false).map(
//         (col) => col.dataIndex || '',
//       );

//       setDataSelect(hiddenColumns);
//     } else {
//       setDataSelect([]);
//     }
//   }, [FilmsData]);

//   const dispatch = useDispatch();
//   const dataProduct = useSelector((state: AppState) => state.product.data);

// React.useEffect(() => {
//   dispatch(fetchProduct());
// }, [dispatch]);

//   const handleColumnChange = (event: any) => {
//     const {
//       target: { value },
//     } = event;
//     setDataSelect(typeof value === 'string' ? value.split(',') : value);
//   };
//   return (
//     <PageContainer title="Pagination Table" description="this is Pagination Table page">
//       <Grid
//         container
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           // pb: '24px',
//         }}
//       >
//         <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
//           <Grid container>
//             <Grid item xs={2}>
//               {' '}
//               <AddDialog />
//             </Grid>
//             <Grid item xs={10}>
//               {' '}
//               <TextField
//                 id="outlined-search"
//                 placeholder="Tìm kiếm trợ lý"
//                 size="small"
//                 type="search"
//                 variant="outlined"
//                 inputProps={{ 'aria-label': 'Search Followers' }}
//                 sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <IconSearch size="12" />
//                     </InputAdornment>
//                   ),
//                 }}
//                 fullWidth={true}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
//             <Select
//               multiple
//               value={dataSelect}
//               displayEmpty
//               onChange={handleColumnChange}
//               renderValue={() => 'Sửa đổi cột'}
//               size="small"
//               MenuProps={{
//                 PaperProps: {
//                   sx: {
//                     marginTop: 1,
//                     maxHeight: 400,
//                     '&::-webkit-scrollbar': {
//                       width: '4px',
//                     },
//                     '&::-webkit-scrollbar-thumb': {
//                       backgroundColor: '#D2D2D2',
//                       borderRadius: '10px',
//                     },
//                     '&::-webkit-scrollbar-thumb:hover': {
//                       backgroundColor: '#C6C8CC',
//                     },
//                     '&::-webkit-scrollbar-track': {
//                       backgroundColor: '#f1f1f1',
//                     },
//                   },
//                 },
//                 anchorOrigin: {
//                   vertical: 'bottom',
//                   horizontal: 'right',
//                 },
//                 transformOrigin: {
//                   vertical: 'top',
//                   horizontal: 'right',
//                 },
//               }}
//             >
//               {FilmsData.map((header: any) => {
//                 console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

//                 const isSelected = dataSelect.includes(header.dataIndex);

//                 return (
//                   <MenuItem key={header.dataIndex} value={header.dataIndex}>
//                     <Checkbox checked={!isSelected} />
//                     <ListItemText primary={header.title} />
//                   </MenuItem>
//                 );
//               })}
//             </Select>
//           </Box>
//         </Grid>
//       </Grid>
//       <BlankCard>
//         <CustomTable columns={FilmsData} dataSource={dataProduct} dataSelect={dataSelect} />
//       </BlankCard>
//     </PageContainer>
//   );
// };

// export default PaginationTable;

import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { fetchProduct } from '../../../store/apps/products/productsSlice';
import AddDialog from './layout/addDialog';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PaginationTable = () => {
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'shopProductId',
      },
      {
        title: 'Ảnh',
        dataIndex: 'shopProductImageUrl',
      },
      {
        title: '	Tên sản phẩm',
        dataIndex: 'shopProductName',
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
      },
      {
        title: '	Giá niêm yết',
        dataIndex: 'price',
        render: (row) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{row.price} đ</Typography>
          </Box>
        ),
      },
      {
        title: 'Giá khuyến mãi',
        dataIndex: 'discount',
        render: (_value: string, row) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{row.discount} đ</Typography>
          </Box>
        ),
      },
      {
        title: 'Mô tả',
        dataIndex: 'mota',
        isValids: false,
      },
      {
        title: 'Ảnh sản phẩm',
        dataIndex: 'anhsanpham',
        isValids: false,
      },
      {
        title: 'Đơn vị tính',
        dataIndex: 'donvitinh',
        isValids: false,
      },
      {
        title: 'Kích thước',
        dataIndex: 'kichthuoc',
        isValids: false,
      },
      {
        title: 'Màu sắc',
        dataIndex: 'mausac',
        isValids: false,
      },
      {
        title: 'Chất liệu',
        dataIndex: 'chatlieu',
        isValids: false,
      },
      {
        title: 'Tiêu đề',
        dataIndex: 'tieude',
        isValids: false,
      },
      {
        title: 'Kiểu dáng',
        dataIndex: 'kieudang',
        isValids: false,
      },
    ],
    [],
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const dataProduct = useSelector((state: AppState) => state.product.data);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some((col) => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);
  // const [value, setValue] = useState<Dayjs | null>(null);
  // const [value1, setValue1] = useState<Dayjs | null>(null);
  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container sx={{ alignItems: 'center' }} spacing={2}>
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item xs={2}>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm sản phẩm"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="12" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <IconButton aria-label="filter" sx={{ mr: 2 }}>
              <Badge badgeContent={column.length - dataSelect.length} color="primary">
                <FilterListIcon />
              </Badge>
            </IconButton>
            <Select
              multiple
              value={dataSelect}
              displayEmpty
              onChange={handleColumnChange}
              renderValue={() => 'Sửa đổi cột'}
              size="small"
              MenuProps={{
                PaperProps: {
                  sx: {
                    marginTop: 1,
                    maxHeight: 400,
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#D2D2D2',
                      borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      backgroundColor: '#C6C8CC',
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: '#f1f1f1',
                    },
                  },
                },
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              }}
            >
              <MenuItem>
                <Checkbox
                  checked={!(dataSelect.length === column.length)}
                  indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                  onChange={() => {
                    if (dataSelect.length < column.length) {
                      const allColumns = column.map((header: Column) => header.dataIndex);
                      setDataSelect(allColumns);
                    } else {
                      setDataSelect([]);
                    }
                  }}
                />
                <ListItemText primary="Chọn tất cả" />
              </MenuItem>
              {column.map((header: Column) => {
                const isSelected = !dataSelect.includes(header.dataIndex);
                return (
                  <MenuItem key={header.dataIndex} value={header.dataIndex}>
                    <Checkbox checked={isSelected} />
                    <ListItemText primary={header.title} />
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={dataProduct} dataSelect={dataSelect} />
      </Grid>
      {/* <Dialogproduct open={open} setOpen={setOpen} /> */}
      <AddDialog isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
    </Grid>
  );
};

export default PaginationTable;
