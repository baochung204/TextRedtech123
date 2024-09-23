import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const Update = () => {
  const [expanded, setExpanded] = useState(false);

  const BCrumb = [
    {
      to: '/',
      title: 'Trang Chủ',
    },
    {
      title: 'Cập Nhật',
    },
  ];

  const handleChipClick = () => {
    setExpanded(!expanded);
  };

  return (
    <PageContainer title="Faq" description="this is Faq page">
      {/* breadcrumb */}
      <BannerPage title="Cập nhật" items={BCrumb} />
      {/* end breadcrumb */}
      <Box mt={4}>
        <Box mb={4} textAlign="center">
          <Typography variant="h1" gutterBottom>
            Thông báo & Tính năng mới
          </Typography>
          <Typography variant="h6">
            Thường xuyên theo dõi để cập nhật thông báo và update tính năng mới nhất từ hệ thống nhé
          </Typography>
        </Box>

        {/* Accordion that is controlled by Chip */}
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ display: 'flex', alignItems: 'center' }} // Ensure the content is aligned
          >
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1, display: { xs: 'none', md: 'block' } }}>
                07-09-2024 |
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                Cập nhật tính năng tạo tính cách cho Trợ lý
              </Typography>
            </Box>

            <Box sx={{ ml: 2 }}>
              <Chip
                label="Tính năng mới"
                color="primary"
                onClick={handleChipClick}
                sx={{ cursor: 'pointer' }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box mb={4} textAlign="start">
              <Typography>
                Tính năng tạo tính cách Trợ lý cho phép người dùng tạo tính cách cho trợ lý tùy theo
                sở thích và mục đích sử dụng. Điều này sẽ giúp trợ lý hiểu rõ bản thân, ngữ cảnh
                cũng như vai trò, từ đó đưa ra phản hồi hiệu quả hơn trong quá trình giao tiếp với
                người dùng cuối.
                <a href="#"> Xem chi tiết tại đây.</a>
              </Typography>
              <Box mt={2} textAlign="center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxdWzadj_2mepPDtWbspdeQCc080rvQoUlD2MYP_s5wJpUy58PtJpniJ5HGOhMZ5y2fU&usqp=CAU"
                  alt="Tính năng mới"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </PageContainer>
  );
};

export default Update;
