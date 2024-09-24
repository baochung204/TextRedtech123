import { Box, Grid, ListItemText, MenuItem, Typography, Button, useTheme, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from 'src/components/apps/sell/layout/Tags';

interface CurrencyType {
  value: string;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: 'female', label: 'Nữ' },
  { value: 'male', label: 'Nam' },
  { value: 'other', label: 'Khác' },
];

const channels: CurrencyType[] = [
  { value: 'Makerting', label: 'MKT' },
  { value: 'Zalo', label: 'Zalo' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  // { value: 'other', label: 'Other' },
];

const PopupAddList2 = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      gender: '',
      email: '',
      dob: '',
      notes: '',
      assistant: '',
      tags: '',
      selectedChannels: [],
      companyName: '',
      companyAddress: '',
      taxId: '',
      companyEmail: '',
      companyPhone: '',
      companyWebsite: '',
      facebookUrl: '',
      zaloUrl: '',
      instagramUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Tên khách hàng là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .when('email', {
          is: (email: string) => !email, // Nếu email không có giá trị
          then: Yup.string().required('Số điện thoại khách hàng là bắt buộc'),
        }),
      gender: Yup.string(),
      email: Yup.string().required('Email là bắt buộc'),
      // .email('Email không hợp lệ')
      // .when('phone', {
      //   is: (phone:string) => !phone, // Nếu phone không có giá trị
      //   then: Yup.string().required('Email là bắt buộc')
      // }),
      dob: Yup.date(),
      notes: Yup.string(),
      assistant: Yup.string(),
      tags: Yup.string(),
      selectedChannels: Yup.array().min(1, 'Chọn ít nhất một kênh'),
      companyName: Yup.string(),
      companyAddress: Yup.string(),
      taxId: Yup.string(),
      companyEmail: Yup.string().email('Email không hợp lệ'),
      companyPhone: Yup.string().matches(
        /^(0[3|5|7|8|9])+([0-9]{8})$/,
        'Số điện thoại không hợp lệ',
      ),
      companyWebsite: Yup.string().url('URL không hợp lệ'),
      facebookUrl: Yup.string()
        .matches(/^(https?:\/\/)?(www\.)?facebook\.com/, 'URL phải là của Facebook')
        .url('URL không hợp lệ'),
      zaloUrl: Yup.string()
        .matches(/^(https?:\/\/)?(www\.)?zalo\.me/, 'URL phải là của Zalo')
        .url('URL không hợp lệ'),
      instagramUrl: Yup.string()
        .matches(/^(https?:\/\/)?(www\.)?instagram\.com/, 'URL phải là của Instagram')
        .url('URL không hợp lệ'),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <>
      <Typography padding={'20px'} fontSize={'30px'}  >Thêm khách hàng</Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* Thông tin cá nhân */}
        <Box
          mb={4}
          p={4}
          sx={{
            border: 'none',
            borderRadius: '8px',
            boxShadow: 2,
            bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.5rem',
              mb: 2,
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#fff' : '#333',
            }}
          >
            Thông tin cá nhân
          </Typography>
          <Grid container spacing={2}>
            {/* Cột trái */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="name">Tên khách hàng</CustomFormLabel>
                  <CustomTextField
                    id="name"
                    variant="outlined"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="phone">Số điện thoại</CustomFormLabel>
                  <CustomTextField
                    id="phone"
                    variant="outlined"
                    fullWidth
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                  <CustomTextField
                    id="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="gender">Giới tính</CustomFormLabel>
                  <CustomSelect
                    id="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    name="gender"
                    fullWidth
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.touched.gender && Boolean(formik.errors.gender) && (
                    <Typography color="error" variant="body2">
                      {formik.errors.gender}
                    </Typography>
                  )}
                </Grid>




              </Grid>
            </Grid>

            {/* Cột phải */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="dob">Ngày sinh</CustomFormLabel>
                  <CustomTextField
                    id="dob"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    name="dob"
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="notes">Ghi chú</CustomFormLabel>
                  <CustomTextField
                    id="notes"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={6}
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                    name="notes"
                    error={formik.touched.notes && Boolean(formik.errors.notes)}
                    helperText={formik.touched.notes && formik.errors.notes}
                  />
                </Grid>

              </Grid>
            </Grid>
          </Grid>

        </Box>

        {/* Thông tin trợ lý và kênh */}
        <Box
          mb={4}
          p={4}
          sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: 2,
            bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.5rem',
              mb: 2,
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#fff' : '#333',
            }}
          >
            Trợ lý và kênh
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="assistant">Trợ lý</CustomFormLabel>
              <CustomTextField
                id="assistant"
                variant="outlined"
                fullWidth
                value={formik.values.assistant}
                onChange={formik.handleChange}
                name="assistant"
                error={formik.touched.assistant && Boolean(formik.errors.assistant)}
                helperText={formik.touched.assistant && formik.errors.assistant}
              />
              <CustomFormLabel htmlFor="tags" sx={{ mt: 2 }}>
                Tags
              </CustomFormLabel>
              <Tags />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="selectedChannels">Kênh</CustomFormLabel>
              <CustomSelect
                id="selectedChannels"
                multiple
                value={formik.values.selectedChannels}
                onChange={(event: any) => {
                  formik.setFieldValue('selectedChannels', event.target.value);
                }}
                name="selectedChannels"
                renderValue={(selected: any) => selected.join(', ')}
                fullWidth
                variant="outlined"
              >
                {channels.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <ListItemText primary={option.label} /><Box
                      mb={4}
                      p={4}
                      sx={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: 2,
                        bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.5rem',
                          mb: 2,
                          fontWeight: 'bold',
                          color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                        }}
                      >
                        Trợ lý và kênh
                      </Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          {/* Trợ lý */}
                          <CustomFormLabel htmlFor="assistant">Trợ lý</CustomFormLabel>
                          <CustomTextField
                            id="assistant"
                            variant="outlined"
                            fullWidth
                            value={formik.values.assistant}
                            onChange={formik.handleChange}
                            name="assistant"
                            error={formik.touched.assistant && Boolean(formik.errors.assistant)}
                            helperText={formik.touched.assistant && formik.errors.assistant}
                          />

                          {/* Tags */}
                          <CustomFormLabel htmlFor="tags" sx={{ mt: 3 }}>
                            Tags
                          </CustomFormLabel>
                          <Box
                            sx={{
                              maxWidth: '150px', // Giới hạn chiều rộng của phần Tags
                              maxHeight: '150px', // Giới hạn chiều cao của phần Tags
                              overflowY: 'auto',  // Thêm cuộn dọc nếu nội dung vượt quá chiều cao
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              padding: '8px',
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 1, // Khoảng cách giữa các tag
                            }}
                          >
                            <Tags /> {/* Component hiển thị các tag */}
                          </Box>

                          {formik.touched.tags && Boolean(formik.errors.tags) && (
                            <Typography color="error" variant="body2">
                              {formik.errors.tags}
                            </Typography>
                          )}
                        </Grid>

                        <Grid item xs={12} md={6}>
                          {/* Kênh */}
                          <CustomFormLabel htmlFor="selectedChannels">Kênh</CustomFormLabel>
                          <CustomSelect
                            id="selectedChannels"
                            multiple
                            value={formik.values.selectedChannels}
                            onChange={(event: any) => {
                              formik.setFieldValue('selectedChannels', event.target.value);
                            }}
                            name="selectedChannels"
                            renderValue={(selected: any) => selected.join(', ')}
                            fullWidth
                            variant="outlined"
                          >
                            {channels.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                <ListItemText primary={option.label} />
                              </MenuItem>
                            ))}
                          </CustomSelect>
                          {formik.touched.selectedChannels && Boolean(formik.errors.selectedChannels) && (
                            <Typography color="error" variant="body2">
                              {formik.errors.selectedChannels}
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                    </Box>

                  </MenuItem>
                ))}
              </CustomSelect>
              {formik.touched.selectedChannels && Boolean(formik.errors.selectedChannels) && (
                <Typography color="error" variant="body2">
                  {formik.errors.selectedChannels}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Thông tin công ty */}
        <Box
          mb={4}
          p={4}
          sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: 2,
            bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.5rem',
              mb: 2,
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#fff' : '#333',
            }}
          >
            Thông tin công ty
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
              <CustomTextField
                id="companyName"
                variant="outlined"
                fullWidth
                value={formik.values.companyName}
                onChange={formik.handleChange}
                name="companyName"
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
              />
              <CustomFormLabel htmlFor="companyAddress" sx={{ mt: 2 }}>
                Địa chỉ công ty
              </CustomFormLabel>
              <CustomTextField
                id="companyAddress"
                variant="outlined"
                fullWidth
                value={formik.values.companyAddress}
                onChange={formik.handleChange}
                name="companyAddress"
                error={formik.touched.companyAddress && Boolean(formik.errors.companyAddress)}
                helperText={formik.touched.companyAddress && formik.errors.companyAddress}
              />
              <CustomFormLabel htmlFor="taxId" sx={{ mt: 2 }}>
                Mã số thuế
              </CustomFormLabel>
              <CustomTextField
                id="taxId"
                variant="outlined"
                fullWidth
                value={formik.values.taxId}
                onChange={formik.handleChange}
                name="taxId"
                error={formik.touched.taxId && Boolean(formik.errors.taxId)}
                helperText={formik.touched.taxId && formik.errors.taxId}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="companyEmail">Email công ty</CustomFormLabel>
              <CustomTextField
                id="companyEmail"
                type="email"
                variant="outlined"
                fullWidth
                value={formik.values.companyEmail}
                onChange={formik.handleChange}
                name="companyEmail"
                error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
                helperText={formik.touched.companyEmail && formik.errors.companyEmail}
              />
              <CustomFormLabel htmlFor="companyPhone" sx={{ mt: 2 }}>
                Số điện thoại công ty
              </CustomFormLabel>
              <CustomTextField
                id="companyPhone"
                variant="outlined"
                fullWidth
                value={formik.values.companyPhone}
                onChange={formik.handleChange}
                name="companyPhone"
                error={formik.touched.companyPhone && Boolean(formik.errors.companyPhone)}
                helperText={formik.touched.companyPhone && formik.errors.companyPhone}
              />
              <CustomFormLabel htmlFor="companyWebsite" sx={{ mt: 2 }}>
                Website công ty
              </CustomFormLabel>
              <CustomTextField
                id="companyWebsite"
                variant="outlined"
                fullWidth
                value={formik.values.companyWebsite}
                onChange={formik.handleChange}
                name="companyWebsite"
                error={formik.touched.companyWebsite && Boolean(formik.errors.companyWebsite)}
                helperText={formik.touched.companyWebsite && formik.errors.companyWebsite}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Thông tin mạng xã hội */}
        <Box
          mb={4}
          p={4}
          sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: 2,
            bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.5rem',
              mb: 2,
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#fff' : '#333',
            }}
          >
            Mạng xã hội
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CustomFormLabel htmlFor="facebookUrl">Facebook</CustomFormLabel>
              <CustomTextField
                placeholder="https://www.facebook.com/abc"
                id="facebookUrl"
                type="url"
                variant="outlined"
                fullWidth
                value={formik.values.facebookUrl}
                onChange={formik.handleChange}
                name="facebookUrl"
                error={formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)}
                helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomFormLabel htmlFor="zaloUrl">Zalo</CustomFormLabel>
              <CustomTextField
                placeholder="https://www.zalo.com/abc"
                id="zaloUrl"
                type="url"
                variant="outlined"
                fullWidth
                value={formik.values.zaloUrl}
                onChange={formik.handleChange}
                name="zaloUrl"
                error={formik.touched.zaloUrl && Boolean(formik.errors.zaloUrl)}
                helperText={formik.touched.zaloUrl && formik.errors.zaloUrl}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomFormLabel htmlFor="instagramUrl">Instagram</CustomFormLabel>
              <CustomTextField
                placeholder="https://www.instagram.com/abc"
                id="instagramUrl"
                type="url"
                variant="outlined"
                fullWidth
                value={formik.values.instagramUrl}
                onChange={formik.handleChange}
                name="instagramUrl"
                error={formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)}
                helperText={formik.touched.instagramUrl && formik.errors.instagramUrl}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Lưu thông tin
          </Button>
        </Box>
      </form>
    </>

  );
};

export default PopupAddList2;
