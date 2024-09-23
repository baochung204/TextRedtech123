
import {
  Avatar,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import PersonnelTable from '../datatable/PersonnelTable';
import DialogPersonel from '../dialog/DialogPersonel';
import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Badge,
  Box,
  Checkbox,
  Fab,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { createElement } from 'react';
interface FilmsData {
  dataIndex: string;
  title: string;
  validate: boolean
}
const FilmsData: FilmsData[] = [
  { dataIndex: 'id', title: 'ID', validate: true },
  { dataIndex: 'createdAt', title: 'Ngày tạo', validate: true },
  { dataIndex: 'employeeName', title: 'Nhân viên', validate: true },
  { dataIndex: 'department', title: 'Phòng ban', validate: true },
  { dataIndex: 'email', title: 'Email', validate: true },
  { dataIndex: 'phoneNumber', title: 'Số điện thoại', validate: true },
  { dataIndex: 'articleCount', title: 'Bài viết', validate: true },
  { dataIndex: 'status', title: 'Trạng thái', validate: true },
  { dataIndex: 'isActive', title: 'Hoạt động', validate: true },
];
interface PropsItem {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedKey: string | null;
  setSelectedKey: React.Dispatch<React.SetStateAction<string | null>>;
}

const PersonnelTab = ({ value, open, setOpen, setSelectedKey, selectedKey }: PropsItem) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isCheckFix, setIsCheckFix] = useState<boolean>(false);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = PersonnelTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const [iconIndex, setIconIndex] = useState<number>(0);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [ID, setID] = useState(true);
  const [NgayTao, setNgayTao] = useState(true);
  const [NhanVien, setNhanVien] = useState(true);
  const [PhongBan, setPhongBan] = useState(true);
  const [Email, setEmail] = useState(true);
  const [SoDienThoai, setSoDienThoai] = useState(true);
  const [BaiViet, setBaiViet] = useState(true);
  const [TrangThai, setTrangThai] = useState(true);
  const [HoatDong, setHoatDong] = useState(true);


  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );
    if (id === 1) {
      setID(!ID);
    }
    if (id === 2) {
      setNgayTao(!NgayTao);
    }
    if (id === 3) {
      setNhanVien(!NhanVien);
    }
    if (id === 4) {
      setPhongBan(!PhongBan);
    }
    if (id === 5) {
      setEmail(!Email);
    }
    if (id === 6) {
      setSoDienThoai(!SoDienThoai);
    }
    if (id === 7) {
      setBaiViet(!BaiViet);
    }
    if (id === 8) {
      setTrangThai(!TrangThai);
    }
    if (id === 9) {
      setHoatDong(!HoatDong);
    }
  };
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  return (
    <>
      {' '}
      <Grid item xs={12}>
        <Grid container>
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
            <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => {
                    setOpen(true);
                    setSelectedKey(null);
                  }}
                  sx={{
                    pr: 0,
                  }}
                >
                  <Tooltip title="Thêm nhân viên mới" sx={{ mb: '15px' }}>
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="plus"
                      sx={{ my: 'auto', mr: '10px' }}
                    >
                      <IconPlus width={18} />
                    </Fab>
                  </Tooltip>
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm nhân viên "
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
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <IconButton aria-label="filter" sx={{ mr: 2 }}>
              <Badge badgeContent={selectedItems.length} color="primary">
                <FilterListIcon />
              </Badge>
            </IconButton>

            <Select
              multiple
              value={selectedItems}
              displayEmpty
              renderValue={(selected) =>
                selected.length === 0 ? 'Sửa đổi cột' : `${selected.length} cột đã chọn`
              }
              size="small"
              sx={{ minWidth: 150 }}
            >
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {FilmsData.map((film) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
              </div>
            </Select>

            <IconButton
              aria-label="filter"
              onClick={handleClickIcon}
              sx={{
                ml: 1,
              }}
            >
              {createElement(icons[iconIndex])}
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={selectedStartDate}
                  onChange={setSelectedStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Typography>tới</Typography>
                <DatePicker
                  value={selectedEndDate}
                  onChange={setSelectedEndDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer>
        <Scrollbar_x>
          <Table>
            <TableHead>
              <TableRow>
                {ID && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">ID</Typography>
                  </TableCell>
                )}
                {NgayTao && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngày tạo</Typography>
                  </TableCell>
                )}
                {NhanVien && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Nhân viên</Typography>
                  </TableCell>
                )}
                {PhongBan && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Phòng ban</Typography>
                  </TableCell>
                )}
                {Email && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                )}
                {SoDienThoai && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Số điện thoại</Typography>
                  </TableCell>
                )}
                {BaiViet && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Bài viết</Typography>
                  </TableCell>
                )}
                {TrangThai && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Trạng thái</Typography>
                  </TableCell>
                )}

                {HoatDong &&
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Hoạt động</Typography>
                  </TableCell>
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {ID && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">{item.id}</Typography>
                      </TableCell>
                    )}
                    {NgayTao && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">
                          {item.createdAt.toLocaleDateString()}
                        </Typography>
                      </TableCell>
                    )}
                    {NhanVien && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            src={item.avt}
                            variant="rounded"
                            alt={item.avt}
                            sx={{ width: 48, height: 48 }}
                          />
                          <Grid container>
                            <Grid item xs={12}>
                              <Typography variant="h6">{item.employeeName}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle2">{item.position}</Typography>
                            </Grid>
                          </Grid>
                        </Stack>
                      </TableCell>
                    )}
                    {PhongBan && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">{item.department}</Typography>
                      </TableCell>
                    )}
                    {Email && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">{item.email}</Typography>
                      </TableCell>
                    )}
                    {SoDienThoai && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">{item.phoneNumber}</Typography>
                      </TableCell>
                    )}
                    {BaiViet && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">{item.articleCount}</Typography>
                      </TableCell>
                    )}
                    {TrangThai && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="subtitle2">
                          {item.status ? (
                            <Typography color="success.dark" variant="subtitle2">
                              Hoạt động
                            </Typography>
                          ) : (
                            <Typography color="error" variant="subtitle2">
                              Khóa
                            </Typography>
                          )}
                        </Typography>
                      </TableCell>
                    )}

                    {HoatDong &&
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            setSelectedKey(item.id);
                            setOpen(true);
                            setIsCheckFix(true);
                          }}
                        >
                          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                        </IconButton>
                        <IconButton>
                          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                        </IconButton>
                      </TableCell>
                    }
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar_x>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={PersonnelTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_event, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số hàng trên mỗi trang"
        />
      </TableContainer>
      <DialogPersonel
        open={open}
        value={value}
        setOpen={setOpen}
        keyOption={selectedKey}
        isCheckFix={isCheckFix}
        setIsCheckFix={setIsCheckFix}
      />
    </>
  );
};

export default PersonnelTab;

// import {
//   Avatar,
//   Grid,
//   IconButton,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Typography,
// } from '@mui/material';
// import { IconEye, IconTrash } from '@tabler/icons-react';
// import React, { useState } from 'react';
// import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
// import PersonnelTable from '../datatable/PersonnelTable';
// import DialogPersonel from '../dialog/DialogPersonel';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import NorthIcon from '@mui/icons-material/North';
// import SouthIcon from '@mui/icons-material/South';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import {
//   Badge,
//   Box,
//   Checkbox,
//   Fab,
//   InputAdornment,
//   ListItemText,
//   MenuItem,
//   Select,
//   TextField,
//   Tooltip,
// } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { IconPlus, IconSearch } from '@tabler/icons-react';
// import { createElement } from 'react';

// interface FilmData {
//   id: number;
//   title: string;
//   visible: boolean;
// }

// const FilmsData: FilmData[] = [
//   { id: 1, title: 'ID', visible: true },
//   { id: 2, title: 'Ngày tạo', visible: true },
//   { id: 3, title: 'Nhân viên', visible: true },
//   { id: 4, title: 'Phòng ban', visible: true },
//   { id: 5, title: 'Email', visible: true },
//   { id: 6, title: 'Số điện thoại', visible: true },
//   { id: 7, title: 'Bài viết', visible: true },
//   { id: 8, title: 'Trạng thái', visible: true },
//   { id: 9, title: 'Hoạt động', visible: true },
// ];

// interface PropsItem {
//   value: string;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   selectedKey: string | null;
//   setSelectedKey: React.Dispatch<React.SetStateAction<string | null>>;
// }

// const PersonnelTab = ({ value, open, setOpen, setSelectedKey, selectedKey }: PropsItem) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [iconIndex, setIconIndex] = useState<number>(0);
//   const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
//   const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
//   const [selectedItems, setSelectedItems] = useState<number[]>([]);

//   const handleChangePage = (newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedData = PersonnelTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
//   const icons = [SwapVertIcon, SouthIcon, NorthIcon];

//   const handleClickIcon = () => {
//     setIconIndex((pre) => (pre + 1) % icons.length);
//   };

//   const handleItemClick = (id: number) => {
//     setSelectedItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//     const film = FilmsData.find(film => film.id === id);
//     if (film) {
//       film.visible = !film.visible;
//     }
//   };

//   return (
//     <>
//       <Grid item xs={12}>
//         <Grid container>
//           <Grid item xs={4}>
//             <Grid container spacing={1}>
//               <Grid item>
//                 <IconButton
//                   color="primary"
//                   aria-label="Add to cart"
//                   onClick={() => {
//                     setOpen(true);
//                     setSelectedKey(null);
//                   }}
//                 >
//                   <Tooltip title="Thêm nhân viên mới">
//                     <Fab size="small" color="secondary" aria-label="plus">
//                       <IconPlus width={18} />
//                     </Fab>
//                   </Tooltip>
//                 </IconButton>
//               </Grid>
//               <Grid item>
//                 <TextField
//                   placeholder="Tìm kiếm nhân viên "
//                   size="small"
//                   type="search"
//                   variant="outlined"
//                   fullWidth
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <IconSearch size="12" />
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
//             <IconButton aria-label="filter">
//               <Badge badgeContent={selectedItems.length} color="primary">
//                 <FilterListIcon />
//               </Badge>
//             </IconButton>

//             <Select
//               multiple
//               value={selectedItems}
//               displayEmpty
//               renderValue={(selected) =>
//                 selected.length === 0 ? 'Sửa đổi cột' : `${selected.length} cột đã chọn`
//               }
//               size="small"
//               sx={{ minWidth: 150 }}
//             >
//               <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                 {FilmsData.map((film) => (
//                   <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
//                     <Checkbox checked={selectedItems.includes(film.id)} />
//                     <ListItemText primary={film.title} />
//                   </MenuItem>
//                 ))}
//               </div>
//             </Select>

//             <IconButton aria-label="sort" onClick={handleClickIcon}>
//               {createElement(icons[iconIndex])}
//             </IconButton>
//           </Grid>
//           <Grid item xs={4}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   value={selectedStartDate}
//                   onChange={setSelectedStartDate}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//                 <Typography>tới</Typography>
//                 <DatePicker
//                   value={selectedEndDate}
//                   onChange={setSelectedEndDate}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </LocalizationProvider>
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>
//       <TableContainer>
//         <Scrollbar_x>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {FilmsData.map((film) =>
//                   film.visible ? (
//                     <TableCell key={film.id}>
//                       <Typography variant="h6">{film.title}</Typography>
//                     </TableCell>
//                   ) : null
//                 )}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((item, index) => (
//                 <TableRow key={index}>
//                   {FilmsData.map((film) =>
//                     film.visible ? (
//                       <TableCell key={film.id}>
//                         <Typography variant="subtitle2">
//                           {film.id === 1 ? item.id :
//                             film.id === 2 ? item.createdAt.toLocaleDateString() :
//                               film.id === 3 ? (
//                                 <Stack direction="row" spacing={2}>
//                                   <Avatar src={item.avt} variant="rounded" alt={item.avt} />
//                                   <Typography variant="h6">{item.employeeName}</Typography>
//                                 </Stack>
//                               ) :
//                                 film.id === 4 ? item.department :
//                                   film.id === 5 ? item.email :
//                                     film.id === 6 ? item.phoneNumber :
//                                       film.id === 7 ? item.articleCount :
//                                         film.id === 8 ? (item.status ? "Hoạt động" : "Khóa") :
//                                           film.id === 9 ? (
//                                             <IconButton onClick={() => {
//                                               setSelectedKey(item.id);
//                                               setOpen(true);
//                                             }}>
//                                               <IconEye stroke={2} style={{ color: '#5D87FF' }} />
//                                             </IconButton>
//                                           ) : null}
//                         </Typography>
//                       </TableCell>
//                     ) : null
//                   )}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Scrollbar_x>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={PersonnelTable.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={(_event, newPage) => handleChangePage(newPage)}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           labelRowsPerPage="Số hàng trên mỗi trang"
//         />
//       </TableContainer>
//       <DialogPersonel
//         open={open}
//         value={value}
//         setOpen={setOpen}
//         // keyOption={selectedKey}
//       />
//     </>
//   );
// };

// export default PersonnelTab;
