import { FormControl, MenuItem, Select, SelectChangeEvent, Grid } from '@mui/material';
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
interface ModelProps {
  values: {
    model: string;
  };
}
const Model = ({ values }: ModelProps) => {
  console.log(values);
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ paddingLeft: 38 }}>
        <CustomFormLabel htmlFor="name">Chọn model</CustomFormLabel>
        <FormControl fullWidth variant="outlined">
          {/* <InputLabel id="select-label">Chọn tùy chọn</InputLabel> */}
          <Select
            labelId="select-label"
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Chọn tùy chọn
            </MenuItem>
            <MenuItem value="option1">Tùy chọn 1</MenuItem>
            <MenuItem value="option2">Tùy chọn 2</MenuItem>
            <MenuItem value="option3">Tùy chọn 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
};

export default Model;
