// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import {
  Box,
  Typography,
  LinearProgress,
  Tabs,
  Tab,
  Grid,
  Stack,
  Rating,
  Button,
  Paper,
} from '@mui/material';
import { IconPencil } from '@tabler/icons-react';
import ChildCard from 'src/components/shared/ChildCard';

interface ProductCardProps {
  like: number;
  star: number;
  value?: number;
}

interface TabProps {
  children: React.ReactNode;
  index: number;
  value?: number;
}

// progress
function ProgressBar({ like, star, value, ...others }: ProductCardProps) {
  return (
    <Box display={'flex'} alignItems="center" gap="20px">
      <Box sx={{ minWidth: 50 }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(star)} Stars`}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress value={value} variant="determinate" color="primary" {...others} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle2">{`(${Math.round(like)})`}</Typography>
      </Box>
    </Box>
  );
}

const TabPanel = (props: TabProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ProductDesc = () => {
  const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ChildCard>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            allowScrollButtonsMobile
            scrollButtons
            indicatorColor="primary"
          >
            <Tab label="Mô tả" {...a11yProps(0)} />
            <Tab label="Đánh giá" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ------------------------------------------- */}
        {/* Decription */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={0}>
          <Typography variant="h5">
            "Nhưng tại sao lại như vậy? Hãy sống trong sự ghét bỏ, sự kết hợp với các loại hình từ, chọn lựa từ lạc vào các loại hình khác."
          </Typography>
          <Typography color="textSecondary" mt={4}>
          Thực hiện các bước bằng cách giữ vững chất lượng, kết hợp các thành phần khác. Không có gì có thể làm giảm đi sự ảnh hưởng. Hiện tại đang được sử dụng trong các lĩnh vực khác nhau. Đảm bảo duy trì sự chính xác.

          </Typography>
          <Typography color="textSecondary" variant="body1" fontWeight={400} mt={4}>
            "Sống với sự hiệu quả hiện tại. Nếu bạn làm việc với sự chính xác, tạo ra sự phát triển tối ưu. Giữ cho các yêu cầu được đặt ra, và tạo ra sự kết hợp tối ưu."
          </Typography>
        </TabPanel>
        {/* ------------------------------------------- */}
        {/* Reviews Tab */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {/* ------------------------------------------- */}
            {/* Average Rate Tab */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ height: '100%', p: 3 }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Typography variant="subtitle1">Đánh giá trung bình</Typography>
                  <Typography variant="h1" color="primary" fontWeight={600}>
                    4/5
                  </Typography>
                  <Rating name="rate" value={4} />
                </Stack>
              </Paper>
            </Grid>
            {/* ------------------------------------------- */}
            {/* Progrees Rate Tab */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                  <Grid item xs={12}>
                    <ProgressBar star={1} value={45} like={485} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={2} value={25} like={215} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={3} value={20} like={110} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={4} value={80} like={620} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={5} value={12} like={160} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* ------------------------------------------- */}
            {/* Button */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper sx={{ height: '100%', p: 3 }} variant="outlined">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Button variant="outlined" size="large" startIcon={<IconPencil />}>
                  Viết Đánh giá
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
