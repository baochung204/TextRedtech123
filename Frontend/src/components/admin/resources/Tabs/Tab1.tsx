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
import logoPoint from 'src/assets/images/logos/R-Point.png';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import BlankCard from 'src/components/shared/BlankCard';

import AddDialog from 'src/components/apps/sell/layout/addDialog';
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
  dateCreate: string;
  badge: any;
  teambadge: string;
  level: string;
  client: string;
  assistant: string;
  summary: string;
  content: string;
  creator: string;
}

const rows: OrderType[] = [
  {
    id: 'ORD - 0120145',
    dateCreate: '5',
    badge: img1,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0120146',
    dateCreate: '1',
    badge: img2,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0120460',
    dateCreate: '3',
    badge: img3,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124060',
    dateCreate: '11',
    badge: img4,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124568',
    dateCreate: '4',
    badge: img5,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0120146',
    dateCreate: '1',
    badge: img2,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0120460',
    dateCreate: '3',
    badge: img3,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124060',
    dateCreate: '11',
    badge: img4,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124568',
    dateCreate: '4',
    badge: img5,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0120145',
    dateCreate: '5',
    badge: img1,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124060',
    dateCreate: '11',
    badge: img4,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
  {
    id: 'ORD - 0124568',
    dateCreate: '4',
    badge: img5,
    teambadge: 'Chiến lược',
    level: '1',
    client: 'Giàng A báo',
    assistant: 'ChatAi',
    summary: 'Tóm tắt',
    content: 'Nội dung',
    creator: 'Phùng Thanh D',
  },
].sort((a, b) => (a.teambadge < b.teambadge ? -1 : 1));

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
  const [selected] = React.useState<readonly string[]>([]);
  const [search, setSearch] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = rows.filter(
      (row) =>
        row.teambadge.toLowerCase().includes(value) ||
        row.client.toLowerCase().includes(value) ||
        row.id.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

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
            handleSearch={handleSearch}
          />
        </Box>

        {/* Phần bên phải */}
        <Box sx={{ display: 'flex', aligndateCreate: 'center' }}>
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
                  <Typography variant="h6">Ngày tạo</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Nhóm chiến lược</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Huy hiệu</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Tên chiến lược</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Level</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Khách hàng sở hữu(SL)</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Trợ lý áp dụng</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Tóm tắt</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Nội dung</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Người tạo</Typography>
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography variant="subtitle2">{row.id}</Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="600">
                      {row.teambadge}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={
                        row.client === 'di động'
                          ? 'success'
                          : row.client === 'điện tử'
                            ? 'warning'
                            : row.client === 'đời sống'
                              ? 'error'
                              : 'secondary'
                      }
                      sx={{
                        borderRadius: '6px',
                      }}
                      size="small"
                      label={row.client}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={row.badge} alt={row.badge} sx={{ width: 30, height: 30 }} />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography
                      // color="textSecondary"
                      // variant="subtitle2"
                      // sx={{ display: 'flex', gap: 0.5 }}
                    >
                      {row.level}{' '}
                      {/* <img
                        src={logoPoint}
                        alt=""
                        width={20}
                        height={20}
                        style={{ borderRadius: 50 }}
                      /> */}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      // color="textSecondary"
                      // variant="subtitle2"
                      // sx={{ display: 'flex', gap: 0.5 }}
                    >
                      {row.assistant}{' '}
                      {/* <img
                        src={logoPoint}
                        alt=""
                        width={20}
                        height={20}
                        style={{ borderRadius: 50 }}
                      /> */}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {row.teambadge}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {row.teambadge}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {row.teambadge}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {row.teambadge}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {row.teambadge}
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
          </Table>
        </TableContainer>
        <TableFooter>
          <TableRow
            sx={{
              display: 'flex',
              justifyContent: 'flex-end', // Căn hàng sang bên phải
            }}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={3}
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>


      </BlankCard>
    </PageContainer>
  );
};

export default PaginationTable;

