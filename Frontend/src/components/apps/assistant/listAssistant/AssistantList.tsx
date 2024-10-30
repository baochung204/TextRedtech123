import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
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
import { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import {
  IconArrowUpRight,
  IconEdit,
  IconPower,
  IconSearch,
  IconStackBack,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconCrv from 'src/assets/ICON/cvr.png';
import { PropsDataAssisstant } from 'src/store/Interface/user/assisstant/PropsAssisstant';
import { setSelectedCategory } from 'src/store/RouterSlice';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchAssistantData } from 'src/store/user/chatbots/assisstantUserSlice';
import AlertChat from '../../chats/AlertChat';

interface FilmsData {
  id: number;
  name: string;
  title: string;
}

const FilmsData: FilmsData[] = [
  { id: 1, name: 'customer', title: 'Khách hàng' },
  { id: 2, name: 'aov', title: 'AOV' },
  { id: 3, name: 'convert', title: 'Chuyển đổi' },
  { id: 4, name: '', title: 'Đặt lại' },
];

const ListAssistant = () => {
  const theme = useTheme();
  const successlight = theme.palette.success.light;
  const [checkedRanks, setCheckedRanks] = useState<string[]>([]);
  const [alertText, setAlertText] = useState('');
  const assistant = useSelector((state: AppState) => state.assisstant.dataa);
  const [assistantData, setAssisstantData] = useState<PropsDataAssisstant[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortDir, setSortDir] = useState<boolean>(true);
  useEffect(() => {
    dispatch(fetchAssistantData({ sort_by: sortBy, sort_dir: sortDir }));
  }, [dispatch, sortBy, sortDir]);
  useEffect(() => {
    if (assistant !== assistantData) {
      setAssisstantData(assistant);
    }
  }, [assistant, assistantData]);
  const onHandleCheckOnOrOff = (rank: any) => {
    setCheckedRanks((prevChecked) => {
      const isRankChecked = prevChecked.includes(rank.id);
      setAlertText(isRankChecked ? 'tắt' : 'bật');
      setOpenChartAlert(true);
      return isRankChecked ? prevChecked.filter((id) => id !== rank.id) : [...prevChecked, rank.id];
    });
  };
  const [openChartAlert, setOpenChartAlert] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string>('');
  const handleChange1 = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'Đặt lại') {
      setSelectedItems('');
      setSortBy('');
    } else {
      setSelectedItems(selectedValue);
    }
  };

  const handleItemClick1 = (film: FilmsData) => {
    if (film.name !== '') {
      setSelectedItems(film.title);
      setSortBy(film.name);
    }
  };
  console.log('123132', selectedItems);

  // const [iconIndex, setIconIndex] = useState<number>(0);
  // const icons = [SwapVertIcon, SouthIcon, NorthIcon];
  // const handleClickIcon = () => {
  //   setIconIndex((pre) => (pre + 1) % icons.length);
  //   setSortDir(!sortDir);
  // };
  const [sortIconIndex, setSortIconIndex] = useState<number>(0);
  const icons = [NorthIcon, SouthIcon];
  const handleClickIcon = () => {
    setSortIconIndex((prevIndex) => (prevIndex + 1) % 2);
    // setSortDir((prevDir) => (prevDir === null ? true : prevDir === true ? false : null));
    setSortDir(!sortDir);
  };
  console.log('sort', sortDir);

  const SelectedIcon = icons[sortIconIndex];
  // const SelectedIcon = icons[iconIndex];
  const handleCloseAlert = () => {
    setOpenChartAlert(false);
  };
  const handleClickSelect = () => {
    dispatch(setSelectedCategory('assistant_pack'));
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
              <Link to={`/shops`}>
                <IconButton color="primary" aria-label="Add to cart" onClick={handleClickSelect}>
                  <AddCircleIcon sx={{ fontSize: 40 }} />
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
              <Badge badgeContent={selectedItems === '' ? 0 : 1} color="primary">
                <FilterListIcon />
              </Badge>
            </IconButton>
            <Select
              value={selectedItems}
              onChange={handleChange1}
              displayEmpty
              renderValue={(selected) => (selected === '' ? 'Bộ Lọc' : `${selectedItems}`)}
              size="small"
              sx={{ width: 150 }}
            >
              {FilmsData.map((film) => (
                <MenuItem key={film.id} value={film.title} onClick={() => handleItemClick1(film)}>
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
          {Array.isArray(assistantData) &&
            assistantData.map((rank, index) => (
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
                      src={rank.badgeUrl}
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
                      src={rank.avatar}
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
                        {rank.chatbotName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={0.5}
                        sx={{
                          fontSize: { xs: '14px', sm: '14px', md: '12px', lg: '14px' },
                        }}
                      >
                        {rank.modelName}
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
                          onClick={() => {
                            onHandleCheckOnOrOff(rank);
                          }}
                          sx={{
                            // backgroundColor: checkedRanks.includes(`${rank.chatbotId}`)
                            backgroundColor: checkedRanks.includes(`${index}`)
                              ? '#38D955'
                              : '#FF2023',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            ':hover': {
                              // backgroundColor: checkedRanks.includes(`${rank.chatbotId}`)
                              backgroundColor: checkedRanks.includes(`${index}`)
                                ? '#38D955'
                                : '#FF2023',
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
                          component={Link}
                          to={`/assistants/edit/${rank.chatbotId}`}
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
                          // to={`/assistants/detail/${rank.chatbotId}`}
                          to={`/assistants/detail/${rank?.chatbotId}`}
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
                          <CardContent sx={{ padding: '18px !important' }}>
                            <Grid container spacing={3} alignItems="center">
                              <Grid item xs={8}>
                                <Typography variant="h6">Tỉ lệ chuyển đổi</Typography>
                                <Stack direction="row" spacing={1} mt={1} alignItems="center">
                                  <Typography variant="h4" mt={1} fontWeight={600}>
                                    {rank.conversionRate}
                                  </Typography>
                                  <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                                    <IconArrowUpRight width={20} color="#39B69A" />
                                  </Avatar>
                                </Stack>
                              </Grid>
                              <Grid item xs={4} container justifyContent="flex-end" sx={{ px: 2 }}>
                                <img src={IconCrv} width={50} alt="" />
                              </Grid>
                            </Grid>
                          </CardContent>
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
                                      Khách hàng: {rank.customer}
                                    </Button>
                                  </Tooltip>
                                </Grid>
                                <Grid item xs={12}>
                                  <Tooltip title="Số lượng chuyển đổi" placement="top">
                                    <Button
                                      variant="outlined"
                                      color="warning"
                                      sx={{
                                        width: '100%',
                                        fontSize: { xs: 12, sm: 14, md: 10, lg: 12 },
                                        px: { md: '10px', lg: '5px' },
                                      }}
                                    >
                                      Chuyển đổi : {rank.conversion}
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
                                {/* <Box>
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
                                      label={`${rank.exp}%`}
                                    />
                                  </Stack>
                                  <LinearProgress
                                    value={rank.expMax}
                                    variant="determinate"
                                    color="primary"
                                  />
                                </Box> */}
                                <Stack spacing={3}>
                                  <Box>
                                    <Stack
                                      direction="row"
                                      mb={2}
                                      justifyContent="space-between"
                                      alignItems="center"
                                    >
                                      <Box>
                                        <Typography variant="h6">Kinh nghiệm</Typography>
                                        {/* <Typography variant="subtitle2" color="textSecondary">
                        {`EXP Max: ${rank?.expMax || 0}`}
                      </Typography> */}
                                      </Box>
                                      <Chip
                                        sx={{
                                          backgroundColor: (theme) => theme.palette.primary.main,
                                          color: (theme) => theme.palette.primary.contrastText,
                                          borderRadius: '4px',
                                          width: 'auto',
                                          height: 24,
                                        }}
                                        label={`${
                                          rank?.exp && rank?.expMax
                                            ? Math.floor((rank.exp / rank.expMax) * 100) ===
                                              (rank.exp / rank.expMax) * 100
                                              ? (rank.exp / rank.expMax) * 100
                                              : ((rank.exp / rank.expMax) * 100).toFixed(1)
                                            : 0
                                        }%`}
                                      />
                                    </Stack>
                                    <LinearProgress
                                      variant="determinate"
                                      value={
                                        rank?.exp && rank?.expMax
                                          ? (rank.exp / rank.expMax) * 100
                                          : 0
                                      }
                                      sx={{
                                        height: 5,
                                        borderRadius: 5,
                                        backgroundColor: (theme) => theme.palette.grey[300],
                                        '& .MuiLinearProgress-bar': {
                                          borderRadius: 5,
                                          backgroundColor: 'red',
                                        },
                                      }}
                                    />
                                  </Box>
                                </Stack>
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
