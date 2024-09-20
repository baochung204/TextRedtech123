import {
  Badge,
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconEye, IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';
import { alpha } from '@mui/material/styles';
import { createElement, useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from './data/OrderData';
import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleSearch, search } = props;

  return (
    <Toolbar
      sx={{
        pl: { xs: 0, sm: 0 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Box sx={{ flex: '1 1 100%' }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="1.1rem" />
                </InputAdornment>
              ),
            }}
            placeholder="Tìm kiếm sản phẩm"
            size="small"
            onChange={handleSearch}
            value={search}
          />
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <IconTrash width="18" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <IconFilter size="1.2rem" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

interface HeadProps {
  head: string;
}

const HeadTable: HeadProps[] = [
  {
    head: 'ID',
  },
  {
    head: 'Họ và tên',
  },
  {
    head: 'Email',
  },
  {
    head: 'Số điện thoại',
  },
  {
    head: 'Loại tài khoản',
  },
  {
    head: 'Trợ lý',
  },
  {
    head: 'Tổng nạp',
  },
  {
    head: 'Số dư',
  },
  {
    head: 'Hành động',
  },
];
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'File' },
  { id: 2, title: 'Dung lượng' },
  { id: 3, title: 'Functions' },
  { id: 4, title: 'Token huấn luyện' },
  { id: 5, title: 'Ngày tạo' },
  { id: 6, title: 'Vòng quay trung bình' },
  { id: 7, title: 'khách hàng' },
  { id: 8, title: 'Đơn hàng' },
  { id: 9, title: 'CVR' },
  { id: 10, title: 'GMV' },
  { id: 11, title: 'Chi phí' },
  { id: 12, title: 'Chi phí/Doanh thu' },
  { id: 13, title: 'Chi phí/Đơn hàng' },
  { id: 14, title: 'Chi phí/Khách hàng' },
  { id: 15, title: 'Chiến lược' },
];
const OrderAdminPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected] = useState<readonly string[]>([]);
  const [search, setSearch] = useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const paginatedData = OrderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const [iconIndex, setIconIndex] = useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  return (
    <>
      {' '}
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
              <TextField
                id="outlined-search"
                placeholder="Tìm kiếm trợ lý"
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
                {FilmsData.map((film) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Scrollbar_x>
              <Table>
                <TableHead>
                  <TableRow>
                    {HeadTable.map((item, index) => (
                      <TableCell
                        key={index}
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">{item.head}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.id}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.name}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.email}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.phone}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                            }}
                          >
                            <Typography variant="subtitle2">{item.typeacc}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.troly}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.tongnap} VNĐ</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                            }}
                          >
                            <Typography variant="subtitle2">{item.sodu}</Typography>
                            <img src={icontext} alt="" width={20} />
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <IconButton
                            onClick={() => {
                              // setSelectedKey(item.id); setOpen(true); console.log(item.id);
                            }}
                          >
                            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
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
            </Scrollbar_x>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={OrderData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) => handleChangePage(newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderAdminPage;
