import React from 'react';
import { Grid, Typography } from '@mui/material';

const FrameworksTitle = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10} lg={8}>
                <Typography 
                    variant="h2" 
                    fontWeight={700} 
                    textAlign="center" 
                    sx={{
                        fontSize: {
                            lg: '36px',
                            xs: '25px'
                        },
                        lineHeight: {
                            lg: '43px',
                            xs: '30px'
                        },
                        mb: 1, // Giảm khoảng cách dưới tiêu đề đầu tiên
                        color: 'text.primary'
                    }}
                >
                    "Ưu điểm của Redtech AIVoice"
                </Typography>
                <Typography 
                    variant="h2" 
                    fontWeight={700} 
                    textAlign="center" 
                    sx={{
                        fontSize: {
                            lg: '36px',
                            xs: '25px'
                        },
                        lineHeight: {
                            lg: '43px',
                            xs: '30px'
                        },
                        mt: -1, // Đẩy tiêu đề thứ hai lên trên một chút
                        color: 'text.secondary'
                    }}
                >
                    Nâng tầm nội dung với công nghệ giọng nói AI tiên tiến
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FrameworksTitle;
