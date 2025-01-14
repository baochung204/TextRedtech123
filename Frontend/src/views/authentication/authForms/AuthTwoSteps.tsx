// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

const AuthTwoSteps = () => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return; 

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && codes[index] === '') {

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const isFormValid = codes.every(code => code !== ''); 

  return (
    <Box mt={4}>
      <Stack mb={3}>
        <CustomFormLabel htmlFor="code">Nhập mã bảo mật gồm 6 chữ số của bạn</CustomFormLabel>
        <Stack spacing={2} direction="row">
          {codes.map((code, index) => (
            <CustomTextField
              key={index}
              value={code}
              onChange={(e: any) => handleChange(index, e.target.value)}
              inputRef={(el: any) => (inputRefs.current[index] = el)}
              variant="outlined"
              fullWidth
              onKeyDown={(e: any) => handleKeyDown(index, e)}
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }} 
            />
          ))}
        </Stack>
      </Stack>


      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        to="/"
        disabled={!isFormValid} 
      >
        Xác minh tài khoản của tôi
      </Button>

      <Stack direction="row" spacing={1} mt={3}>
        <Typography color="textSecondary" variant="h6" fontWeight="400">
          Bạn chưa nhận được mã?
        </Typography>
        <Typography
          component={Link}
          to="/"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Gửi lại
        </Typography>
      </Stack>
    </Box>
  );
};

export default AuthTwoSteps;
