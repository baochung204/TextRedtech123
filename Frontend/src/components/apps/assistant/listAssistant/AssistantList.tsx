import {
  // Autocomplete,
  // Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconEdit, IconPower, IconSearch, IconStackBack } from '@tabler/icons-react';
import { useState } from 'react';
import Iconchart from 'src/assets/images/chat/chartt.png';
import avt1 from 'src/assets/images/profile/user-1.jpg';
import avt10 from 'src/assets/images/profile/user-10.jpg';
import avt2 from 'src/assets/images/profile/user-2.jpg';
import avt3 from 'src/assets/images/profile/user-3.jpg';
import avt4 from 'src/assets/images/profile/user-4.jpg';
import avt6 from 'src/assets/images/profile/user-6.jpg';
import avt7 from 'src/assets/images/profile/user-7.jpg';
import avt8 from 'src/assets/images/profile/user-8.jpg';
import avt9 from 'src/assets/images/profile/user-9.jpg';
import rank1 from 'src/assets/images/rank/rank1.png';
import rank10 from 'src/assets/images/rank/rank10.png';
import rank2 from 'src/assets/images/rank/rank2.png';
import rank3 from 'src/assets/images/rank/rank3.png';
import rank4 from 'src/assets/images/rank/rank4.png';
import rank6 from 'src/assets/images/rank/rank6.png';
import rank7 from 'src/assets/images/rank/rank7.png';
import rank8 from 'src/assets/images/rank/rank8.png';
import rank9 from 'src/assets/images/rank/rank9.png';
import PageContainer from 'src/components/container/PageContainer';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconArrowUpRight } from '@tabler/icons-react';
// import { useMediaQuery } from '@mui/material';
// import { IconTable } from '@tabler/icons-react';

// import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
// import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
// import components from '../../theme/Components';
import { Link } from 'react-router-dom';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import BlankCard from '../AssistantEditor/BlankCard';
// import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
// import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { SelectChangeEvent } from '@mui/material/Select';

interface sellsData {
  product: string;
  percent: number;
  color: string;
}

const sells: sellsData[] = [
  {
    product: 'Kinh nghiệm',
    percent: 90,
    color: 'secondary',
  },
];
interface Irank {
  id: string;
  rankImage: string;
  avatar: string;
  fullName: string;
  model: string;
  gmv: number;
  aov: number;
  cc: number;
  oc: number;
  ex: number;
  sale: number;
}
const dataRank: Irank[] = [
  {
    id: '0',
    fullName: 'Nguyen Van A',
    rankImage: rank1,
    avatar: avt1,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 20,
  },
  {
    id: '1',
    fullName: 'Nguyen Van B',
    rankImage: rank2,
    avatar: avt2,
    model: 'GTA-2',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 30,
  },
  {
    id: '2',
    fullName: 'Nguyen Van C',
    rankImage: rank3,
    avatar: avt3,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    sale: 25,
    ex: 123002,
  },
  {
    id: '3',
    fullName: 'Nguyen Van D',
    rankImage: rank4,
    avatar: avt4,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 40,
  },
  {
    id: '4',
    fullName: 'Nguyen Van E',
    rankImage: rank4,
    avatar: avt4,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 60,
  },
  {
    id: '5',
    fullName: 'Nguyen Van F',
    rankImage: rank6,
    avatar: avt6,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 60,
  },
  {
    id: '6',
    fullName: 'Nguyen Van G',
    rankImage: rank7,
    avatar: avt7,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 28,
  },
  {
    id: '7',
    fullName: 'Nguyen Van F',
    rankImage: rank8,
    avatar: avt8,
    model: 'GTA-8',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 26,
  },
  {
    id: '8',
    fullName: 'Nguyen Van G',
    rankImage: rank9,
    avatar: avt9,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 36,
  },
  {
    id: '9',
    fullName: 'Nguyen Van H',
    rankImage: rank10,
    avatar: avt10,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 50,
  },
];

const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/buy/point', title: 'Trợ Lý' },
  { to: '/buy/point', title: 'Danh Sách Trợ Lý' },
];
interface FilmsData {
  title: string;
}

const FilmsData: FilmsData[] = [
  { title: 'Tỉ lệ chuyển đổi' },
  { title: 'Cấp Rank' },
  { title: 'Tổng doanh thu' },
];
const AssistantList = () => {
  const theme = useTheme();
  const successlight = theme.palette.success.light;

  const [checkedRanks, setCheckedRanks] = useState<string[]>([]);

  const onHandleCheckOnOrOff = (rank: Irank) => {
    setCheckedRanks((prevChecked) =>
      prevChecked.includes(rank.id)
        ? prevChecked.filter((id) => id !== rank.id)
        : [...prevChecked, rank.id],
    );
  };

  const [selectedItems, setSelectedItems] = useState<string>('');

  const handleChange1 = (event: SelectChangeEvent<string>) => {
    setSelectedItems(event.target.value);
  };

  const handleItemClick1 = (title: string) => {
    if (selectedItems === title) {
      setSelectedItems('');
    } else {
      setSelectedItems(title);
    }
  };
  const [iconIndex, setIconIndex] = useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
    console.log(7 % 7);
  };

  const SelectedIcon = icons[iconIndex];

  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <BannerPage title="Danh sách trợ lý " items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Grid item sm={12} lg={12}>
            <Stack
              direction="row"
              alignItems="center"
              mt={{ xs: 0.5, md: 2 }}
              sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'space-between' }}
            >
              <Box sx={{}}>
                <Typography variant="h3" sx={{ fontSize: { xs: '18px', sm: '20px' } }}>
                  Danh sách trợ lý &nbsp;
                  <Chip label="20" color="secondary" size="small" />
                </Typography>
              </Box>

              <Grid container width={{ sm: 600 }} spacing={1}>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                  }}
                >
                  <IconButton aria-label="filter" sx={{ mr: 1 }}>
                    <Badge badgeContent={selectedItems ? 1 : 0} color="primary">
                      <FilterListIcon />
                    </Badge>
                  </IconButton>
                  <Select
                    value={selectedItems}
                    onChange={handleChange1}
                    displayEmpty
                    renderValue={(selected) => (selected === '' ? 'Bộ Lọc' : `${selectedItems}`)}
                    size="small"
                    style={{ minWidth: 50 }}
                  >
                    {FilmsData.map((film) => (
                      <MenuItem
                        key={film.title}
                        value={film.title}
                        onClick={() => handleItemClick1(film.title)}
                      >
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
                    <SelectedIcon />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
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
              </Grid>
            </Stack>
          </Grid>
          <Grid container mt={2} spacing={2}>
            {dataRank?.map((rank, index) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    p: { xs: 1, sm: 2 },
                    justifyContent: { xs: 'center' },
                    alignItems: { xs: 'center' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      width: { xs: '280px', sm: '370px', md: '420px', lg: '400px' },
                      height: { xs: '260px', sm: '230px', md: '212px', lg: '220px' },
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={rank.rankImage}
                      alt=""
                      sx={{
                        width: '100%',
                        height: '100%',
                        marginTop: { sm: '-70px', md: '-50px', lg: '-50px' },
                        zIndex: 99,
                        position: 'relative',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: '48%', sm: '17%', md: '23%', lg: '25%' },
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        width: { xs: '41%', sm: '40%', md: '42%', lg: '40%' },
                        height: { xs: '41%', sm: '40%', md: '42%', lg: '40%' },
                      }}
                    >
                      <img
                        src={rank.avatar}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: { xs: 1, sm: 2, md: 0.2, lg: '1%' } }}>
                      <Typography
                        variant="h6"
                        mb={0.5}
                        sx={{ fontSize: { xs: '20px', sm: '18px', md: '16px', lg: '18px' } }}
                      >
                        {rank.fullName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={0.5}
                        sx={{
                          fontSize: { xs: '14px', sm: '14px', md: '12px', lg: '14px' },
                          mt: { xs: 1, sm: 1, md: 0.5, lg: 1 },
                        }}
                      >
                        {rank.model}
                      </Typography>
                    </Box>
                    <Grid
                      container
                      columnSpacing={{
                        xs: -1,
                        sm: 2,
                        md: 5,
                        lg: 1,
                      }}
                      sx={{
                        mt: { xs: 1, sm: 1.7, md: 0.5, lg: 1 },
                        mb: { xs: 5 },
                        ml: { xs: 1.8, sm: -2, md: -7, lg: 0 },
                      }}
                    >
                      <Grid item xs={4}>
                        <Button
                          onClick={() => onHandleCheckOnOrOff(rank)}
                          sx={{
                            backgroundColor: checkedRanks.includes(rank.id) ? '#38D955' : '#FF2023',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center',
                            ':hover': {
                              backgroundColor: checkedRanks.includes(rank.id)
                                ? '#38D955'
                                : '#FF2023',
                              boxShadow: 'none',
                            },
                            boxShadow: 'none',
                            color: 'white',
                            fontWeight: '5px 17px',
                            fontSize: '12px',
                            minWidth: 'auto',
                          }}
                        >
                          <IconPower color="white" />
                          {/* {checkedRanks.includes(rank.id) ? 'ON' : 'OFF'} */}
                        </Button>
                      </Grid>

                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          style={{
                            background: '#2196F3',
                            padding: '5px 17px',
                            fontSize: '12px',
                            minWidth: 'auto',
                          }}
                        >
                          <IconEdit color="white" />
                        </Button>
                      </Grid>

                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          style={{
                            background: '#FFC107',
                            padding: '5px 17px',
                            fontSize: '12px',
                            minWidth: 'auto',
                          }}
                          component={Link}
                          to="/apps/assistant/:id"
                        >
                          <IconStackBack stroke={2} />
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ width: '100%', px: 2, py: 1, mt: { xs: 12, sm: 0 } }}>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={12}>
                          <BlankCard>
                            <CardContent sx={{ padding: '18px !important' }}>
                              <Grid container spacing={3} alignItems="center">
                                <Grid item xs={8}>
                                  <Typography variant="h5">Tỉ lệ chuyển đổi</Typography>
                                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                                    <Typography variant="h3" mt={1} fontWeight={600}>
                                      50%
                                    </Typography>
                                    <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                                      <IconArrowUpRight width={20} color="#39B69A" />
                                    </Avatar>
                                    <Typography variant="subtitle2" color="textSecondary">
                                      +9%
                                    </Typography>
                                  </Stack>
                                </Grid>
                                <Grid item xs={4} container justifyContent="flex-end">
                                  <img src={Iconchart} width={50} alt="" />
                                </Grid>
                              </Grid>
                            </CardContent>
                          </BlankCard>
                        </Grid>

                        {/* Nested Grid for Buttons */}
                        <Grid item xs={12} spacing={2}>
                          <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                              <Grid container rowSpacing={1.5}>
                                <Grid item xs={12}>
                                  <Tooltip title="Tổng doanh thu" placement="top">
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      sx={{
                                        width: '100%',
                                        fontSize: { xs: 12, sm: 14, md: 10, lg: 14 },
                                        px: { md: '10px', lg: '15px' },
                                      }}
                                    >
                                      GMV: {rank.gmv}
                                    </Button>
                                  </Tooltip>
                                </Grid>
                                <Grid item xs={12}>
                                  <Tooltip
                                    title="Giá trị trung bình trên một đơn hàng"
                                    placement="top"
                                  >
                                    <Button
                                      variant="outlined"
                                      color="secondary"
                                      sx={{
                                        width: '100%',
                                        fontSize: { xs: 12, sm: 14, md: 10, lg: 14 },
                                        px: { md: '10px', lg: '15px' },
                                      }}
                                    >
                                      AOV: {rank.aov}
                                    </Button>
                                  </Tooltip>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={6} sm={6}>
                              <Grid container rowSpacing={1.5}>
                                <Grid item xs={12}>
                                  <Tooltip title="Số lượng khách hàng" placement="top">
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      sx={{
                                        width: '100%',
                                        fontSize: { xs: 12, sm: 14, md: 10, lg: 14 },
                                        px: { md: '10px', lg: '15px' },
                                      }}
                                    >
                                      CC: {rank.cc}
                                    </Button>
                                  </Tooltip>
                                </Grid>
                                <Grid item xs={12}>
                                  <Tooltip title="Số lượng đơn hàng" placement="top">
                                    <Button
                                      variant="outlined"
                                      color="warning"
                                      sx={{
                                        width: '100%',
                                        fontSize: { xs: 12, sm: 14, md: 10, lg: 14 },
                                        px: { md: '10px', lg: '5px' },
                                      }}
                                    >
                                      OC: {rank.oc}
                                    </Button>
                                  </Tooltip>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Paper
                            sx={{
                              overflow: 'hidden',
                              zIndex: 1,
                              position: 'relative',
                              //   mt: { xs: 1, sm: 3.3, md: 3, lg: 3.3 },
                            }}
                          >
                            <Box sx={{ p: { xs: 2, sm: 2.5, md: 1.7, lg: 2 } }}>
                              <Stack spacing={3}>
                                {sells.map((sell) => (
                                  <Box key={sell.percent}>
                                    <Stack
                                      direction="row"
                                      justifyContent="space-between"
                                      alignItems="center"
                                      sx={{
                                        mb: { sm: 3, md: 3.5, lg: 2 },
                                      }}
                                    >
                                      <Box>
                                        <Typography variant="h6">Kinh nghiệm</Typography>
                                        <Typography variant="subtitle2" color="textSecondary">
                                          {/* {sell.total} */}
                                        </Typography>
                                      </Box>
                                      <Chip
                                        sx={{
                                          backgroundColor: 'primary',
                                          color: 'primary',
                                          borderRadius: '4px',
                                          width: 55,
                                          height: 24,
                                        }}
                                        label={sell.percent + '%'}
                                      />
                                    </Stack>
                                    <LinearProgress
                                      value={sell.percent}
                                      variant="determinate"
                                      color="primary"
                                    />
                                  </Box>
                                ))}
                              </Stack>
                            </Box>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AssistantList;
