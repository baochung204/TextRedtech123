// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import {
  Box,
  Grid,
  LinearProgress,
  Paper,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import ChildCard from 'src/components/shared/ChildCard';
import StarIcon from '../../../../assets/images/icon.png/star.png';

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
        <Typography
          variant="body2"
          color="textSecondary"
          display={'flex'}
          alignItems={'center'}
          gap={'3px'}
        >
          <span>{`${Math.round(star)}`}</span>{' '}
          <img src={StarIcon} alt="" width={20} style={{ paddingBottom: '5px' }} />
        </Typography>
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
  const [star, setStar] = React.useState<number | null>(2);
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
            Superintelligent AI là một dạng trí tuệ nhân tạo (AI) có khả năng vượt xa con người
            trong mọi lĩnh vực
          </Typography>
          <Typography color="textSecondary" mt={4}>
            Thực hiện các bước bằng cách giữ vững chất lượng dự đoán sẽ có khả năng tự học và cải
            thiện bản thân không giới hạn, khiến nó trở nên thông minh hơn bất kỳ bộ não con người
            nào. Superintelligent AI có thể tạo ra những tiến bộ vượt bậc về khoa học, y tế và công
            nghệ, nhưng cũng đặt ra nhiều thách thức và rủi ro, đặc biệt là nếu không được kiểm soát
            đúng cách.
          </Typography>
          <Typography color="textSecondary" variant="body1" fontWeight={400} mt={4}>
            Không chỉ có khả năng xử lý thông tin nhanh hơn con người mà còn có thể đưa ra các quyết
            định sáng suốt hơn, tính toán các kịch bản phức tạp với độ chính xác cao và dự đoán
            tương lai tốt hơn. Nó có tiềm năng tự phát triển, sáng tạo ra công nghệ và tri thức mới
            mà con người chưa từng nghĩ đến. Tuy nhiên, sự phát triển này cũng tiềm ẩn nguy cơ nếu
            Superintelligent AI hành động ngoài tầm kiểm soát hoặc có mục tiêu không phù hợp với lợi
            ích của con người, gây ra các mối đe dọa về an ninh, kinh tế và đạo đức
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
            <Grid item xs={12} lg={6}>
              <Paper variant="outlined" sx={{ height: '100%', p: 3 }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Typography variant="subtitle1">Đánh giá trung bình</Typography>
                  <Typography variant="h1" color="primary" fontWeight={600}>
                    {star}/5
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={star}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onChange={(event, newValue) => {
                      setStar(newValue);
                    }}
                  />
                </Stack>
              </Paper>
            </Grid>
            {/* ------------------------------------------- */}
            {/* Progrees Rate Tab */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={6}>
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
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
