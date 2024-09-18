// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
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
import { alpha  } from '@mui/material/styles';

import PageContainer from 'src/components/container/PageContainer';

import { IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';

import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';


import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import ProductTable from './ProductData';
import AddDialog from 'src/components/apps/sell/layout/addDialog';


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

interface HeadProps {
  head: string
}

const HeadTable: HeadProps[] = [
  {
    head: 'ID'
  },
  {
    head: 'Danh mục'
  },
  {
    head: 'Ảnh'
  },
  {
    head: 'Tên sản phẩm'
  },
  {
    head: 'Giá niêm yết'
  },
  {
    head: 'Giá khuyến mãi'
  },
  {
    head: 'Level'
  },
  {
    head: 'Tags'
  },
  {
    head: 'Số lượng mua'
  },
  {
    head: 'Tổng doanh thu'
  },
  {
    head: 'Tỉ trọng doanh thu'
  }
]

const ProductAdmin = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [selected] = React.useState<readonly string[]>([]);

  const [search, setSearch] = React.useState('');
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

  const paginatedData = ProductTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
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
      <TableContainer>
        <Scrollbar_x>
          <Table>
            <TableHead>
              <TableRow>
                {HeadTable.map((item, index) =>
                  <TableCell key={index}
                    sx={{
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Typography variant="h6">
                      {item.head}
                    </Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {

                return (
                  <TableRow key={index}
                  >
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.id}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}>
                      <Typography variant="subtitle2">
                        {item.danhmuc}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}>
                      <Typography variant="subtitle2">
                        <Avatar
                          src={item.anh}
                          alt={item.anh}
                        />
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}>

                      <Typography variant="subtitle2">
                        {item.tensanpham}
                      </Typography>

                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',

                        }}
                      >
                        <Typography variant="subtitle2">
                          {item.gianiemyet}
                        </Typography>
                        <img src={icontext} alt='' width={20} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',

                        }}
                      >
                        <Typography variant="subtitle2">
                          {item.giakhuyenmai}
                        </Typography>
                        <img src={icontext} alt='' width={20} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.level}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.tags}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.soluongmua}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.tongdoanhthu}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.titrongdoanthu}
                      </Typography>
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
          count={ProductTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer >

    </PageContainer>
  );
};

export default ProductAdmin;

