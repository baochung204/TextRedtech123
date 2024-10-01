import { Favorite, Visibility } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Chip,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  TextField,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconBrandStrava,
  IconEdit,
  IconEye,
  IconLockSquareRounded,
  IconPasswordUser,
  IconSearch,
  IconTrash,
  IconUser
} from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from './../../../components/container/PageContainer';
import AddBlog from './_components/AddBlog';
import BlogTable from './data/datablog';


const BCrumb = [
  { to: '/admin', title: 'Trang Chủ' },
  { to: '/admin/blogs', title: 'Danh sách bài viết' },
];

const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}
// topcard
const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Bài viết ',
    total: '120',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Lượt xem',
    total: '5',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPasswordUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '52.200.200 ₫ ',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconBrandStrava color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Lượt tim',
    total: '120',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconLockSquareRounded color="white" size={30} />
      </Box>
    ),
  },
];
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const BlogAdmin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const tagColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#DAF7A6', '#C70039'];
  const column = useMemo<Column[]>(
    () => [
      { title: 'ID', dataIndex: 'id' },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        render: (value: any) => value.toLocaleDateString(),
      },
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
          <Typography
            variant="subtitle2"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            {value}{' '}
            <img src={logoPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
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
          <Typography
            variant="subtitle2"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            {value} <Visibility color="action" />
          </Typography>
        ),
      },
      {
        title: 'Lượt thích',
        dataIndex: 'like',
        render: (value: any) => (
          <Typography
            variant="subtitle2"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            {value}
            <Favorite color="error" />
          </Typography>
        ),
      },
      {
        title: 'Thao tác',
        dataIndex: 'action',
        // render: (value: any) => (
        render: () => (
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
    ],
    [],
  );
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);

  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [selectedItems] = useState<number[]>([]);
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

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <PageContainer>
      <BannerPage title="Quản lý bài viết" items={BCrumb} />
     
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={5} />
        </Grid>
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
                <Grid item >
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                    onClick={() => setIsPopupOpen(true)}

                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid>
                <Grid item >
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
                {column.map((header: any) => {
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

            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(props) => (
                      <CustomTextField
                        {...props}
                        fullWidth
                        size="small"
                        sx={{
                          '& .MuiSvgIcon-root': {
                            width: '18px',
                            height: '18px',
                          },
                          '& .MuiFormHelperText-root': {
                            display: 'none',
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
                tới
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value1}
                    onChange={(newValue) => {
                      setValue1(newValue);
                    }}
                    renderInput={(props) => (
                      <CustomTextField
                        {...props}
                        fullWidth
                        size="small"
                        sx={{
                          '& .MuiSvgIcon-root': {
                            width: '18px',
                            height: '18px',
                          },
                          '& .MuiFormHelperText-root': {
                            display: 'none',
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CustomTable columns={column} dataSource={BlogTable} dataSelect={dataSelect} />

        </Grid>
      </Grid>
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        {/* <DialogTitle padding={'10px'}>Thêm bài viết</DialogTitle> */}
        <DialogContent>
          <AddBlog />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default BlogAdmin;
