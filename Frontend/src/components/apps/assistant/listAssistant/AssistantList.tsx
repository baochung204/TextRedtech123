import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import avt from 'src/assets/images/icon/avt.jpg';
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
  Fab,
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
import { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import {
  IconArrowUpRight,
  IconEdit,
  IconPower,
  IconSearch,
  IconStackBack,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Iconchart from 'src/assets/images/chat/chartt.png';
import BlankCard from '../AssistantEditor/BlankCard';
import TableData from './data/data';
import AlertChat from '../../chats/AlertChat';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface FilmsData {
  title: string;
}

const FilmsData: FilmsData[] = [
  { title: 'Tỉ lệ chuyển đổi' },
  { title: 'Cấp Rank' },
  { title: 'Tổng doanh thu' },
];
const ListAssistant = () => {
  const theme = useTheme();
  const successlight = theme.palette.success.light;
  const [checkedRanks, setCheckedRanks] = useState<string[]>([]);
  const [alertText, setAlertText] = useState('');

  const onHandleCheckOnOrOff = (rank: any) => {
    setCheckedRanks((prevChecked) => {
      const isRankChecked = prevChecked.includes(rank.id);
      setAlertText(isRankChecked ? 'tắt' : 'bật'); // Set alert text based on rank status
      setOpenChartAlert(true);
      return isRankChecked ? prevChecked.filter((id) => id !== rank.id) : [...prevChecked, rank.id];
    });
  };
  const [openChartAlert, setOpenChartAlert] = useState(false);
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

  const handleCloseAlert = () => {
    setOpenChartAlert(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} lg={12}>
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
            <Tooltip title="Thêm">
              <Link to={`/apps/assistant/add`}>
                <IconButton color="primary" aria-label="Add to cart">
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Link>
            </Tooltip>
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
            xs={6}
            sm={6}
            md={8}
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
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Grid container spacing={2}>
          {TableData?.map((rank, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center' },
                  alignItems: { xs: 'center' },
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70%',
                    px: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={rank.rankImage}
                    alt=""
                    sx={{
                      maxWidth: '250px',
                      height: '200px',
                      zIndex: 99,
                      position: 'relative',
                    }}
                  />
                  <Box
                    component="img"
                    src={avt}
                    sx={{
                      position: 'absolute',
                      top: { xs: '32.8%', sm: '32.8%', md: '33.4%', lg: '33.1%' },
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      height: { xs: '43%', sm: '42.4%', md: '43%', lg: '42.4%' },
                      border: '3px solid #fff',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  />

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      mb={1}
                      mt={1.3}
                      sx={{ fontSize: { xs: '20px', sm: '18px', md: '16px', lg: '16px' } }}
                    >
                      {rank.fullName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={0.5}
                      sx={{
                        fontSize: { xs: '14px', sm: '14px', md: '12px', lg: '14px' },
                      }}
                    >
                      {rank.model}
                    </Typography>
                  </Box>
                  <Grid
                    container
                    columnSpacing={{ xs: -1, sm: 2, md: 2, lg: 1 }}
                    sx={{
                      mt: { xs: 1, sm: 1.7, md: 0.5, lg: 1 },
                      mb: { xs: 1 },
                      ml: { xs: 1.8, sm: 1, md: -2, lg: 1 },
                    }}
                  >
                    <Grid item xs={4}>
                      <Button
                        onClick={() => onHandleCheckOnOrOff(rank)}
                        sx={{
                          backgroundColor: checkedRanks.includes(rank.id) ? '#38D955' : '#FF2023',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          ':hover': {
                            backgroundColor: checkedRanks.includes(rank.id) ? '#38D955' : '#FF2023',
                            boxShadow: 'none',
                          },
                          boxShadow: 'none',
                          color: 'white',
                          padding: '2px 12px',
                          fontSize: '12px',
                          minWidth: 'auto',
                        }}
                      >
                        <IconPower color="white" />
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#2196F3',
                          padding: '2px 12px',
                          fontSize: '12px',
                          minWidth: 'auto',
                          ':hover': { backgroundColor: '#1976D2' },
                        }}
                      >
                        <IconEdit color="white" />
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#FFC107',
                          padding: '2px 12px',
                          fontSize: '12px',
                          minWidth: 'auto',
                          ':hover': { backgroundColor: '#FFB300' },
                        }}
                        component={Link}
                        to={`/apps/assistant/${rank.id}`}
                      >
                        <IconStackBack stroke={2} />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ width: '100%', mt: { xs: 1, sm: 0 } }}>
                  <Box>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12}>
                        <BlankCard>
                          <CardContent sx={{ padding: '18px !important' }}>
                            <Grid container spacing={3} alignItems="center">
                              <Grid item xs={8}>
                                <Typography variant="h6">Tỉ lệ chuyển đổi</Typography>
                                <Stack direction="row" spacing={1} mt={1} alignItems="center">
                                  <Typography variant="h4" mt={1} fontWeight={600}>
                                    50%
                                  </Typography>
                                  <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                                    <IconArrowUpRight width={20} color="#39B69A" />
                                  </Avatar>
                                </Stack>
                              </Grid>
                              <Grid item xs={4} container justifyContent="flex-end">
                                <img src={Iconchart} width={50} alt="" />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </BlankCard>
                      </Grid>
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
                                      fontSize: { xs: 12, sm: 14, md: 10, lg: 12 },
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
                                      fontSize: { xs: 12, sm: 14, md: 10, lg: 12 },
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
                                      fontSize: { xs: 12, sm: 14, md: 10, lg: 12 },
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
                                      fontSize: { xs: 12, sm: 14, md: 10, lg: 12 },
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
                              <Box>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  sx={{
                                    mb: { xs: 2, sm: 3, md: 3.5, lg: 2 },
                                  }}
                                >
                                  <Box>
                                    <Typography variant="h6">Kinh nghiệm</Typography>
                                  </Box>
                                  <Chip
                                    sx={{
                                      backgroundColor: 'primary',
                                      color: 'primary',
                                      borderRadius: '4px',
                                      width: 55,
                                      height: 24,
                                    }}
                                    label={`${rank.sale}%`}
                                  />
                                </Stack>
                                <LinearProgress
                                  value={rank.sale}
                                  variant="determinate"
                                  color="primary"
                                />
                              </Box>
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
      <AlertChat
        handleClose={handleCloseAlert}
        openChartAlert={openChartAlert}
        text={`Bạn đã ${alertText} trợ lý`}
      />
    </Grid>
  );
};

export default ListAssistant;
