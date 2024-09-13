
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconEdit, IconPower, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
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
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import PageContainer from 'src/components/container/PageContainer';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Props } from 'react-apexcharts';

// import { useMediaQuery } from '@mui/material';
import { IconTable } from '@tabler/icons-react';
import Chart from 'react-apexcharts';
import icon1 from 'src/assets/images/svgs/icon-bars.svg';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import DashboardCard from 'src/components/shared/DashboardCard';
// import components from '../../theme/Components';
import { Link } from 'react-router-dom';
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
interface ITopRank {
  title: string;
}
const top10rank: ITopRank[] = [
  { title: 'Rank 1' },
  { title: 'Rank 2' },
  { title: 'Rank 3' },
  { title: 'Rank 4' },
  { title: 'Rank 5' },
  { title: 'Rank 6' },
  { title: 'Rank 7' },
  { title: 'Rank 8' },
  { title: 'Rank 9' },
  { title: 'Rank 10' },
];

const ListAssistant = () => {
  const theme = useTheme();
  // Removed unused isLoading state
  // chart color
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: Props = {
    chart: {
      type: 'area',
      height: 25,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    colors: [secondary],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    fill: {
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [0, 10, 10, 10, 35, 45, 30, 30, 30, 50, 52, 30, 25, 45, 50, 80, 60, 65],
    },
  ];

  // Removed useEffect that sets isLoading state
  const [checkedRanks, setCheckedRanks] = useState<string[]>([]);

  const onHandleCheckOnOrOff = (rank: Irank) => {
    setCheckedRanks((prevChecked) =>
      prevChecked.includes(rank.id)
        ? prevChecked.filter((id) => id !== rank.id)
        : [...prevChecked, rank.id],
    );
  };

  // const iconFontSize = isXs ? '20px' : isSm ? '25px' : '20px';

  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
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
              <Grid
                container
                spacing={2}
                my={{ xs: '2px', sm: 0 }}
                display={{ sm: 'flex' }}
                width={{ sm: 600 }}
              >
                <Grid item xs={6} sm={6} md={6}>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top10rank}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <CustomCheckbox style={{ marginRight: 8 }} checked={selected} />
                        {option.title}
                      </li>
                    )}
                    fullWidth
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        placeholder="Lọc xếp hạng"
                        aria-label="Favorites"
                      />
                    )}
                    size="small"
                    sx={{
                      fontSize: { xs: '10px', sm: '16px' },
                      width: { xs: '150px' },
                      ml: 'auto',
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
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
                            backgroundColor: checkedRanks.includes(rank.id) ? '#AE00FF' : '#BDBDBD',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center',
                            ':hover': {
                              backgroundColor: checkedRanks.includes(rank.id)
                                ? '#AE00FF'
                                : '#BDBDBD',
                              boxShadow: 'none',
                            },
                            boxShadow: 'none',
                          }}
                        >
                          <IconPower color="white" />
                        </Button>
                      </Grid>

                      <Grid item xs={4}>
                        <Button variant="contained" color="primary">
                          <IconEdit color="white" />
                        </Button>
                      </Grid>

                      <Grid item xs={4}>
                        <Button variant="contained" color="error" component={Link} to="/apps/list-assistant">
                          <IconTable fontSize={20} />
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ width: '100%', px: 2, py: 1, mt: { xs: 12, sm: 0 } }}>
                    <Box>
                      <Grid container columnSpacing={2} sx={{}}>
                        <Grid item xs={6} sm={6} md={6}>
                          <DashboardCard>
                            <Box sx={{ pb: 0 }}>
                              <Box
                                bgcolor="secondary.light"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                  width: { xs: '30px', sm: '30px', md: '25px', lg: '40px' },
                                  height: { xs: '30px', sm: '30px', md: '25px', lg: '40px' },
                                }}
                              >
                                <Avatar
                                  src={icon1}
                                  alt="img"
                                  sx={{
                                    width: { xs: '20px', md: '20px' },
                                    height: { xs: '20px', md: '20px' },
                                  }}
                                />
                              </Box>

                              <Typography
                                variant="h4"
                                sx={{
                                  display: { xs: 'block', sm: 'flex' },
                                  fontSize: { md: 18, lg: 21 },
                                }}
                              >
                                {rank.sale}%
                                <span>
                                  <IconArrowUpRight width={18} color="#39B69A" />
                                </span>
                              </Typography>

                              <Typography
                                variant="subtitle2"
                                color="textSecondary"
                                sx={{ display: { xs: 'block', sm: 'block' } }}
                              >
                                CRB
                              </Typography>
                              <Box
                                sx={{
                                  display: { xs: 'block', sm: 'block' },
                                  mt: { xs: 0.7, sm: 4, md: 1.4, lg: 3 },
                                }}
                              >
                                <Chart
                                  options={optionscolumnchart}
                                  series={seriescolumnchart}
                                  type="area"
                                  height="25px"
                                />
                              </Box>
                            </Box>
                          </DashboardCard>
                        </Grid>

                        <Grid item xs={6} sm={6} spacing={2}>
                          <Grid container rowSpacing={{ xs: 1.1, sm: 1.7 }}>
                            <Grid item xs={12} sm={12}>
                              <Tooltip title="Tổng giá trị hàng hóa" placement="top">
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
                            <Grid item xs={12} sm={12}>
                              <Tooltip title="Giá trị trung bình trên một đơn hàng" placement="top">
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
                            <Grid item xs={12} sm={12}>
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
                            <Grid item xs={12} sm={12}>
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
                                  OC:{rank.oc}
                                </Button>
                              </Tooltip>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Paper
                        sx={{
                          overflow: 'hidden',
                          zIndex: '1',
                          position: 'relative',
                          mt: { xs: 1, sm: 3.3, md: 3, lg: 3.3 },
                        }}
                      >
                        <Box sx={{ p: { xs: 2, sm: 2.5, md: 1.7, lg: 2 } }}>
                          <Stack spacing={3}>
                            {sells.map((sell) => (
                              <Box>
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

export default ListAssistant;
