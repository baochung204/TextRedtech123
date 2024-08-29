import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { IconChevronDown } from '@tabler/icons-react';

const CompanyAffiliate = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <form>
        <Stack spacing={3}>
          <Typography variant="h6" px={2} py={1}>
            Đăng ký affiliate doanh nghiệp
          </Typography>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Thông tin cá nhân
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box>
                <CustomFormLabel htmlFor="name">Họ và tên</CustomFormLabel>
                <CustomTextField
                  id="name"
                  variant="outlined"
                  placeholder="Nhập tên của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="phonenumber">Số điện thoại</CustomFormLabel>
                <CustomTextField
                  id="phonenumber"
                  variant="outlined"
                  placeholder="Nhập số điện thoại"
                  fullWidth
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Thông tin công ty
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box>
                <CustomFormLabel htmlFor="registration">
                  Biên bản xác nhận doanh nghiệp
                </CustomFormLabel>
                <Input
                  id="registration"
                  type="file"
                  fullWidth
                  inputProps={{ accept: '*' }} // Accept all file types. You can specify specific types like "image/*", "application/pdf", etc.
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
                <CustomTextField
                  id="companyName"
                  type="text"
                  variant="outlined"
                  placeholder="Nhập tên của công ty"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="taxCode">Mã số thuế</CustomFormLabel>
                <CustomTextField
                  id="taxCode"
                  type="text"
                  variant="outlined"
                  placeholder="Mã số thuế của công ty"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="companyEmail">Gmail công ty</CustomFormLabel>
                <CustomTextField
                  id="companyEmail"
                  variant="outlined"
                  placeholder="Nhập gmail công ty của bạn"
                  fullWidth
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Thông tin tài khoản
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box>
                <CustomFormLabel htmlFor="accountNumber">Số tài khoản</CustomFormLabel>
                <CustomTextField
                  id="accountNumber"
                  variant="outlined"
                  placeholder="Nhập số tài khoản của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="accountName">Tên tài khoản</CustomFormLabel>
                <CustomTextField
                  id="accountName"
                  variant="outlined"
                  placeholder="Nhập tên tài khoản của bạn"
                  fullWidth
                />
              </Box>
              <Grid container spacing={3} mb={2} mt={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="bank-select-label">Chọn ngân hàng</InputLabel>
                    <Select labelId="bank-select-label" id="bank-select" label="Chọn ngân hàng">
                      <MenuItem value="mb">Mb bank</MenuItem>
                      <MenuItem value="tp">TP bank</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="branch-select-label">Chi nhánh ngân hàng</InputLabel>
                    <Select
                      labelId="branch-select-label"
                      id="branch-select"
                      label="Chi nhánh ngân hàng"
                    >
                      <MenuItem value="hanoi">Hà Nội</MenuItem>
                      <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Box mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/"
                >
                  Hủy
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="success" size="large" fullWidth type="submit">
                  Đăng ký
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default CompanyAffiliate;
