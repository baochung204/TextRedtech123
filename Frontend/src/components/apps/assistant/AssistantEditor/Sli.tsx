import { Box, Button, Chip, Grid, Paper, Slider, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
 // or '@mui/system' if using system-based styling
import DoneIcon from '@mui/icons-material/Done';
// import { styled } from '@mui/material/styles'; 
const valuetext = (value: any) => `${value}`;

const Sli = () => {
  // State để lưu giá trị của các slider
  const [fileCount, setFileCount] = useState<number>(0);
  const [stepFile] = useState<number>(100);
  const [stepStorage] = useState<number>(100000);
  const [storage, setStorage] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);
  const theme = useTheme();
  const handleClick = () => {
    setIsClicked(true);
  };
  // Hàm xử lý khi thay đổi giá trị slider
  const handleFileCountChange = (_event: Event, newValue: number | number[]) => {
    setFileCount(newValue as number);
  };

  const handleStorageChange = (_event: Event, newValue: number | number[]) => {
    setStorage(newValue as number);
  };

  return (
    <>
      <Paper elevation={3} sx={{ minHeight: '5%',mt:2, px: 2, pt:0.1,pb:1.5 }}>
        <Grid container my={2}>
          <Grid item xs={6}>
            <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
              Tài nguyên
            </CustomFormLabel>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
            {' '}
            {/* <Button variant="contained" color="primary" sx={{ p: 0 }}>
              Lưu
            </Button> */}
            <Button
              variant="contained"
              color="inherit"
              size="small"
              component="span"
              style={{ marginBottom: '0px' }}
              onClick={handleClick}
            >
              {isClicked ? <DoneIcon fontSize="small" color='success' style={{ marginRight: '0px' }} /> : 'Lưu'}
            </Button>
          </Grid>
        </Grid>

        <Paper elevation={2} sx={{ minHeight: '4%', p: 2, backgroundColor: theme.palette.info.light }}>
          <Grid container>
            <Grid lg={6}>
              <Box fontWeight={500}>
                Số File tri thức
                <Chip sx={{ ml: 1 }} size="small" label={stepFile - fileCount} color="primary" />
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
              max={stepFile}
            />
          </Box>

          {/* Dung lượng */}
          <Grid container>
            <Grid lg={6}>
              <Box fontWeight={500}>
                Dung lượng
                <Chip sx={{ ml: 1 }} size="small" label={stepStorage-storage +" MB"} color="primary" />
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
              min={0}
              max={stepStorage}
            />
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default Sli;
