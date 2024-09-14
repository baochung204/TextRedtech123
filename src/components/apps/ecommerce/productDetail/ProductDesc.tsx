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
            <Tab label="Thông tin chi tiết" {...a11yProps(0)} />
            <Tab label="Hướng dẫn sử dụng" {...a11yProps(1)} />
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
            {/* Section 1: Introduction */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Hướng dẫn sử dụng cơ bản Chatbot
              </Typography>
              <Typography variant="body1">
                Chatbot này được thiết kế để hỗ trợ bạn trong việc trả lời các câu hỏi cơ bản và
                cung cấp thông tin. Bạn có thể bắt đầu sử dụng chatbot bằng cách nhập câu hỏi của
                mình vào hộp chat, và chatbot sẽ trả lời ngay lập tức.
              </Typography>
            </Grid>

            {/* Section 2: Cách tương tác với Chatbot */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Cách tương tác với Chatbot
              </Typography>
              <Typography variant="body1">Bạn có thể hỏi chatbot về các chủ đề sau:</Typography>
              <ul>
                <li>Các câu hỏi chung (ví dụ: "Giờ làm việc của công ty là gì?")</li>
                <li>Các câu hỏi về dịch vụ (ví dụ: "Làm thế nào để đặt lại mật khẩu?")</li>
                <li>Các hướng dẫn sử dụng (ví dụ: "Hướng dẫn tôi cách sử dụng hệ thống.")</li>
              </ul>
            </Grid>

            {/* Section 3: Các tính năng nâng cao */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Các tính năng nâng cao
              </Typography>
              <Typography variant="body1">
                Ngoài việc trả lời các câu hỏi cơ bản, chatbot còn có thể hỗ trợ:
              </Typography>
              <ul>
                <li>Cung cấp các hướng dẫn chi tiết từng bước.</li>
                <li>Đưa ra gợi ý khắc phục sự cố cho các vấn đề phổ biến.</li>
                <li>Hướng dẫn bạn quản lý tài khoản và các tác vụ khác.</li>
              </ul>
            </Grid>

            {/* Section 4: Kết luận */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Kết luận
              </Typography>
              <Typography variant="body1">
                Chúng tôi hy vọng hướng dẫn này sẽ giúp bạn sử dụng chatbot một cách hiệu quả. Nếu
                bạn gặp bất kỳ vấn đề gì hoặc cần thêm hỗ trợ, đừng ngần ngại hỏi chatbot nhé!
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
