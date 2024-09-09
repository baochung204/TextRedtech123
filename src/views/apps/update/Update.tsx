import { Box, Button, Grid, Typography, Chip } from '@mui/material';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const Update = () => {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'FAQ',
    },
  ];

  return (
    <>
      <PageContainer title="Faq" description="this is Faq page">
        {/* breadcrumb */}
        <Breadcrumb title="FAQ" items={BCrumb} />
        {/* end breadcrumb */}
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs={12} style={{ maxWidth: '800px', textAlign: 'center' }}>
            <Box mt={4}>
              <Typography variant="h1" gutterBottom>
                Thông báo & Tính năng mới
              </Typography>
              <Typography variant="h6">
                Thường xuyên theo dõi để cập nhật thông báo và update tính năng mới nhất từ hệ thống
                nhé
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt={4}
            >
              {/* Box chứa thời gian và tiêu đề */}
              <Box display="flex">
                <Typography>07-09-2024</Typography> |
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  Cập nhật tính năng tạo tính cách cho Trợ lý
                </Typography>
              </Box>

              {/* Box chứa Chip */}
              <Box display="flex" justifyContent="center">
                <Chip label="Tính năng mới" color="primary" />
              </Box>
            </Box>

            {/* Nội dung tóm tắt thông báo */}
            <Box mt={4} textAlign="left">
              <Typography>
                Tính năng tạo tính cách Trợ lý cho phép người dùng tạo tính cách cho trợ lý tùy theo
                sở thích và mục đích sử dụng. Điều này sẽ giúp trợ lý hiểu rõ bản thân, ngữ cảnh
                cũng như vai trò, từ đó đưa ra phản hồi hiệu quả hơn trong quá trình giao tiếp với
                người dùng cuối.
                <a href="#"> Xem chi tiết tại đây.</a>
              </Typography>

              {/* Hình ảnh minh họa */}
              <Box mt={2} textAlign="center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxdWzadj_2mepPDtWbspdeQCc080rvQoUlD2MYP_s5wJpUy58PtJpniJ5HGOhMZ5y2fU&usqp=CAU"
                  alt="Tính năng mới"
                  style={{ maxWidth: '100%', height: 'auto', width: '1000px' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Update;
