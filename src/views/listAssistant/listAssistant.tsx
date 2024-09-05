// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import {
  CardContent,
  Typography,
  Grid,
  IconButton,
  Divider,
  Avatar,
  Box,
  Stack,
  Skeleton,
  Chip,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
} from '@tabler/icons-react';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import BlankCard from 'src/components/shared/BlankCard';
import PageContainer from 'src/components/container/PageContainer';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import FollowerCard from 'src/components/widgets/cards/FollowerCard';
import { IconSearch } from '@tabler/icons-react';
import { IconPlayerPlay } from '@tabler/icons-react';
// import BlankCard from '../../shared/BlankCard';
import rank1 from 'src/assets/images/rank/rank.png';

interface SocialIcon {
  name: string;
  icon: JSX.Element;
}

interface ProfileCard {
  name: string;
  role: string;
  avatar: string;
}

const SocialIcons: SocialIcon[] = [
  {
    name: 'Facebook',
    icon: <IconBrandFacebook size="18" color="#1877F2" />,
  },
  {
    name: 'Instagram',
    icon: <IconBrandInstagram size="18" color="#D7336D" />,
  },
  {
    name: 'Github',
    icon: <IconBrandGithub size="18" color="#006097" />,
  },
  {
    name: 'Twitter',
    icon: <IconBrandTwitter size="18" color="#1C9CEA" />,
  },
];

const profileCard: ProfileCard[] = [
  {
    name: 'Andrew Grant',
    role: 'Technology Director',
    avatar: img1,
  },
  {
    name: 'Leo Pratt',
    role: 'Telecom Analyst',
    avatar: img2,
  },
  {
    name: 'Charles Nunez',
    role: 'Environmental Specialist',
    avatar: img3,
  },
];

const ListAssistant = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

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
              mt={2}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h3">
                  Trợ lý &nbsp;
                  <Chip label="20" color="secondary" size="small" />
                </Typography>
              </Box>
              <Box
                sx={{
                  ml: { xs: 'auto', sm: 0 }, // Dịch chuyển về phải trên màn hình xs
                  width: { xs: '50%', sm: 'auto' }, // Tùy chọn chiều rộng trên màn hình xs
                }}
              >
                <TextField
                  id="outlined-search"
                  placeholder="Search Followers"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="14" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid container spacing={3} mt={2}>
            {/* {profileCard.map((card, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <BlankCard>
                  <CardContent>
                    <Stack direction={'column'} gap={2} alignItems="center">
                      {isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width="100%"
                          height={160}
                        ></Skeleton>
                      ) : (
                        <Avatar
                          alt="Remy Sharp"
                          src={card.avatar}
                          sx={{ width: '80px', height: '80px' }}
                        />
                      )}
                      <Box textAlign={'center'}>
                        <Typography variant="h5">{card.name}</Typography>
                        <Typography variant="caption">{card.role}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                  <Divider />
                  <Box
                    p={2}
                    py={1}
                    textAlign={'center'}
                    sx={{
                      backgroundColor:
                        theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'grey.100',
                    }}
                  >
                    {SocialIcons.map((sicon) => {
                      return <IconButton key={sicon.name}>{sicon.icon}</IconButton>;
                    })}
                  </Box>
                </BlankCard>
              </Grid>
            ))} */}

            <Grid item xs={12} sm={4}>
              <Card sx={{ display: 'flex', p: 0 }}>
                <Box>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-block',
                      width: { xs: '110px', sm: '110px', md: '150px', lg: '190px' },
                      height: { xs: '130px', sm: '130px', md: '180px', lg: '220px' },
                    }}
                  >
                    <img src={rank1} alt="" style={{ width: '100%', height: '100%' }} />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '37%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        width: { xs: '65px', sm: '65px', md: '85px', lg: '105px' },
                        height: { xs: '65px', sm: '65px', md: '85px', lg: '105px' },
                        border: '3px solid white',
                      }}
                    >
                      <img
                        src="https://picsum.photos/300/300"
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo hình ảnh vừa khít khung
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" mb={0.5}>
                      Nguyen Van A
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={0.5}>
                      456-485-5623
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" mb={0.5}>
                      Nguyen Van A
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={0.5}>
                      456-485-5623
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="success">
                      Sửa
                    </Button>
                    <Button variant="contained" color="error">
                      Xóa
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ListAssistant;
