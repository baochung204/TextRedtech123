// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';

import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import PageContainer from 'src/components/container/PageContainer';

import { IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import BlankCard from '../../../components/shared/BlankCard';
import logoPoint from 'src/assets/images/logos/R-Point.png';

import { getProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import { ProductType } from 'src/types/apps/eCommerce';
import AddDialog from './layout/addDialog';
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

interface OrderType {
  id: string;
  items: string;
  imgsrc: any;
  name: string;
  total: string;
  tags: string;
  totalSales: string;
}

const rows: OrderType[] = [
  {
    id: 'ORD - 0120145',
    items: '5',
    imgsrc: img1,
    name: 'Chatbot Marketing',
    total: '550,000',
    tags: 'đồ chơi',
    totalSales: '500,000',
  },
  {
    id: 'ORD - 0120146',
    items: '1',
    imgsrc: img2,
    name: 'ChatAI',
    total: '45,000',
    tags: 'quần áo',
    totalSales: '40,000',
  },
  {
    id: 'ORD - 0120460',
    items: '3',
    imgsrc: img3,
    name: 'ChatOpenAi',
    total: '57,000',
    tags: 'phụ kiện',
    totalSales: '50,000',
  },
  {
    id: 'ORD - 0124060',
    items: '11',
    imgsrc: img4,
    name: 'ChatBot Chicken',
    total: '457,000',
    tags: 'di động',
    totalSales: '450,000',
  },
  {
    id: 'ORD - 0124568',
    items: '4',
    imgsrc: img5,
    name: 'SaleBot',
    total: '120,000',
    tags: 'đời sống',
    totalSales: '110,000',
  },
  {
    id: 'ORD - 0120146',
    items: '1',
    imgsrc: img2,
    name: 'GameBot',
    total: '45,000',
    tags: 'điện tử',
    totalSales: '40,000',
  },
  {
    id: 'ORD - 0120460',
    items: '3',
    imgsrc: img3,
    name: 'LifeBot',
    total: '57,000',
    tags: 'điện tử',
    totalSales: '50,000',
  },
  {
    id: 'ORD - 0124060',
    items: '11',
    imgsrc: img4,
    name: 'ChatBot BĐS',
    total: '457,000',
    tags: 'điện tử',
    totalSales: '450,000',
  },
  {
    id: 'ORD - 0124568',
    items: '4',
    imgsrc: img5,
    name: 'ChatBot BĐS',
    total: '120,000',
    tags: 'điện tử',
    totalSales: '110,000',
  },
  {
    id: 'ORD - 0120145',
    items: '5',
    imgsrc: img1,
    name: 'ChatBot BĐS',
    total: '550,000',
    tags: 'thể thao',
    totalSales: '530,000',
  },
  {
    id: 'ORD - 0124060',
    items: '11',
    imgsrc: img4,
    name: 'ChatBot Tỉ số bóng đá',
    total: '457,000',
    tags: 'thể thao',
    totalSales: '450,000',
  },
  {
    id: 'ORD - 0124568',
    items: '4',
    imgsrc: img5,
    name: 'ChatBot Y tế',
    total: '120,000',
    tags: 'đời sống',
    totalSales: '100,000',
  },
].sort((a, b) => (a.name < b.name ? -1 : 1));

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleSearch: React.ChangeEvent<HTMLInputElement> | any;
  search: string;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleSearch, search } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
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

const PaginationTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [selected] = React.useState<readonly string[]>([]);

  const [search, setSearch] = React.useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const products = getProducts([]).payload as unknown as ProductType[];
    const filteredRows: ProductType[] = products.filter((row) => {
      return row.title.toLowerCase().includes(event.target.value);
    });
    setSearch(event.target.value);
    setRows(filteredRows);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <PageContainer title="Pagination Table" description="this is Pagination Table page">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Phần bên trái */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AddDialog />
          <EnhancedTableToolbar
            numSelected={selected.length}
            search={search}
            handleSearch={(event: any) => handleSearch(event)}
          />
        </Box>

        {/* Phần bên phải */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button>Sửa đổi cột</Button>

          <CustomSelect
            labelId="column-filter"
            id="column-filter"
            size="small"
            value={1} // Setting the first value as default
            sx={{ marginLeft: '10px' }}
          >
            <MenuItem value={1}>Sắp xếp</MenuItem>
          </CustomSelect>
        </Box>
      </Box>

      <BlankCard>
        <TableContainer>
          <Table
            aria-label="custom pagination table"
            sx={{
              whiteSpace: 'nowrap',
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Id</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Ảnh</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Tên sản phẩm</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Tags</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Giá niêm yết</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Giá khuyến mãi</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="subtitle2">{row.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={row.imgsrc} alt={row.imgsrc} sx={{ width: 30, height: 30 }} />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="600">
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={
                        row.tags === 'di động'
                          ? 'success'
                          : row.tags === 'điện tử'
                            ? 'warning'
                            : row.tags === 'đời sống'
                              ? 'error'
                              : 'secondary'
                      }
                      sx={{
                        borderRadius: '6px',
                      }}
                      size="small"
                      label={row.tags}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{ display: 'flex', gap: 0.5 }}
                    >
                      {row.total}{' '}
                      <img
                        src={logoPoint}
                        alt=""
                        width={20}
                        height={20}
                        style={{ borderRadius: 50 }}
                      />
                      
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{ display: 'flex', gap: 0.5 }}
                    >
                      {row.totalSales}{' '}
                      <img
                        src={logoPoint}
                        alt=""
                        width={20}
                        height={20}
                        style={{ borderRadius: 50 }}
                      />
                      
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={6}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </BlankCard>
    </PageContainer>
  );
};

export default PaginationTable;
function setRows(_filteredRows: ProductType[]) {
  throw new Error('Function not implemented.');
}
