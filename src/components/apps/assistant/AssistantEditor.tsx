// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Button,
  SliderValueLabelProps,
  Stack,
  IconButton,
  Popover,
  InputBase
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomSlider from 'src/components/forms/theme-elements/CustomSlider';
import CustomRangeSlider from 'src/components/forms/theme-elements/CustomRangeSlider';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import CustomDisabledButton from 'src/components/forms/theme-elements/CustomDisabledButton';
import CustomOutlinedButton from 'src/components/forms/theme-elements/CustomOutlinedButton';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import AddIcon from '@mui/icons-material/Add';
import ParentCard from 'src/components/shared/ParentCard';
import { IconMoodSmile, IconPaperclip, IconPhoto, IconSend, IconVolume, IconVolume2 } from '@tabler/icons-react';


function CustomThumbComponent(props: SliderValueLabelProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
}

const AssistantEditor = () => {
  const [age, setAge] = React.useState('1');
  const [select1, setSelect] = React.useState('1');
  const [select2, setSelect2] = React.useState('1');
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Lấy file đầu tiên trong danh sách
    if (file) {
      console.log('File đã chọn:', file.name);
    }
  };
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleChange4 = (event2: any) => {
    setSelect(event2.target.value);
  };

  const handleChange5 = (event3: any) => {
    setSelect2(event3.target.value);
  };

  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  const [value3, setValue3] = React.useState(30);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange6 = (event: any, newValue: any) => {
    setValue3(newValue);
  };

  return (
    <PageContainer title="Editor Assistant" description="this is Custom Form page">
      <ParentCard title="Playground">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={6}>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField id="name" placeholder="Enter a user friendly name" variant="outlined" fullWidth />
            
            <CustomFormLabel htmlFor="cname">Instructions</CustomFormLabel>
            <CustomTextField id="cname" placeholder="You are a helpful assistant" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="name">Tools</CustomFormLabel>
            <input
                accept="*/*" // Định nghĩa loại file có thể upload, bạn có thể thay đổi theo nhu cầu
                style={{ display: 'none' }} // Ẩn input mặc định
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleFileChange} // Gọi hàm xử lý khi file được chọn
            />
            <label htmlFor="contained-button-file">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <FormControlLabel style={{width:'83%'}} control={<CustomSwitch />} label="File search" />
                    <Button variant="contained" color="primary" component="span" style={{marginBottom:'10px',marginTop:'10px'}}>
                        <AddIcon fontSize='small' style={{marginRight:'10px'}}/>File
                    </Button>

                </Grid>

                <Grid item xs={12} sm={6} lg={12}>
                    <FormControlLabel style={{width:'83%'}} control={<CustomSwitch />} label="Code interpreter" />
                    <Button variant="contained" color="primary" component="span" style={{marginBottom:'10px'}}>
                        <AddIcon fontSize='small' style={{marginRight:'10px'}}/>File
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    
                    
                </Grid>
            </Grid>
            </label>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 2 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={6}>
            <CustomFormLabel htmlFor="demo-simple-select">Model</CustomFormLabel>
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
              //   onChange={handleChange}
                fullWidth
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </CustomSelect>
              <CustomFormLabel>
                  <CustomFormLabel>Response format</CustomFormLabel>
                  <CustomSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      //   onChange={handleChange}
                      fullWidth
                  >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                  </CustomSelect>

                  <CustomFormLabel style={{width:'34%',marginBottom:'10px'}} htmlFor="functions">
                    Functions
                  </CustomFormLabel>
                  <Button variant="contained" color="primary" component="span" style={{marginBottom:'10px'}}>
                      <AddIcon fontSize='small' style={{marginRight:'10px'}}/>Functions
                  </Button>
                
              </CustomFormLabel>
              
            
            
          </Grid>
       
          {/* ----------------------------------- */}
          {/* column 7 */}
          {/* ----------------------------------- */}

          <Grid item xs={12} sm={12} lg={12}>
            {/* button */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="space-between"
              mt={1}
            >
              <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary">
                  Add New
                </Button>
                {/* <CustomOutlinedButton variant="outlined">Add New</CustomOutlinedButton> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default AssistantEditor;
