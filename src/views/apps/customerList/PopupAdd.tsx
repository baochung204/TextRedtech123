import React from 'react';
import { Box, FormControlLabel, Button, Grid, MenuItem, FormControl, Alert } from '@mui/material';
import ParentCard from 'src/components/shared/ParentCard';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomRadio from 'src/components/forms/theme-elements/CustomRadio';

interface currencyType {
  value: string;
  label: string;
}

const currencies: currencyType[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
];

const countries: currencyType[] = [
  { value: 'india', label: 'India' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'srilanka', label: 'Srilanka' },
];

const PopupAdd = () => {
  const [currency, setCurrency] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('');
  const [country, setCountry] = React.useState('');

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <ParentCard
        title=""
        footer={
          <>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 1, fontSize: '1.1rem', padding: '8px 16px' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: '1.1rem', padding: '8px 16px' }}
            >
              Submit
            </Button>
          </>
        }
      >
        <>
          <Alert severity="info" sx={{ fontSize: '1.2rem', mb: 2 }}>Thông tin cá nhân</Alert>
          <form>
            <Grid container spacing={3} mb={3}>
              <Grid item lg={6} md={12} sm={12}>
                <CustomFormLabel htmlFor="fname-text" sx={{ fontSize: '1.1rem' }}>
                  First Name
                </CustomFormLabel>
                <CustomTextField
                  id="fname-text"
                  variant="outlined"
                  fullWidth
                  sx={{ fontSize: '1rem' }}
                />
                <CustomFormLabel htmlFor="standard-select-currency" sx={{ fontSize: '1.1rem' }}>
                  Select Gender
                </CustomFormLabel>
                <CustomSelect
                  id="standard-select-currency"
                  value={currency}
                  onChange={handleChange2}
                  fullWidth
                  variant="outlined"
                  sx={{ fontSize: '1rem' }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect>
                <CustomFormLabel sx={{ fontSize: '1.1rem' }}>Membership</CustomFormLabel>

                <FormControl sx={{ width: '100%' }}>
                  <Box>
                    <FormControlLabel
                      checked={selectedValue === 'a'}
                      onChange={handleChange3}
                      value="a"
                      label="Free"
                      name="radio-button-demo"
                      control={<CustomRadio />}
                      sx={{ fontSize: '1rem' }}
                    />
                    <FormControlLabel
                      checked={selectedValue === 'b'}
                      onChange={handleChange3}
                      value="b"
                      label="Paid"
                      control={<CustomRadio />}
                      name="radio-button-demo"
                      sx={{ fontSize: '1rem' }}
                    />
                  </Box>
                </FormControl>
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <CustomFormLabel htmlFor="lname-text" sx={{ fontSize: '1.1rem' }}>
                  Last Name
                </CustomFormLabel>
                <CustomTextField
                  id="lname-text"
                  variant="outlined"
                  fullWidth
                  sx={{ fontSize: '1rem' }}
                />
                <CustomFormLabel htmlFor="date" sx={{ fontSize: '1.1rem' }}>
                  Date of Birth
                </CustomFormLabel>
                <CustomTextField
                  id="date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ fontSize: '1rem' }}
                />
              </Grid>
            </Grid>
          </form>
          <Alert severity="info" sx={{ fontSize: '1.2rem', mb: 2 }}>Địa chỉ</Alert>
          <Grid container spacing={3} mb={3} mt={1}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <CustomFormLabel htmlFor="street-text" sx={{ fontSize: '1.1rem' }}>
                Street
              </CustomFormLabel>
              <CustomTextField
                id="street-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CustomFormLabel htmlFor="city-text" sx={{ fontSize: '1.1rem' }}>
                City
              </CustomFormLabel>
              <CustomTextField
                id="city-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CustomFormLabel htmlFor="state-text" sx={{ fontSize: '1.1rem' }}>
                State
              </CustomFormLabel>
              <CustomTextField
                id="state-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CustomFormLabel htmlFor="post-text" sx={{ fontSize: '1.1rem' }}>
                Post Code
              </CustomFormLabel>
              <CustomTextField
                id="post-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <CustomFormLabel htmlFor="country-text" sx={{ fontSize: '1.1rem' }}>
                Country
              </CustomFormLabel>
              <CustomSelect
                id="country-select"
                value={country}
                onChange={handleChange4}
                fullWidth
                variant="outlined"
                sx={{ fontSize: '1rem' }}
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Grid>
          </Grid>
        </>
      </ParentCard>
    </div>
  );
};

export default PopupAdd;
