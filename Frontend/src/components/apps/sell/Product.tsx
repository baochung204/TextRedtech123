// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import * as React from 'react';
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = ['Id', 'Ảnh', 'Tên sản phẩm', 'Tags', 'Giá niêm yết', 'Giá khuyến mãi'];

import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';


import PageContainer from 'src/components/container/PageContainer';

import { IconFilter, IconSearch, IconTrash } from '@tabler/icons-react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

import BlankCard from '../../../components/shared/BlankCard';

import CustomTable from 'src/components/ComponentTables/CustomTable';
import AddDialog from './layout/addDialog';

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
// }

// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event: any) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event: any) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event: any) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event: any) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

interface OrderType {
  id: string;
  items: string;
  imgsrc: string;
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
const FilmsData: any = [
  { id: 1, title: 'Id', dataIndex: 'id' },
  {
    id: 2,
    title: 'Ảnh',
    dataIndex: 'imgsrc',
    render: (row: any) => <Avatar src={row} alt={row} sx={{ width: 30, height: 30 }} />,
  },
  { id: 3, title: '	Tên sản phẩm', dataIndex: 'name' },
  {
    id: 4,
    title: 'Tags',
    dataIndex: 'tags',
    render: (row: any) => (
      <Chip
        color={
          row === 'di động'
            ? 'success'
            : row === 'điện tử'
            ? 'warning'
            : row === 'đời sống'
            ? 'error'
            : 'secondary'
        }
        sx={{
          borderRadius: '6px',
        }}
        size="small"
        label={row}
      />
    ),
  },
  {
    id: 5,
    title: '	Giá niêm yết',
    dataIndex: 'total',
    render: (row: any) => (
      <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
          {row} <img src={logoPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
        </Typography>
      </Box>
    ),
  },
  {
    id: 6,
    title: 'Giá khuyến mãi',
    dataIndex: 'totalSales',
    render: (row: any) => (
      <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
          {row} <img src={logoPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
        </Typography>
      </Box>
    ),
  },
];
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
        minHeight: { sm: 0 },
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
            sx={{
              width: '100%',
            }}
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
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [filteredRows, setFilteredRows] = React.useState(rows);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = rows.filter(
      (row) => (
        row.name.toLowerCase().includes(value),
        row.tags.toLowerCase().includes(value),
        row.id.toLowerCase().includes(value)
      ),
    );
    setFilteredRows(filtered);
  };
  const [search, setSearch] = React.useState('');
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [value, setValue] = React.useState(1);
  const [selected] = React.useState<readonly string[]>([]);

  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  // const handleChangePage = (_event: any, newPage: any) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: any) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  // // const [ID, setId] = React.useState(true);
  // const [ID] = React.useState(true);
  // const [IMG, setImg] = React.useState(true);
  // const [NAME, setName] = React.useState(true);
  // const [TAGS, setTags] = React.useState(true);
  // const [PRICE, setPrice] = React.useState(true);
  // const [PRICEVD, setPriceVD] = React.useState(true);
  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );
  };
  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  const [iconIndex, setIconIndex] = React.useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  return (
    <PageContainer title="Pagination Table" description="this is Pagination Table page">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: '24px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AddDialog />
          <EnhancedTableToolbar
            numSelected={selected.length}
            search={search}
            handleSearch={handleSearch}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
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
            {FilmsData.map((film: any) => (
              <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                <Checkbox
                  checked={selectedItems.includes(film.id)}
                  sx={{
                    color: selectedItems.length === FilmsData.length ? 'green' : undefined,
                  }}
                />
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
            {React.createElement(icons[iconIndex])}
          </IconButton>
        </Box>
      </Box>
      <BlankCard>
        <CustomTable columns={FilmsData} dataSource={filteredRows} />
      </BlankCard>
    </PageContainer>
  );
};

export default PaginationTable;
