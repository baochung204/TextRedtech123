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

// const shopProductNames = ['Id', 'Ảnh', 'Tên sản phẩm', 'Tags', 'Giá niêm yết', 'Giá khuyến mãi'];

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

import BlankCard from '../../../components/shared/BlankCard';

import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchProducts } from './../../../store/apps/products/Products';
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

interface ProductTag {
  tagId: number;
  tagName: string;
}

interface OrderType {
  tags: any;
  shopProductId: number;
  items: string;
  shopProductImageUrl: string;
  shopProductName: string;
  price: number;
  productTag: ProductTag[];
  optionPrice: number;
}
const rows: OrderType[] = [
  {
    shopProductId: 123,
    items: '5',
    shopProductImageUrl: img1,
    shopProductName: 'Chatbot Marketing',
    price: 550000,
    tags: '',
    productTag: [
      {
        tagId: 12,
        tagName: 'Fashion',
      },
      {
        tagId: 15,
        tagName: 'Summer Collection',
      },
    ],
    optionPrice: 500000,
  },
  {
    shopProductId: 13,
    items: '5',
    shopProductImageUrl: img1,
    shopProductName: 'Chatbot Marketing',
    price: 550000,
    tags: '',
    productTag: [
      {
        tagId: 12,
        tagName: 'Fashion',
      },
      {
        tagId: 15,
        tagName: 'Summer Collection',
      },
    ],
    optionPrice: 500000,
  },
].sort((a, b) => (a.shopProductName < b.shopProductName ? -1 : 1));

const FilmsData: any = [
  { id: 1, title: 'ID', dataIndex: 'shopProductId' },
  {
    id: 2,
    title: 'Ảnh',
    dataIndex: 'shopProductImageUrl',
    render: (row: any) => <Avatar src={row} alt={row} sx={{ width: 30, height: 30 }} />,
  },
  { id: 3, title: '	Tên sản phẩm', dataIndex: 'shopProductName' },
  {
    id: 4,
    title: 'Tags',
    dataIndex: 'productTag',
    render: (row: any) => (
      <Box sx={{ display: 'flex', gap: 1 }}>
        {row.map((tag: any) => (
          <Box>
            <Chip
              key={tag.tagId}
              label={tag.tagName}
              size="small"
              color="primary"
              sx={{ width: '100px' }}
            />
          </Box>
        ))}
      </Box>
    ),
  },
  {
    id: 5,
    title: '	Giá niêm yết',
    dataIndex: 'price',
    render: (row: any) => (
      <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
          {row.toLocaleString()} đ
        </Typography>
      </Box>
    ),
  },
  {
    id: 6,
    title: 'Giá khuyến mãi',
    dataIndex: 'optionPrice',
    render: (row: any) => (
      <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Typography color="textSecondary" variant="subtitle2" sx={{ display: 'flex', gap: 0.5 }}>
          {row.toLocaleString()} đ
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
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected, handleSearch, search } = props;

  // if (!data || data.length === 0) {
  //   console.log('No data to display');
  // } else {
  //   console.log('Data to be passed to CustomTable:', data);
  // }
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
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state: any) => state);

  // Gọi fetchProducts khi component được mount
  React.useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  const data = product?.products;
  console.log('data', data);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [filteredRows, setFilteredRows] = React.useState(data);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = data.filter(
      (data: any) => (
        data.shopProductName.trim().toString().toLowerCase().includes(value),
        data.tags.toLowerCase().includes(value),
        data.shopProductId.toString().toLowerCase().includes(value)
      ),
    );
    setFilteredRows(filtered);
  };
  const [search, setSearch] = React.useState('');

  const [selected] = React.useState<readonly string[]>([]);
  const [dataSelect, setDataSelect] = React.useState<string[]>([]);
  const FilmsData = React.useMemo<Column[]>(
    () => [
      { title: 'Id', dataIndex: 'shopProductId' },
      {
        title: 'Ảnh',
        dataIndex: 'shopProductImageUrl',
        render: (row: any) => <Avatar src={row} alt={row} sx={{ width: 30, height: 30 }} />,
      },
      { title: '	Tên sản phẩm', dataIndex: 'shopProductName' },
      {
        title: 'Tags',
        dataIndex: 'productTag',
        render: (row: any) => (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {row.map((tag: any) => (
              <Box>
                <Chip
                  key={tag.tagId}
                  label={tag.tagName}
                  size="small"
                  color="primary"
                  sx={{ width: '100px' }}
                />
              </Box>
            ))}
          </Box>
        ),
      },
      {
        title: '	Giá niêm yết',
        dataIndex: 'price',
        render: (row: any) => (
          <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              sx={{ display: 'flex', gap: 0.5 }}
            >
              {row.toLocaleString()} đ
            </Typography>
          </Box>
        ),
      },
      {
        title: 'Giá khuyến mãi',
        dataIndex: 'optionPrice',
        render: (row: any) => (
          <Box width={'100px'} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              sx={{ display: 'flex', gap: 0.5 }}
            >
              {row.toLocaleString()} đ
            </Typography>
          </Box>
        ),
      },
    ],
    [],
  );

  React.useEffect(() => {
    const hasIsValids = FilmsData.some((col) => 'isValids' in col);
    if (hasIsValids) {
      const hiddenColumns = FilmsData.filter((col) => col.isValids === false).map(
        (col) => col.dataIndex || '',
      );

      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [FilmsData]);

  // const handleChangeRowsPerPage = (event: any) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  // // const [ID, setId] = React.useState(true);
  // const [ID] = React.useState(true);
  // const [IMG, setImg] = React.useState(true);
  // const [shopProductName, setshopProductName] = React.useState(true);
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
  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };
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
            value={dataSelect}
            displayEmpty
            onChange={handleColumnChange}
            renderValue={() => 'Sửa đổi cột'}
          >
            {FilmsData.map((header: any) => {
              console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

              const isSelected = dataSelect.includes(header.dataIndex);

              return (
                <MenuItem key={header.dataIndex} value={header.dataIndex}>
                  <Checkbox checked={!isSelected} />
                  <ListItemText primary={header.title} />
                </MenuItem>
              );
            })}
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
        <CustomTable columns={FilmsData} dataSource={data} dataSelect={dataSelect} />
      </BlankCard>
    </PageContainer>
  );
};

export default PaginationTable;
