import { Box, Chip, Grid, Paper, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

const valuetext = (value: any) => `${value}`;

const Sli = () => {
  // State để lưu giá trị của các slider
  const [fileCount, setFileCount] = useState<number>(30);
  const [storage, setStorage] = useState<number>(30);

  // Hàm xử lý khi thay đổi giá trị slider
  const handleFileCountChange = (_event: Event, newValue: number | number[]) => {
    setFileCount(newValue as number);
  };

  const handleStorageChange = (_event: Event, newValue: number | number[]) => {
    setStorage(newValue as number);
  };

  return (
    <>
      <CustomFormLabel htmlFor="name" sx={{ mt: 1 }}>
        Tài nguyên
      </CustomFormLabel>
      <Paper elevation={2} sx={{ minHeight: '4%', p: 2, backgroundColor: '#fafafa' }}>
        <Grid container>
          <Grid lg={6}>
            <Box fontWeight={500}>
              Số File tri thức
              <Chip sx={{ ml: 1 }} size="small" label="3" color="primary" />
            </Box>
          </Grid>
          <Grid lg={6}>
            <Box mr={1} display={'flex'} justifyContent={'end'}>
              <Typography variant="subtitle2">{fileCount}</Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Số File tri thức */}

        <Box sx={{ width: '99%', mt: 1 }}>
          <Slider
            aria-label="File Count"
            value={fileCount}
            onChange={handleFileCountChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </Box>

        {/* Dung lượng */}
        <Grid container>
          <Grid lg={6}>
            <Box fontWeight={500}>
              Dung lượng
              <Chip sx={{ ml: 1 }} size="small" label="100000MB" color="primary" />
            </Box>
          </Grid>
          <Grid lg={6}>
            <Box mr={1} display={'flex'} justifyContent={'end'}>
              <Typography variant="subtitle2">{storage}MB</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: '99%', mt: 1 }}>
          <Slider
            aria-label="Storage"
            value={storage}
            onChange={handleStorageChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={100000}
          />
        </Box>
      </Paper>
    </>
  );
};

export default Sli;
