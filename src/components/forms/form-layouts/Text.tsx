import React from 'react';
import { Grid, Typography } from '@mui/material';

const Text = () => {
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
                    Luôn lắng nghe yêu cầu và góp ý của bạn để phát triển sản phẩm là sứ mệnh của chúng tôi!
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Text;
